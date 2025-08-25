import type { StarlightSidebarTopicsUserConfig } from "starlight-sidebar-topics";

export const sidebarTopics: StarlightSidebarTopicsUserConfig = [
    {
        label: 'Docs',
        link: 'get-started/prerequisites',
        icon: 'rocket',
        items: [
            { label: 'Get Aspire', slug: 'get' },
            {
                label: 'Get Started', items: [
                    { label: 'Prerequisites', slug: 'get-started/prerequisites' },
                    { label: 'Installation', slug: 'get-started/installation' },
                    { label: 'First app', slug: 'get-started/first-app', badge: 'Quickstart' }
                ]
            },
            {
                label: 'Concepts', items: [
                    { label: 'Welcome', slug: 'get-started/welcome' },
                    { label: 'What is Aspire?', slug: 'get-started/what-is-aspire' },
                    { label: 'What is the AppHost?', slug: 'get-started/app-host' },
                    { label: 'Understanding Resources', slug: 'get-started/resources' },
                    { label: 'Deployment and App Topology', slug: 'get-started/deployment' }
                ]
            },
            {
                label: 'Architecture', items: [
                    { label: 'Resource Model', slug: 'architecture/resource-model' },
                    { label: 'Resource Hierarchies', slug: 'architecture/resource-hierarchies' },
                    { label: 'Resource API Patterns', slug: 'architecture/resource-api-patterns' },
                    { label: 'Resource Publishing', slug: 'architecture/resource-publishing' },
                    { label: 'Resource Examples', slug: 'architecture/resource-examples' },
                    { label: 'Glossary', slug: 'architecture/glossary' },
                ]
            }
        ]
    },
    {
        label: 'Integrations',
        link: '/integrations/gallery',
        icon: 'puzzle',
        items: [
            {
                label: 'Explore', items: [
                    { label: 'Gallery', slug: 'integrations/gallery' },
                    { label: 'Overview', slug: 'integrations/overview' },
                ]
            },
            {
                label: 'Database', items: [
                    { label: 'PostgreSQL', slug: 'integrations/postgres' },
                ]
            },
            {
                label: 'Messaging', items: [
                    { label: 'RabbitMQ', slug: 'integrations/rabbitmq' },
                ]
            }
        ],
    },
    {
        label: 'Dashboard',
        link: '/dashboard/overview',
        icon: 'list-format',
        items: [
            { label: 'Explore', autogenerate: { directory: 'dashboard' } },
        ]
    },
    {
        label: 'CLI Reference',
        link: '/reference/cli/overview',
        icon: 'forward-slash',
        items: [
            { label: 'Overview', slug: 'reference/cli/overview' },
            { label: 'Install', slug: 'reference/cli/install' },
            {
                label: 'Commands', items: [
                    { label: 'aspire', slug: 'reference/cli/commands/aspire' },
                    { label: 'aspire add', slug: 'reference/cli/commands/aspire-add' },
                    { label: 'aspire deploy', slug: 'reference/cli/commands/aspire-deploy' },
                    { 
                        label: 'aspire config', items: [
                            { label: 'aspire config', slug: 'reference/cli/commands/aspire-config' },
                            { label: 'aspire config list', slug: 'reference/cli/commands/aspire-config-list' },
                            { label: 'aspire config get', slug: 'reference/cli/commands/aspire-config-get' },
                            { label: 'aspire config set', slug: 'reference/cli/commands/aspire-config-set' },
                            { label: 'aspire config delete', slug: 'reference/cli/commands/aspire-config-delete' },
                        ]
                    },                    
                    { label: 'aspire exec', slug: 'reference/cli/commands/aspire-exec' },
                    { label: 'aspire new', slug: 'reference/cli/commands/aspire-new' },
                    { label: 'aspire run', slug: 'reference/cli/commands/aspire-run' },
                    { label: 'aspire publish', slug: 'reference/cli/commands/aspire-publish' },
                ]
            }
        ]
    },
    // {
    //     label: 'API Reference',
    //     id: 'reference-api',
    //     link: '/api',
    //     icon: 'document',
    //     items: [
    //         { 
    //             label: 'API Reference', 
    //             collapsed: false, 
    //             autogenerate: { directory: '/reference/api', collapsed: true }
    //         },
    //     ]
    // },
    {
        label: 'Community',
        link: '/community/videos',
        icon: 'heart',
        items: [
            {
                label: 'Videos',
                slug: 'community/videos'
            },
            {
                label: 'BlueSky',
                slug: 'community/posts',
                badge: {
                    text: '#aspire',
                    variant: 'note'
                }
            },
            {
                label: 'Contributors',
                slug: 'community/contributors',
            }
        ]
    }
];