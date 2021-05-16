<template>
    <main role="main">
        <b-jumbotron>
            <template #header>
                <h1 class="font-weight-bold text-center display-4">All Products</h1>
            </template>
        </b-jumbotron>
        <b-container class="mb-5">
            <b-row align-h="between">
                <b-col lg="4">
                    <b-card no-body class="border-0">
                        <b-container fluid>
                            <b-row align-h="center">
                                <b-col cols="12">

                                </b-col>
                                <b-col cols="12" class="text-center">
                                    <h3 class="font-weight-bold">Tittle</h3>
                                    <p>$price</p>
                                </b-col>
                                <b-col cols="12">
                                    <b-button squared block variant="primary" class="mb-4">
                                        ADD TO CART
                                    </b-button>
                                    <b-button squared block variant="link">
                                        READ MORE
                                    </b-button>
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
    name: "index"
}
</script>

<style scoped>

</style>
