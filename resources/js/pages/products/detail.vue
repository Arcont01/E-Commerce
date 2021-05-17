<template>
  <main role="main">
    <b-container class="py-5">
      <b-row>
        <b-col lg="5">
          <img :src="product.image" :alt="product.name"  class="img-cover"/>
        </b-col>
        <b-col lg="7">
          <h1 class="font-weight-bold">{{ product.name }}</h1>
          <p class="font-weight-bold text-danger">
            {{ product.formatted_price }}
          </p>
          <b-form class="mb-4">
            <b-form-row>
              <b-form-group class="col-3 col-lg-2">
                <b-select
                  v-model="form.selected"
                  :options="quantitySelect"
                ></b-select>
              </b-form-group>
            </b-form-row>
            <b-form-row>
              <b-col lg="6">
                <b-button
                  type="submit"
                  variant="primary"
                  squared
                  block
                  class="text-capitalize"
                  >add to cart</b-button
                >
              </b-col>
              <b-col lg="6">
                <router-link :to="{name: 'checkout'}" custom v-slot="{ isActive, navigate, href }">
                  <b-button
                    :active="isActive"
                    @click="navigate"
                    :href="href"
                    variant="outline-success"
                    squared
                    block
                    class="text-capitalize"
                    >check out</b-button
                  >
                </router-link>
              </b-col>
            </b-form-row>
          </b-form>
          <p>
            {{product.description}}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      form: {
        selected: 1,
      },
      product: {},
      quantitySelect: [],
    };
  },
  methods: {
    async getProduct() {
      try {
        this.product =
          (await axios.get(`/api/product/${this.$route.params.slug}`)).data.data.product;
      } catch (error) {
        //this.$router.push({ name: "not-found" });
      }
    },
  },
  created() {
    for (let i = 1; i <= 10; i++) {
      this.quantitySelect.push({ value: i, text: i });
    }
  },
  beforeMount() {
    this.getProduct();
  }
};
</script>

<style scoped>
</style>
