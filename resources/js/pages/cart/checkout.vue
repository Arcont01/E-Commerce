<template>
<main role="main">
    <b-container class="py-5">
        <b-row>
            <b-col cols="12">
                <b-row no-gutters>
                    <b-col cols="12" v-for="product in products" :key="product.id">
                        <b-row no-gutters align-h="end">
                            <b-col cols="3" lg="2">
                                <b-form inline @submit.prevent="changeQuantity(product, product.id)">
                                    <b-form-row>
                                        <b-form-group class="col-9">
                                            <b-select size="sm" name="quantity" :options="quantitySelect" :value="product.quantity" v-model="selected[product.id]"></b-select>
                                        </b-form-group>
                                        <b-form-group class="col-3">
                                              <b-button size="sm" variant="primary" type="submit"><i class="fas fa-plus"></i></b-button>
                                        </b-form-group>
                                    </b-form-row>
                                </b-form>
                            </b-col>
                            <b-col cols="5" lg="6">
                                <b-button class="p-0" block squared variant="link">{{product.name}}</b-button>
                            </b-col>
                            <b-col cols="1" lg="1">
                                {{product.quantity}}
                            </b-col>
                            <b-col cols="3" lg="3">
                                {{product.price}}
                                <b-button size="sm" variant="danger" type="submit"><i class="fas fa-trash-alt"></i></b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12">
                        <b-row no-gutters align-h="end">
                            <b-col cols="4">
                                
                            </b-col>
                            <b-col cols="4">

                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</main>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "checkout",
    data(){
        return{
            selected: {},
            quantitySelect: [],
        }
    },
    created() {
        for (let i = 1; i <= 10; i++) {
            this.quantitySelect.push({value: i, text: i});
        }
    },
    methods: {
        changeQuantity(product, id){
            if(this.selected[id]){
                this.$store.dispatch('addToCart', {product, quantity: this.selected[id]})
            }
        }
    },
    computed: {
        ...mapGetters({
            products: 'allProducts'
        })
    }
}
</script>

<style scoped>

</style>
