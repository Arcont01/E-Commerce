<template>
  <main role="main">
    <b-container class="py-5">
      <b-row>
        <b-col cols="12" class="mb-4">
          <b-card
            header="Items in Your Cart"
            header-tag="header"
            header-bg-variant="dark"
            header-text-variant="white"
            no-body
          >
            <b-container fluid class="py-3">
              <b-row v-if="products.length > 0" no-gutters>
                  <b-col
                  cols="12"
                  class="mb-3"
                >
                  <b-row no-gutters align-h="end">
                    <b-col cols="3" lg="2">
                      <p class="font-weight-bold text-center">Update Qty</p>
                    </b-col>
                    <b-col cols="5" lg="6">
                      <p class="font-weight-bold  text-center">Product</p>
                    </b-col>
                    <b-col cols="1" lg="1">
                     <p class="font-weight-bold  text-center">Qty</p>
                    </b-col>
                    <b-col cols="3" lg="3">
                      <p class="font-weight-bold  text-center">Price</p>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col
                  cols="12"
                  v-for="product in products"
                  :key="product.id"
                  class="mb-3"
                >
                  <b-row no-gutters align-h="end">
                    <b-col cols="3" lg="2">
                      <b-form
                        inline
                        @submit.prevent="changeQuantity(product, product.id)"
                      >
                        <b-form-row>
                          <b-form-group class="col-9">
                            <b-select
                              size="sm"
                              name="quantity"
                              :options="quantitySelect"
                              :value="product.quantity"
                              v-model="selected[product.id]"
                            ></b-select>
                          </b-form-group>
                          <b-form-group class="col-3">
                            <b-button size="sm" variant="primary" type="submit"
                              ><i class="fas fa-plus"></i
                            ></b-button>
                          </b-form-group>
                        </b-form-row>
                      </b-form>
                    </b-col>
                    <b-col cols="5" lg="6">
                      <b-button class="p-0" block squared variant="link">{{
                        product.name
                      }}</b-button>
                    </b-col>
                    <b-col cols="1" lg="1" class="text-center">
                      {{ product.quantity }}
                    </b-col>
                    <b-col cols="3" lg="3" class="text-center">
                      {{ product.price | moneyFormat }}
                      <b-button
                        size="sm"
                        variant="danger"
                        @click="deleteProduct(product)"
                        ><i class="fas fa-trash-alt"></i
                      ></b-button>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="12">
                  <b-row no-gutters align-h="end">
                    <b-col cols="2" class="text-center">
                        TOTAL
                    </b-col>
                    <b-col cols="3" class="text-center">
                        {{ totalPrice | moneyFormat }}
                        </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <p v-else class="h2 text-center font-weight-bold">
                The Cart is empty
              </p>
            </b-container>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card
            no-body
            header="Payment Information"
            header-tag="header"
            header-bg-variant="dark"
            header-text-variant="white"
          >
            <b-container fluid class="py-5">
              <ValidationObserver v-slot="{ invalid }">
                <b-form @submit.prevent="payCart">
                  <b-form-row>
                    <b-col lg="6">
                      <b-form-group>
                        <ValidationProvider
                          name="Name"
                          rules="required|alpha_spaces"
                          v-slot="{ valid, errors }"
                        >
                          <b-form-input
                            :state="errors[0] ? false : valid ? true : null"
                            v-model="form.name"
                            placeholder="Name"
                          ></b-form-input>
                          <b-form-invalid-feedback>
                            {{ errors[0] }}
                          </b-form-invalid-feedback>
                        </ValidationProvider>
                      </b-form-group>
                      <b-form-group>
                        <ValidationProvider
                          name="Address"
                          rules="required"
                          v-slot="{ valid, errors }"
                        >
                          <b-form-input
                            :state="errors[0] ? false : valid ? true : null"
                            v-model="form.address"
                            placeholder="Address"
                          ></b-form-input>
                          <b-form-invalid-feedback>
                            {{ errors[0] }}
                          </b-form-invalid-feedback>
                        </ValidationProvider>
                      </b-form-group>
                      <b-form-row>
                        <b-form-group class="col-sm-6">
                          <ValidationProvider
                            name="State"
                            rules="required|alpha_spaces"
                            v-slot="{ valid, errors }"
                          >
                            <b-form-input
                              :state="errors[0] ? false : valid ? true : null"
                              v-model="form.state"
                              placeholder="State"
                            ></b-form-input>
                            <b-form-invalid-feedback>
                              {{ errors[0] }}
                            </b-form-invalid-feedback>
                          </ValidationProvider>
                        </b-form-group>

                        <b-form-group class="col-sm-6">
                          <ValidationProvider
                            name="Country"
                            rules="required|alpha_spaces"
                            v-slot="{ valid, errors }"
                          >
                            <b-form-input
                              :state="errors[0] ? false : valid ? true : null"
                              v-model="form.country"
                              placeholder="Country"
                            ></b-form-input>
                            <b-form-invalid-feedback>
                              {{ errors[0] }}
                            </b-form-invalid-feedback>
                          </ValidationProvider>
                        </b-form-group>
                      </b-form-row>
                    </b-col>
                    <b-col lg="6">
                      <b-form-group>
                        <ValidationProvider
                          name="Card number"
                          rules="required|min:16|integer"
                          v-slot="{ valid, errors }"
                        >
                          <b-form-input
                            :state="errors[0] ? false : valid ? true : null"
                            v-model="form.card_number"
                            placeholder="Card number"
                          ></b-form-input>
                          <b-form-invalid-feedback>
                            {{ errors[0] }}
                          </b-form-invalid-feedback>
                        </ValidationProvider>
                      </b-form-group>

                      <b-form-row>
                        <b-form-group class="col-sm-6">
                          <ValidationProvider
                            name="Card expiration"
                            rules="required"
                            v-slot="{ valid, errors }"
                          >
                            <b-form-datepicker
                              placeholder="MM/YYYY"
                              :hide-header="true"
                              :date-format-options="{
                                year: 'numeric',
                                month: 'numeric',
                                day: undefined,
                              }"
                              :state="errors[0] ? false : valid ? true : null"
                              v-model="form.card_expiration"
                            ></b-form-datepicker>
                            <b-form-invalid-feedback>
                              {{ errors[0] }}
                            </b-form-invalid-feedback>
                          </ValidationProvider>
                        </b-form-group>

                        <b-form-group class="col-sm-6">
                          <ValidationProvider
                            name="CVV"
                            rules="required|min:3|max:4"
                            v-slot="{ valid, errors }"
                          >
                            <b-form-input
                              :state="errors[0] ? false : valid ? true : null"
                              v-model="form.card_cvv"
                              type="password"
                              placeholder="CVV"
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
                          ><b>PAY</b></b-button
                        >
                      </b-form-row>
                    </b-col>
                  </b-form-row>
                </b-form>
              </ValidationObserver>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "checkout",
  data() {
    return {
      form: {
        name: "",
        address: "",
        state: "",
        country: "",
        card_number: "",
        card_expiration: "",
        card_cvv: "",
      },
      selected: {},
      quantitySelect: [],
    };
  },
  created() {
    for (let i = 1; i <= 10; i++) {
      this.quantitySelect.push({ value: i, text: i });
    }
  },
  methods: {
    async changeQuantity(product, id) {
      if (this.selected[id]) {
        await this.$store.dispatch("addToCart", {
          product,
          quantity: this.selected[id],
        });
        await this.$store.dispatch("saveCart");
        this.$notify({
          group: "notify",
          type: "success",
          title: "Updated quantity",
          text: product.name,
        });
      }
    },
    async deleteProduct(product) {
      await this.$store.dispatch("removeFromCart", product.id);
      await this.$store.dispatch("saveCart");
      this.$notify({
        group: "notify",
        type: "success",
        title: "Removed from cart",
        text: product.name,
      });
    },
    async payCart() {
      await this.$store.dispatch("deleteCart");
      await this.$store.dispatch("saveCart");
      this.$nextTick(() => {
        this.$notify({
          group: "notify",
          type: "success",
          title: "Pay Success",
        });
        this.form = {
          name: "",
          address: "",
          state: "",
          country: "",
          card_number: "",
          card_expiration: "",
          card_cvv: "",
        };
      });
    },
  },
  computed: {
    ...mapGetters({
      products: "allProducts",
      totalPrice: "totalPrice",
    }),
  },
};
</script>

<style scoped>
</style>
