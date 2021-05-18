<template>
  <main role="main">
    <b-container fluid>
      <b-row align-h="center" align-v="center" class="vh-100 h-100">
        <b-col lg="5">
          <b-card>
            <template #header>
              <h1 class="mb-0 text-center font-weight-bold">Login</h1>
            </template>
            <ValidationObserver v-slot="{invalid}">
              <b-form @submit.prevent="sendLogin">
                <ValidationProvider
                  name="E-Mail"
                  rules="required|email"
                  v-slot="{ valid, errors }"
                >
                  <b-form-group>
                    <b-form-input
                      v-model="form.email"
                      placeholder="E-mail"
                      type="email"
                      :state="errors[0] ? false : valid ? true : null"
                    ></b-form-input>
                    <b-form-invalid-feedback>{{
                      errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </ValidationProvider>
                <ValidationProvider
                  name="Password"
                  rules="required"
                  v-slot="{ valid, errors }"
                >
                  <b-form-group>
                    <b-form-input
                      :state="errors[0] ? false : valid ? true : null"
                      v-model="form.password"
                      type="password"
                      placeholder="Password"
                    ></b-form-input>
                    <b-form-invalid-feedback>{{
                      errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </ValidationProvider>
                <b-row align-h="center">
                  <b-col lg="6">
                    <b-button
                      variant="primary"
                      :disabled="invalid"
                      type="submit"
                      block
                      >Login</b-button
                    >
                  </b-col>
                </b-row>
              </b-form>
            </ValidationObserver>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    async sendLogin() {
        try {
            await this.$store.dispatch('retrieveToken', this.form)
            this.$route.push({name: 'admin'})
        } catch ({response}) {
            this.$notify({
                    group: 'notify',
                    type: 'error',
                    title: 'Error',
                    text: response.message
                });
        }

    },
  },
};
</script>
