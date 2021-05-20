<template>
  <main role="main" class="py-5">
    <b-container>
      <b-row>
        <b-col cols="12" class="text-right mb-3">
          <b-button variant="primary" v-b-modal.modal-add> Add User </b-button>
        </b-col>
        <b-col cols="12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody v-if="users.length > 0">
              <tr v-for="user in users" :key="user.id">
                <th scope="row">{{ user.name }}</th>
                <td>{{ user.email }}</td>
                <td>
                  <b-button
                    size="sm"
                    variant="danger"
                    @click="deleteUser(user.id)"
                    ><i class="fas fa-trash-alt"></i
                  ></b-button>
                  <b-button size="sm" variant="info" @click="getUser(user.id)"
                    ><i class="fas fa-eye"></i></b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="modal-see" title="See/Edit user" hide-footer centered>
      <b-container>
        <b-col cols="12" class="text-right p-0 mb-4">
          <b-button variant="warning" @click="enableEdit">Edit</b-button>
        </b-col>
        <ValidationObserver v-slot="{ invalid }">
          <b-form @submit.prevent="editUser(user)">
            <b-form-group>
              <ValidationProvider
                name="Name"
                rules="required|alpha_spaces"
                v-slot="{ valid, errors }"
              >
                <b-form-input
                  :state="errors[0] ? false : valid ? true : null"
                  :disabled="disableEdit"
                  placeholder="name"
                  v-model="form.name"
                ></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </ValidationProvider>
            </b-form-group>
            <b-form-group>
              <ValidationProvider
                name="Email"
                rules="required|email"
                v-slot="{ valid, errors }"
              >
                <b-form-input
                  :state="errors[0] ? false : valid ? true : null"
                  type="email"
                  :disabled="disableEdit"
                  placeholder="email"
                  v-model="form.email"
                ></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </ValidationProvider>
            </b-form-group>
            <b-form-row>
              <b-form-group class="col-md-6">
                <ValidationProvider
                  vid="password"
                  name="Password"
                  rules="min:8|confirmed:confirmation_password"
                  v-slot="{ valid, errors }"
                >
                  <b-form-input
                    :state="errors[0] ? false : valid ? true : null"
                    type="password"
                    :disabled="disableEdit"
                    placeholder="Password"
                    v-model="form.password"
                  ></b-form-input>
                  <b-form-invalid-feedback>
                    {{ errors[0] }}
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>
              <b-form-group class="col-md-6">
                <ValidationProvider
                  vid="confirmation_password"
                  name="Confirmation Password"
                  rules="required_if:password"
                  v-slot="{ valid, errors }"
                >
                  <b-form-input
                    :state="errors[0] ? false : valid ? true : null"
                    type="password"
                    :disabled="disableEdit"
                    placeholder="Confirmation Password"
                    v-model="form.password_confirmation"
                  ></b-form-input>
                  <b-form-invalid-feedback>
                    {{ errors[0] }}
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>
              <b-button
              v-show="!disableEdit"
                type="submit"
                variant="primary"
                squared
                block
                :disabled="invalid"
                >Edit</b-button
              >
            </b-form-row>
          </b-form>
        </ValidationObserver>
      </b-container>
    </b-modal>
    <b-modal id="modal-add" title="Add User" hide-footer centered>
      <b-container>
        <ValidationObserver v-slot="{ invalid }">
          <b-form @submit.prevent="addUser">
            <b-form-group>
              <ValidationProvider
                name="Name"
                rules="required|alpha_spaces"
                v-slot="{ valid, errors }"
              >
                <b-form-input
                  :state="errors[0] ? false : valid ? true : null"
                  placeholder="name"
                  v-model="form.name"
                ></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </ValidationProvider>
            </b-form-group>
            <b-form-group>
              <ValidationProvider
                name="Email"
                rules="required|email"
                v-slot="{ valid, errors }"
              >
                <b-form-input
                  :state="errors[0] ? false : valid ? true : null"
                  type="email"
                  placeholder="email"
                  v-model="form.email"
                ></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </ValidationProvider>
            </b-form-group>
            <b-form-row>
              <b-form-group class="col-md-6">
                <ValidationProvider
                  vid="password"
                  name="Password"
                  rules="required|min:8|confirmed:confirmation_password"
                  v-slot="{ valid, errors }"
                >
                  <b-form-input
                    :state="errors[0] ? false : valid ? true : null"
                    type="password"
                    placeholder="Password"
                    v-model="form.password"
                  ></b-form-input>
                  <b-form-invalid-feedback>
                    {{ errors[0] }}
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>
              <b-form-group class="col-md-6">
                <ValidationProvider
                  vid="confirmation_password"
                  name="Confirmation Password"
                  rules="required"
                  v-slot="{ valid, errors }"
                >
                  <b-form-input
                    :state="errors[0] ? false : valid ? true : null"
                    type="password"
                    placeholder="Confirmation Password"
                    v-model="form.password_confirmation"
                  ></b-form-input>
                  <b-form-invalid-feedback>
                    {{ errors[0] }}
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>
              <b-button
                type="submit"
                variant="primary"
                squared
                block
                :disabled="invalid"
                >Add</b-button
              >
            </b-form-row>
          </b-form>
        </ValidationObserver>
      </b-container>
    </b-modal>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "User",
  data() {
    return {
      user: "",
      disableEdit: true,
      form: {
        name: "asas",
        email: "",
        password: null,
        password_confirmation: null,
      },
      users: [],
    };
  },
  methods: {
    enableEdit() {
      this.disableEdit = !this.disableEdit;
    },
    async editUser(user) {
      try {
        const response = await axios.put(`/api/user/${user}`, this.form, {
          headers: { Authorization: `Bearer ${this.token}` },
        });
        this.$nextTick(() => {
          this.$bvModal.hide("modal-see");
          this.form = {
            name: "",
            email: "",
            password: null,
            password_confirmation: null,
          };
          this.getUsers();
          this.$notify({
            group: "notify",
            type: "success",
            title: "User Edited",
            text: response.message,
          });
        });
      } catch ({ response }) {
        this.$notify({
          group: "notify",
          type: "error",
          title: "Error",
          text: response.message,
        });
      }
    },
    async getUser(user) {
      try {
        const userResponse = (
          await axios.get(`/api/user/${user}`, {
            headers: { Authorization: `Bearer ${this.token}` },
          })
        ).data.data.user;
        this.$nextTick(() => {
          this.disableEdit = true;
          this.user = userResponse.id;
          this.form.name = userResponse.name;
          this.form.email = userResponse.email;
          this.$bvModal.show("modal-see");
        });
      } catch ({ response }) {
        this.getUsers();
        this.$notify({
          group: "notify",
          type: "error",
          title: "Error",
          text: response.message,
        });
      }
    },
    async addUser() {
      try {
        const response = await axios.post(`/api/register`, this.form, {
          headers: { Authorization: `Bearer ${this.token}` },
        });
        this.$nextTick(() => {
          this.$bvModal.hide("modal-add");
          this.form = {
            name: "",
            email: "",
            password: null,
            password_confirmation: null,
          };
          this.getUsers();
          this.$notify({
            group: "notify",
            type: "success",
            title: "User Added",
            text: response.message,
          });
        });
      } catch ({ response }) {
        this.$notify({
          group: "notify",
          type: "error",
          title: "Error",
          text: response.message,
        });
      }
    },
    async getUsers() {
      this.users = (
        await axios.get(`/api/user`, {
          headers: { Authorization: `Bearer ${this.token}` },
        })
      ).data.data.users;
    },
    async deleteUser(user) {
      try {
        await axios.delete(`/api/user/${user}`, {
          headers: { Authorization: `Bearer ${this.token}` },
        });
        this.$nextTick(() => {
          this.getUsers();
        });
      } catch ({ response }) {
        this.getUser();
        this.$notify({
          group: "notify",
          type: "error",
          title: "Error",
          text: response.message,
        });
      }
    },
  },
  beforeMount() {
    this.getUsers();
  },
  computed: {
    ...mapGetters({
      token: "getToken",
    }),
  },
};
</script>

<style scoped>
</style>
