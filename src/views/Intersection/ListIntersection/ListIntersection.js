import React, { PureComponent } from 'react';
import {  Card, CardBody, CardHeader, Table } from 'reactstrap';
import { Redirect } from 'react-router';
import Intersection from "./Intersection";
import CustomPagination from "../../CustomPagination/CustomPagination";
import {
    RESULTS_PER_PAGE_TARGET_LIST,
    URL_DELETE_INTERSECTION,
    URL_GET_ALL_INTERSECTION,
    URL_UPDATE_INTERSECTION
} from '../../../_constants/configurationConstants';
import {NotificationManager} from 'react-notifications';


const p= [
    {
        "semaphoreList": [
            {
                "longitudine": "22",
                "latitudine": "33",
                "red": "33",
                "green": "33",
                "saturation": "34"
            },
            {
                "longitudine": "22",
                "latitudine": "23",
                "red": "33",
                "green": "33",
                "saturation": "34"
            },
            {
                "longitudine": "22",
                "latitudine": "23",
                "red": "33",
                "green": "33",
                "saturation": "34"
            },
            {
                "longitudine": "22",
                "latitudine": "23",
                "red": "33",
                "green": "33",
                "saturation": "34"
            },
        ]
    }
];

const showFields = ["Phase 0: Red time","Phase 0: Green time","Phase 1: Red time","Phase 1: Green time","Show","Update","Delete"];

class ListIntersection extends PureComponent{
  constructor(props) {

    super(props);

    this.state = {
        intersections: [],
        hiddenCard: false,
        currentPage: 1,
        id: "",
    };
    this.hiddenCard = this.hiddenCard.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.createNotification = this.createNotification.bind(this);
    this.selectPage = this.selectPage.bind(this);
    this.selectLastPage = this.selectLastPage.bind(this);

  }

  hiddenCard(){
    this.setState({hiddenCard: !this.state.hiddenCard});
    if(this.state.hiddenCard)
      document.getElementById("card-list").style.display = "block";
    else
      document.getElementById("card-list").style.display = "none";
  }

    selectPage(page) {
    this.setState({
      currentPage: page
    });
  }

  selectLastPage() {
    this.setState({
      currentPage: Math.ceil(this.state.intersections.length / RESULTS_PER_PAGE_TARGET_LIST)
    });
  }

  refreshList() {
    fetch(URL_GET_ALL_INTERSECTION, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then(res => {
        this.setState({intersections: res });
      });

  }

  onDelete(intersection) {
    fetch((URL_DELETE_INTERSECTION+ intersection.id), {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then( (response)=> {
      if (response.ok) {
        this.createNotification("alert-success","INTERSECTION DELETED","Intersection has been successfully deleted");
        this.refreshList();
      } else{
        response.json().then((r)=>{
            this.createNotification("alert-danger",r.title,r.text);
          }
        );
      }
    });

  }

  componentDidMount() {

    fetch(URL_GET_ALL_INTERSECTION, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then(res => {
        this.setState({intersections: res });
      });
  }


  onUpdate(updateIntersection) {
      fetch(URL_UPDATE_INTERSECTION, {
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(
              updateIntersection
          ),
      }).then( (response)=> {
          if (response.ok) {
              this.createNotification("alert-success","INTERSECTION UPDATED","Intersection has been successfully updated");
              this.refreshList();
          } else{
              response.json().then((r)=>{
                      this.createNotification("alert-danger",r.title,r.text);
                  }
              );
          }
      });
  }


    createNotification(type, message, title) {
    switch (type) {
      case "alert-success":
        NotificationManager.success(message.toString(), title, 3000);
        break;
      case "alert-danger":
        NotificationManager.error(message.toString(), title, 5000);
        break;
      default:
        break;
    }
  }



  render() {

    let intersections = this.state.intersections.map((intersection,index)=>
        <Intersection key={intersection.id} intersection={intersection} index={index} onUpdate={this.onUpdate}  onDelete={this.onDelete} refreshList={this.refreshList}  />
    );

    const indexOfFirstTarget = RESULTS_PER_PAGE_TARGET_LIST * (this.state.currentPage - 1);
    const indexOfLastTarget = RESULTS_PER_PAGE_TARGET_LIST * (this.state.currentPage);


      let tableHeader = showFields.map((attribute,index) => {
        if(index>3){
            return (
                <th key={attribute} style={{"textAlign": "center","width":"80px"}}>{attribute}
                </th>
            );
        }else{
            return (
                <th key={attribute} style={{"textAlign": "center"}}>{attribute}
                </th>
            );
        }

    });
    const currentTableBody = intersections.slice(indexOfFirstTarget, indexOfLastTarget);
    return (
      <div className="animated fadeIn">
        <Card  >
          <CardHeader>
            <i className="fa fa-align-justify" onClick={this.hiddenCard} style={{cursor:"pointer"}}/><strong>Intersections List</strong>
          </CardHeader>
          <CardBody id="card-list" style={{display: 'block'}}>
            <Table style={{tableLayout:"fixed"}} responsive striped size="sm">
              <thead bgcolor="#ADD8E6">
              <tr>

                <th width="5px"><b>#</b></th>
                  <th><b>Id</b></th>

                {tableHeader}

              </tr>
              </thead>

              <tbody>
              {currentTableBody}
              </tbody>
            </Table>
            <div align="center">
              <div style={{display:"inline-block"}}>
                <CustomPagination numPages={Math.ceil(this.state.intersections.length / RESULTS_PER_PAGE_TARGET_LIST)} selectPage={this.selectPage} currentPage={this.state.currentPage}/>
              </div>
            </div>

          </CardBody>
        </Card>
      </div>

    );
  }
}
export default ListIntersection;
