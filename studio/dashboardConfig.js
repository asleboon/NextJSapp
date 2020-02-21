export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5055384468538c042e3672',
                  title: 'Sanity Studio',
                  name: 'NextJSapp-studio',
                  apiId: 'a7239377-455d-44d5-a002-f0f1cadcf889'
                },
                {
                  buildHookId: '5e505538f91fc63a996cbdb5',
                  title: 'Landing pages Website',
                  name: 'NextJSapp',
                  apiId: 'cb3fd8a4-b1a8-4fa5-9ab5-840c63ae6bb9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/asleboon/NextJSapp',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://NextJSapp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
