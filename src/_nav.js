export default {
  items: [
    {
      name: 'Home',
      url: '/dashboard',
      icon: 'fa fa-paper-plane-o',
    },

    {
      name: 'Intersection',
      url: '/intersection',
      icon: 'fa fa-bullseye',
      children: [
        {
          name: 'Create intersection',
          url: '/intersection/CreateIntersection',
          icon: 'fa fa-bullseye',
        },
        {
          name: 'Show intersections',
          url: '/intersection/ListIntersection',
          icon: 'fa fa-bullseye',
        },

      ]
    },

      {
          name: 'Query1',
          url: '/QueryContainer',
          icon: 'fa fa-bullseye',
          children: [
              {
                  name: '15 minuti',
                  url: '/QueryContainer/QueryContainer',
                  icon: 'fa fa-bullseye',
              },
              {
                  name: '1 ora',
                  url: '/Query1/Minutiquindici',
                  icon: 'fa fa-bullseye',
              },
              {
                  name: '24 ore',
                  url: '/Query1/Minutiquindici',
                  icon: 'fa fa-bullseye',
              },

          ]
      },
      {
          name: 'Query 2',
          url: '/intersection',
          icon: 'fa fa-bullseye',
          children: [
              {
                  name: '15 minuti',
                  url: '/intersection/CreateIntersection',
                  icon: 'fa fa-bullseye',
              },
              {
                  name: '1 ora',
                  url: '/intersection/ListIntersection',
                  icon: 'fa fa-bullseye',
              },
              {
                  name: '24 ore',
                  url: '/intersection/ListIntersection',
                  icon: 'fa fa-bullseye',
              },

          ]
      },
      {
          name: 'Query 3',
          url: '/intersection',
          icon: 'fa fa-bullseye',
          children: [
              {
                  name: '15 minuti',
                  url: '/intersection/CreateIntersection',
                  icon: 'fa fa-bullseye',
              },
              {
                  name: '1 ora',
                  url: '/intersection/ListIntersection',
                  icon: 'fa fa-bullseye',
              },
              {
                  name: '24 ore',
                  url: '/intersection/ListIntersection',
                  icon: 'fa fa-bullseye',
              },

          ]
      },

    {
      divider: true,
    },
  ],
};
