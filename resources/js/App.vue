<template>
    <div>
        <router-view :key="$route.fullPath"></router-view>
        <notifications group="notify" position="top right"/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
