<template>
    <main class="mt-3">
        <div class="container">
            <div class="float-end mb-">
                <button class="btn btn-dark"></button>
            </div>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        </table>
        <tbody>
            <tr>
                <td><img src="" alt="" /></td>
            </tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tbody>
        <td>
            <button class="btn btn-info me-1"></button>
            <button class="btn btn-warning me-1"></button>
            <button class="btn btn-danger"></button>
        </td>
    </main>
</template>

<script>
export default {
    data() {
        return {
            productList: [],
        };
    },
    created() {
        this.getProductList();
    },
    methods: {
        async getProductList() {
            this.productList = await this.$apu("/api/productList2", {});
            console.log(this.productList);
        },
        goToInsert() {
            this.$router.push({ path: "/create" });
        },
        goToDetail(product_id) {
            this.$router.push({
                path: "/detail",
                query: { product_id: product_id },
            });
        },
        goToUpdate(product_id) {
            this.$router.push({
                path: "/update",
                query: { product_id: product_id },
            });
        },
        goToImageInsert(product_id) {
            this.$router.pust({
                path: "/image_update",
                query: {
                    product_id: product_id,
                },
            });
        },
        deleteProduct(product_id) {
            this.$swal
                .fire({
                    title: "삭제?",
                    showCancelButton: true,
                    confirmButtonText: "삭제",
                    canselButtonText: "취소",
                })
                .then(async (res) => {
                    if (res.isConfirmed) {
                        console.log(product_id);
                        await this.$api("/api/productDelete", {
                            param: [product_id],
                        });
                        this.getProductList();
                        this.$swal.fire("삭제완료ㅗ", "", "success");
                    }
                });
        },
    },
};
</script>

<style>
</style>