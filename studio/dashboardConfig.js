export default {
  widgets: [
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
                  buildHookId: '605b46f4ba2eb45becaeafdd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wm5apako',
                  apiId: '0b87b6d3-126d-452c-bf52-aca2bd9c751e'
                },
                {
                  buildHookId: '605b46f5b96f0153ea5cd2d8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-r6tye4ms',
                  apiId: '1d64df5f-b193-4516-9d1d-87b85090cb1c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shyniben/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-r6tye4ms.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
