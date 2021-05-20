<template>
  <main role="main" class="py-5">
    <b-container>
      <b-row>
        <b-col cols="12" class="text-right mb-3">
          <b-button variant="primary" v-b-modal.modal-add> Add Product </b-button>
        </b-col>
        <b-col cols="12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody v-if="products.length > 0">
              <tr v-for="product in products" :key="product.id">
                <th scope="row">{{ product.name }}</th>
                <td>{{ product.formatted_price }}</td>
                <td>
                  <b-button
                    size="sm"
                    variant="danger"
                    @click="deleteProduct(product.slug)"
                    ><i class="fas fa-trash-alt"></i
                  ></b-button>
                  <b-button
                    size="sm"
                    variant="info"
                    @click="getProduct(product.slug)"
                    ><i class="fas fa-eye"></i></b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      id="modal-see"
      size="lg"
      title="See/Edit product"
      hide-footer
      centered
    >
      <b-container>
        <b-row>
          <b-col cols="12" class="text-right p-0 mb-4">
            <b-button variant="warning" @click="enableEdit">Edit</b-button>
          </b-col>
          <b-col cols="12" lg="8" order="1" order-lg="0">
            <ValidationObserver v-slot="{ invalid }">
              <b-form @submit.prevent="editProduct(product_slug)">
                <b-form-group>
                  <ValidationProvider
                    name="Name"
                    rules="required|alpha_spaces"
                    v-slot="{ valid, errors }"
                  >
                    <b-form-input
                    :disabled="disableEdit"
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
                    name="Description"
                    rules="required"
                    v-slot="{ valid, errors }"
                  >
                    <b-form-textarea
                    :disabled="disableEdit"
                      v-model="form.description"
                      :state="errors[0] ? false : valid ? true : null"
                      placeholder="Description"
                    ></b-form-textarea>
                    <b-form-invalid-feedback>
                      {{ errors[0] }}
                    </b-form-invalid-feedback>
                  </ValidationProvider>
                </b-form-group>
                <b-form-row>
                  <b-form-group class="col-md-6">
                    <ValidationProvider
                      name="Status"
                      rules="required|oneOf:0,1"
                      v-slot="{ valid, errors }"
                    >
                      <b-form-radio-group
                      :disabled="disableEdit"
                        :state="errors[0] ? false : valid ? true : null"
                        v-model="form.status"
                        :options="[
                          { text: 'active', value: 1 },
                          { text: 'inactive', value: 0 },
                        ]"
                        buttons
                      ></b-form-radio-group>
                      <b-form-invalid-feedback>
                        {{ errors[0] }}
                      </b-form-invalid-feedback>
                    </ValidationProvider>
                  </b-form-group>
                  <b-form-group class="col-md-6">
                    <ValidationProvider
                      name="Price"
                      rules="required|double"
                      v-slot="{ valid, errors }"
                    >
                      <b-form-input
                      :disabled="disableEdit"
                        :state="errors[0] ? false : valid ? true : null"
                        placeholder="Price"
                        v-model="form.price"
                      ></b-form-input>
                      <b-form-invalid-feedback>
                        {{ errors[0] }}
                      </b-form-invalid-feedback>
                    </ValidationProvider>
                  </b-form-group>
                </b-form-row>
                <b-form-group>
                  <ValidationProvider
                    name="Image"
                    rules="image|size:5120|mimes:image/jpeg,image/jpg"
                    v-slot="{ valid, errors }"
                  >
                    <b-form-file
                    :disabled="disableEdit"
                      v-model="form.image"
                      :state="errors[0] ? false : valid ? true : null"
                      placeholder="Choose a file or drop it here..."
                    ></b-form-file>
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
              </b-form>
            </ValidationObserver>
          </b-col>
          <b-col cols="12" lg="4" order="0" order-lg="1">
            <b-img
              thumbnail
              fluid
              :src="product_image"
              :alt="form.name"
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
    <b-modal id="modal-add" size="lg" title="Add product" hide-footer centered>
      <b-container>
        <ValidationObserver v-slot="{ invalid }">
          <b-form @submit.prevent="addProduct">
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
                name="Description"
                rules="required"
                v-slot="{ valid, errors }"
              >
                <b-form-textarea
                  v-model="form.description"
                  :state="errors[0] ? false : valid ? true : null"
                  placeholder="Description"
                ></b-form-textarea>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </ValidationProvider>
            </b-form-group>
            <b-form-row>
              <b-form-group class="col-md-6">
                <ValidationProvider
                  name="Status"
                  rules="required|oneOf:0,1"
                  v-slot="{ valid, errors }"
                >
                  <b-form-radio-group
                    :state="errors[0] ? false : valid ? true : null"
                    v-model="form.status"
                    :options="[
                      { text: 'active', value: 1 },
                      { text: 'inactive', value: 0 },
                    ]"
                    buttons
                  ></b-form-radio-group>
                  <b-form-invalid-feedback>
                    {{ errors[0] }}
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>
              <b-form-group class="col-md-6">
                <ValidationProvider
                  name="Price"
                  rules="required|double"
                  v-slot="{ valid, errors }"
                >
                  <b-form-input
                    :state="errors[0] ? false : valid ? true : null"
                    placeholder="Price"
                    v-model="form.price"
                  ></b-form-input>
                  <b-form-invalid-feedback>
                    {{ errors[0] }}
                  </b-form-invalid-feedback>
                </ValidationProvider>
              </b-form-group>
            </b-form-row>
            <b-form-group>
              <ValidationProvider
                name="Image"
                rules="required|image|size:5120|mimes:image/jpeg,image/jpg"
                v-slot="{ valid, errors }"
              >
                <b-form-file
                  v-model="form.image"
                  :state="errors[0] ? false : valid ? true : null"
                  placeholder="Choose a file or drop it here..."
                ></b-form-file>
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
      product_slug: "",
      product_image: "",
      disableEdit: true,
      form: {
        name: "",
        email: "",
        description: "",
        status: 0,
        image: null,
      },
      products: [],
    };
  },
  methods: {
    enableEdit() {
      this.disableEdit = !this.disableEdit;
    },
    async editProduct(product) {
      try {
        const formData = new FormData();
        formData.append("_method", "PUT");
        formData.append("name", this.form.name);
        formData.append("description", this.form.description);
        formData.append("price", this.form.price);
        formData.append("status", this.form.status);
        if (this.form.image) {
            console.log('hola');
          formData.append("image", this.form.image);
        }
        const response = await axios.post(
          `/api/product/${product}`,
            formData,
          {
            headers: { Authorization: `Bearer ${this.token}` },
            "Content-Type": "multipart/form-data",
          }
        );
        this.$nextTick(() => {
          this.$bvModal.hide("modal-see");
          this.form = {
            name: "",
            email: "",
            description: "",
            status: 0,
            image: null,
          };
          this.product_slug = "";
          this.product_image = "";
          this.getProducts();
          this.$notify({
            group: "notify",
            type: "success",
            title: "Product Edited",
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
    async getProduct(product) {
      try {
        const productResponse = (await axios.get(`/api/product/${product}`))
          .data.data.product;
        this.$nextTick(() => {
          this.disableEdit = true;
          this.product_slug = productResponse.slug;
          this.product_image = productResponse.image;
          this.form.name = productResponse.name;
          this.form.description = productResponse.description;
          this.form.price = productResponse.price;
          this.form.status = productResponse.status;
          this.$bvModal.show("modal-see");
        });
      } catch ({ response }) {
        this.getProducts();
        this.$notify({
          group: "notify",
          type: "error",
          title: "Error",
          text: response.message,
        });
      }
    },
    async addProduct() {
      try {
        const formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("description", this.form.description);
        formData.append("price", this.form.price);
        formData.append("status", this.form.status);
        formData.append("image", this.form.image);
        const response = await axios.post(`/api/product`, formData, {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        this.$nextTick(() => {
          this.$bvModal.hide("modal-add");
          this.form = {
            name: "",
            email: "",
            description: "",
            status: 0,
            image: null,
          };
          this.getProducts();
          this.$notify({
            group: "notify",
            type: "success",
            title: "Product Added",
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
    async getProducts() {
      this.products = (
        await axios.get(`/api/product`, {
          headers: { Authorization: `Bearer ${this.token}` },
        })
      ).data.data.products;
    },
    async deleteProduct(product) {
      try {
        await axios.delete(`/api/product/${product}`, {
          headers: { Authorization: `Bearer ${this.token}` },
        });
        this.$nextTick(() => {
          this.getProducts();
        });
      } catch ({ response }) {
        this.getProducts();
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
    this.getProducts();
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
