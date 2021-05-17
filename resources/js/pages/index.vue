<template>
  <main role="main">
    <b-jumbotron>
      <template #header>
        <h1 class="font-weight-bold text-center display-4">All Products</h1>
      </template>
    </b-jumbotron>
    <b-container class="mb-5">
      <b-row align-h="between" align-v="stretch" v-if="Object.keys(products).length !== 0">
        <b-col
            md="6"
          lg="4"
          class="mb-5"
          v-for="product in products.data"
          :key="product.id"
        >
          <b-card no-body class="border-0 h-100">
            <b-container fluid>
              <b-row align-h="center">
                <b-col cols="12" class="mb-4">
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="img-cover"
                  />
                </b-col>
                <b-col cols="12" class="text-center">
                  <h3 class="font-weight-bold h5">{{ product.name }}</h3>
                  <p class="font-weight-bold">{{ product.formatted_price }}</p>
                </b-col>
                <b-col cols="12">
                  <b-button squared block variant="primary" class="mb-4">
                    ADD TO CART
                  </b-button>
                  <router-link
                    custom
                    :to="{
                      name: 'product-detail',
                      params: { slug: product.slug },
                    }"
                    v-slot="{ isActive, navigate, href }"
                  >
                    <b-button
                      squared
                      block
                      variant="link"
                      :active="isActive"
                      @click="navigate"
                      :href="href"
                    >
                      READ MORE
                    </b-button>
                  </router-link>
                </b-col>
              </b-row>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      products: {},
    };
  },
  methods: {
    async getProducts() {
      try {
        this.products = (await axios.get(`/api/product`)).data.data.products;
      } catch (error) {}
    },
  },
  beforeMount() {
    this.getProducts();
  }
};
</script>
