import React, { Component } from 'react';
import ModalConfirm from "./ModalConfirm";
import UpdateIntersection from "./UpdateIntersection";
import ShowIntersection from "./ShowIntersection";



class Intersection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: true

        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };



    handleDelete() {
        this.toggle();
        this.props.onDelete(this.props.intersection);
    }

    render() {
        return(
            <React.Fragment>
                <ModalConfirm toggle={this.toggle} handleDelete={this.handleDelete} modal={this.state.modal}/>
                <tr>
                    <td width="30px"><b>{this.props.index + 1}</b></td>
                    <td align="center">
                    </td>

                    <td align="center">
                        <ShowIntersection intersection={this.props.intersection}/>
                    </td>

                  <td align="center">
                        <UpdateIntersection intersection={this.props.intersection}
                                            onUpdate={this.props.onUpdate}
                                            refreshList={this.props.refreshList}/>
                    </td>

                    <td align="center">
                        <i style={{cursor:"pointer"}} onClick={this.toggle}  className="fa fa-trash-o fa-lg mt-1 "/><br />
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}
export default Intersection;
