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
      divider: true,
    },
  ],
};
