<template>
    <div>
        <app-header></app-header>
        <router-view :name="home"></router-view>
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
export default {
    name: 'app',
    components: {
        'app-header':AppHeader
    }
}
</script>
