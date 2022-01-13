import { createRouter, createWebHistory } from 'vue-router';

function guest(to, from, next) {
    if (sessionStorage.token) {
        next({ name: 'dashboard' });
    } else next();
}

function guard(to, from, next) {
    if (sessionStorage.token) {
        next();
    } else {
        next({ name: 'login' });
    }
}

const routes = [
    {
        path: '/',
        name: 'dashboard',
        exact: true,
        component: () => import('./components/Dashboard.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Dashboard', label: 'Dashboard' }],
        },
    },
    {
        path: '/banner-management',
        name: 'BannerManagement',
        component: () => import('./pages/Banner/BannerManagement.vue'),
        beforeEnter: guard,
    },
    {
        path: '/create-banner',
        name: 'CreateBanner',
        component: () => import('./pages/Banner/CreateBanner.vue'),
        beforeEnter: guard,
    },
    {
        path: '/edit-banner/:id',
        name: 'EditBanner',
        component: () => import('./pages/Banner/EditBanner.vue'),
        beforeEnter: guard,
    },
    {
        path: '/user',
        name: 'User',
        exact: true,
        component: () => import('./pages/user/User.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'User', label: 'User' }],
        },
    },
    {
        path: '/add-user',
        name: 'Adduser',
        exact: true,
        component: () => import('./pages/user/Adduser.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'User', label: 'Add User' }],
        },
    },
    {
        path: '/user/view-user/:id',
        name: 'ViewUser',
        exact: true,
        component: () => import('./pages/user/ViewUser.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'User', label: 'View User' }],
        },
    },
    {
        path: '/edit-notice/:id',
        name: 'editNotice',
        exact: true,
        component: () => import('./pages/notice/EditNotice.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Notice', label: 'Edit Notice' }],
        },
    },
    {
        path: '/user/edit-user/:id',
        name: 'UpdateUser',
        exact: true,
        component: () => import('./pages/user/UpdateUser.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'User', label: 'Update User' }],
        },
    },
    {
        path: '/notice',
        name: 'NoticeList',
        component: () => import('./pages/notice/NoticeList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'NoticePage' }],
        },
    },
    {
        path: '/add-notice',
        name: 'Addnotice',
        exact: true,
        component: () => import('./pages/notice/AddNotice.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Notice', label: 'Add Notice' }],
        },
    },
    {
        path: '/view-notice/:id',
        name: 'ViewNotice',
        exact: true,
        component: () => import('./pages/notice/ViewNotice.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Notice', label: 'View Notice' }],
        },
    },
    {
        path: '/inquiry-type',
        name: 'InquiryType',
        exact: true,
        component: () => import('./pages/inquiry/InquiryType.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Query', label: '1.1 Query' }],
        },
    },
    {
        path: '/inquiry',
        name: 'Inquiry',
        exact: true,
        component: () => import('./pages/inquiry/Inquiry.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Inuery', label: 'inquiry list' }],
        },
    },
    {
        path: '/formlayout',
        name: 'formlayout',
        component: () => import('./components/FormLayoutDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Form Layout' }],
        },
    },
    {
        path: '/input',
        name: 'input',
        component: () => import('./components/InputDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Input' }],
        },
    },
    {
        path: '/floatlabel',
        name: 'floatlabel',
        component: () => import('./components/FloatLabelDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Float Label' }],
        },
    },
    {
        path: '/invalidstate',
        name: 'invalidstate',
        component: () => import('./components/InvalidStateDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Invalid State' }],
        },
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('./components/ButtonDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Button' }],
        },
    },
    {
        path: '/table',
        name: 'table',
        component: () => import('./components/TableDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Table' }],
        },
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('./components/ListDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'List' }],
        },
    },
    {
        path: '/tree',
        name: 'tree',
        component: () => import('./components/TreeDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Tree' }],
        },
    },
    {
        path: '/panel',
        name: 'panel',
        component: () => import('./components/PanelsDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Panel' }],
        },
    },
    {
        path: '/overlay',
        name: 'overlay',
        component: () => import('./components/OverlayDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Overlay' }],
        },
    },
    {
        path: '/media',
        name: 'media',
        component: () => import('./components/MediaDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Media' }],
        },
    },
    {
        path: '/menu',
        component: () => import('./components/MenuDemo.vue'),
        children: [
            {
                path: '',
                component: () => import('./components/menu/PersonalDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                },
            },
            {
                path: '/menu/seat',
                component: () => import('./components/menu/SeatDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                },
            },
            {
                path: '/menu/payment',
                component: () => import('./components/menu/PaymentDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                },
            },
            {
                path: '/menu/confirmation',
                component: () => import('./components/menu/ConfirmationDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                },
            },
        ],
    },
    {
        path: '/messages',
        name: 'messages',
        component: () => import('./components/MessagesDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Messages' }],
        },
    },
    {
        path: '/file',
        name: 'file',
        component: () => import('./components/FileDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'File' }],
        },
    },
    {
        path: '/chart',
        name: 'chart',
        component: () => import('./components/ChartDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Charts' }],
        },
    },
    {
        path: '/misc',
        name: 'misc',
        component: () => import('./components/MiscDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Misc' }],
        },
    },
    {
        path: '/icons',
        name: 'icons',
        component: () => import('./utilities/Icons.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Icons' }],
        },
    },
    {
        path: '/widgets',
        name: 'widgets',
        component: () => import('./utilities/Widgets.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Widgets' }],
        },
    },
    {
        path: '/grid',
        name: 'grid',
        component: () => import('./utilities/GridDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Grid System' }],
        },
    },
    {
        path: '/spacing',
        name: 'spacing',
        component: () => import('./utilities/SpacingDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Spacing' }],
        },
    },
    {
        path: '/elevation',
        name: 'elevation',
        component: () => import('./utilities/ElevationDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Elevation' }],
        },
    },
    {
        path: '/typography',
        name: 'typography',
        component: () => import('./utilities/Typography.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Typography' }],
        },
    },
    {
        path: '/display',
        name: 'display',
        component: () => import('./utilities/DisplayDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Display' }],
        },
    },
    {
        path: '/flexbox',
        name: 'flexbox',
        component: () => import('./utilities/FlexBoxDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Flexbox' }],
        },
    },
    {
        path: '/text',
        name: 'text',
        component: () => import('./utilities/TextDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Text' }],
        },
    },
    {
        path: '/crud',
        name: 'crud',
        component: () => import('./pages/CrudDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Crud' }],
        },
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: () => import('./pages/CalendarDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Calendar' }],
        },
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: () => import('./pages/TimelineDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Timeline' }],
        },
    },
    {
        path: '/invoice',
        name: 'invoice',
        component: () => import('./pages/Invoice.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Invoice' }],
        },
    },
    {
        path: '/help',
        name: 'help',
        component: () => import('./pages/Help.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Help' }],
        },
    },
    {
        path: '/empty',
        name: 'empty',
        component: () => import('./components/EmptyPage.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Empty Page' }],
        },
    },
    {
        path: '/documentation',
        name: 'documentation',
        component: () => import('./components/Documentation.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Documentation' }],
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue'),
        beforeEnter: guest,
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('./pages/Error.vue'),
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue'),
    },
    {
        path: '/access',
        name: 'access',
        component: () => import('./pages/Access.vue'),
    },
    {
        path: '/cms',
        name: 'Cms',
        component: () => import('./pages/cms/Cms.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Cms' }],
        },
    },

    {
        path: '/faq',
        name: 'Faq',
        component: () => import('./pages/faq/FaqList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Faq' }],
        },
    },

    {
        path: '/faq/edit/:id',
        name: 'Faqedit',
        component: () => import('./pages/faq/EditFaq.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'EditFaq' }],
        },
    },

    {
        path: '/faq/add',
        name: 'Faqadd',
        component: () => import('./pages/faq/AddFaq.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Faqadd' }],
        },
    },
    {
        path: '/cms/view/:id',
        name: 'ViewCms',
        exact: true,
        component: () => import('./pages/cms/ViewCms.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Faq', label: 'View Cms' }],
        },
    },
    {
        path: '/cms/edit/:id',
        name: 'Cmsedit',
        component: () => import('./pages/cms/EditCms.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Cmsedit' }],
        },
    },
];

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
});

export default router;
