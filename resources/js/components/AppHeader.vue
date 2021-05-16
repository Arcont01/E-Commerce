<template>
  <header>
    <b-navbar toggleable="lg" type="light" variant="light" class="shadow-sm py-4" sticky>
      <b-navbar-brand :to="{name: 'index'}">Exam</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{name: 'index'}">Home</b-nav-item>
          <b-nav-item :to="{name: 'cart'}">Cart</b-nav-item>
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
