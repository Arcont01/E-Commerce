export const constantRoutes = [
    {
        path: '/',
        component: () => import('../../pages/Home'),
        name: 'home'
    },
    {
        path: '/products',
        component: () => import('../../pages/home/Products'),
        name: 'products',
    },
    {
        path: '/products/:slug',
        name: 'show-product',
        component: () => import('../../pages/home/ShowProduct')
    },
    {
        path: '/checkout',
        component: () => import('../../pages/home/Checkout'),
        name: 'checkout',
    },
    {
        path: '/login',
        component: () => import('../../pages/Login'),
        name: 'login'
    },
    {
        path: '/admin',
        component: () => import('../../pages/admin/Home'),
        name: 'admin',
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: 'user',
                name: 'user-admin',
                components: {
                    admin: () => import('../../pages/admin/User')
                }
            },
            {
                path: 'products',
                name: 'products-admin',
                components: {
                    admin: () => import('../../pages/admin/Product')
                }
            }
        ]
    },
    {
        path: '/404',
        name: '404',
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
