export const constantRoutes = [
    {
        path: '/',
        component: () => import('../../pages/index'),
        name: 'home'
    },
    {
        path: '/products',
        component: () => import('../../pages/products/index'),
        name: 'products',
    },
    {
        path: '/products/:slug',
        name: 'show-product',
        component: () => import('../../pages/products/detail')
    },
    {
        path: '/checkout',
        component: () => import('../../pages/cart/checkout'),
        name: 'checkout',
    },
    {
        path: '/login',
        component: () => import('../../pages/auth/login'),
        name: 'login'
    },
    {
        path: '/admin',
        component: () => import('../../pages/admin/index'),
        name: 'admin',
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: 'user',
                name: 'user-admin',
                components: {
                    admin: () => import('../../pages/admin/user')
                }
            },
            {
                path: 'products',
                name: 'products-admin',
                components: {
                    admin: () => import('../../pages/admin/product')
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
