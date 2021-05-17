<template>
  <header>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
      class="shadow-sm py-4"
      sticky
    >
      <router-link
        :to="{ name: 'index' }"
        custom
        v-slot="{ isActive, navigate, href }"
      >
        <b-navbar-brand :active="isActive" :href="href" @click="navigate"
          >Exam</b-navbar-brand
        >
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link
            :to="{ name: 'index' }"
            custom
            v-slot="{ isActive, navigate, href }"
          >
            <b-nav-item :active="isActive" @click="navigate" :href="href"
              >Home</b-nav-item
            >
          </router-link>
          <router-link
            :to="{ name: 'checkout' }"
            custom
            v-slot="{ isActive, navigate, href }"
          >
            <b-nav-item :active="isActive" @click="navigate" :href="href"
              >Cart</b-nav-item
            >
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
