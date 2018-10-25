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
        {
          name: 'Broken sensors',
          url: '/intersection/SensorsContainer',
          icon: 'fa fa-bullseye',
        },

      ]
    },

      {
          name: 'Query1',
          url: '/Query1Container',
          icon: 'fa fa-bullseye',
          children: [
              {
                  name: '15 minuti',
                  url: '/Query1Container/QueryRank15mContainer',
                  icon: 'fa fa-bullseye',
              },
              {
                  name: '1 ora',
                  url: '/Query1Container/QueryRank1hContainer',
                  icon: 'fa fa-bullseye',
              },
              {
                  name: '24 ore',
                  url: '/Query1Container/QueryRank24hContainer',
                  icon: 'fa fa-bullseye',
              },

          ]
      },
      {
          name: 'Query 2',
          url: '/Query2Container',
          icon: 'fa fa-bullseye',
          children: [
              {
                  name: '15 minutes',
                  url: '/Query2Container/QueryContainer15m',
                  icon: 'fa fa-bullseye',
              },
              {
                  name: '1 hour',
                  url: '/Query2Container/QueryContainer1h',
                  icon: 'fa fa-bullseye',
              },
              {
                  name: '24 hour',
                  url: '/Query2Container/QueryContainer24h',
                  icon: 'fa fa-bullseye',
              },

          ]
      },
      {
          name: 'Query 2',
          url: '/Query2Container',
          icon: 'fa fa-bullseye',
          children: [
              {
                  name: '15 minutes',
                  url: '/Query2Container/QueryContainer15m',
                  icon: 'fa fa-bullseye',
              },
              {
                  name: '1 hour',
                  url: '/Query2Container/QueryContainer1h',
                  icon: 'fa fa-bullseye',
              },
              {
                  name: '24 hour',
                  url: '/Query2Container/QueryContainer24h',
                  icon: 'fa fa-bullseye',
              },

          ]
      },
      {
          name: 'Statistics',
          url: '/Statistics',
          icon: 'fa fa-bullseye',
          children: [
              {
                  name: 'Statistics',
                  url: '/Statistics/Statistics',
                  icon: 'fa fa-bullseye',
              },


          ]
      },

    {
      divider: true,
    },
  ],
};
