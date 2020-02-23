// const client = require('./clientJS');

// const query = `
//   "routes": *[_type == "route"] {
//     ...,
//     disallowRobot,
//     includeInSitemap,
//     page->{
//       _id,
//       title,
//       _createdAt,
//       _updatedAt
//     }
//   }
// }`;

// const reduceRoutes = (obj, route) => {
//     const { page = {}, slug = {} } = route;
//     const { _createdAt, _updatedAt } = page;
//     const { includeInSitemap, disallowRobot } = route;
//     const path = route['slug']['current'] === '/' ? '/' : `/${route['slug']['current']}`;
//     obj[path] = {
//         query: {
//             slug: slug.current,
//         },
//         includeInSitemap,
//         disallowRobot,
//         _createdAt,
//         _updatedAt,
//         page: '/',
//     };
//     return obj;
// };

// module.exports = {
//     exportPathMap: async function() {
//         return client.fetch(query).then(res => {
//             const { routes = [] } = res;
//             const nextRoutes = {
//                 // Routes imported from sanity
//                 ...routes.filter(({ slug }) => slug.current).reduce(reduceRoutes, {}),
//                 '/': { page: '/' },
//             };
//             return nextRoutes;
//         });
//     },
// };

// TODO: make dynamic based on a query to sanity
module.exports = {
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/graphql': { page: '/[page]', query: { page: 'graphql' } },
            '/graphql/test': {
                page: '/[page]/[secondaryPage]',
                query: { page: 'graphql', secondaryPage: 'test' },
            },
        };
    },
};
