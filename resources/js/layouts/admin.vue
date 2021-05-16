<template>
    <div>
        <admin-header></admin-header>
        <router-view :name="admin"></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AdminHeader from '../components/AdminHeader'
import AppFooter from '../components/AppFooter'
export default {
    name: 'admin',
    components: {
        'admin-header':AdminHeader,
        'app-footer':AppFooter

    }
}
</script>
