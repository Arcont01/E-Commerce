const routes = [
    {
        path: '/login',
        component: () => import('../../pages/auth/login'),
        name: 'login'
    },
    {
        path: '/admin',
        component: () => import('../../layouts/admin'),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '',
                component: () => import('../../pages/admin/index'),
                name: 'admin',
            },
            {
                path: 'users',
                name: 'user-admin',
                component: () => import('../../pages/admin/user')

            },
            {
                path: 'products',
                name: 'products-admin',
                component: () => import('../../pages/admin/product')
            }
        ]
    },
    {
        path: '/',
        component: () => import('../../layouts/default'),
        children: [
            {
                path: '',
                component: () => import('../../pages/index'),
                name: 'index',
            },
            {
                path: 'checkout',
                component: () => import('../../pages/cart/checkout'),
                name: 'checkout',
            },
            {
                path: ':slug',
                name: 'product-detail',
                component: () => import('../../pages/products/detail')
            }
        ]
    },
    {
        path: '/404',
        name: 'not-found',
        component: () => import('../../pages/errors/404')
    },
    {
        path: '*',
        redirect: '/404',
    },
    {
        path: '/admin/*',
        redirect: 'login',
    }
];

export default routes;
