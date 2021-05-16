<template>
  <main role="main">
    <b-container fluid>
      <b-row align-h="center" align-v="center" class="vh-100 h-100">
        <b-col lg="5">
          <b-card>
            <template #header>
              <h1 class="mb-0 text-center font-weight-bold">Login</h1>
            </template>
            <b-form>
              <b-form-group>
                <b-form-input placeholder="E-mail" type="email"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  type="password"
                  placeholder="Password"
                ></b-form-input>
              </b-form-group>
              <b-row align-h="center">
                  <b-col lg="6">
                      <b-button variant="primary" type="submit" block>Login</b-button>
                  </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  name: "login",
};
</script>

<style scoped>
</style>
