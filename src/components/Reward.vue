<script>
import MenuNavBarVue from "./MenuNavBar.vue";
import MiniProfile from "./MiniProfile.vue"
export default {
    name: "Reward",
    components: {
        menubar: MenuNavBarVue,
        miniProfile: MiniProfile,
    },
    data: () => ({

    }),
    mounted() {

    },
    methods: {
        openWindow(){
            this.$router.push("/rewardRecord");
        }
    },
};
</script>

<template>
    <div>
        <menubar></menubar>
        <miniProfile></miniProfile>
        <div>
            <div class="container">
                <div class="text-center">
                    <img style="width: 100%;" src="https://img.salehere.co.th/p/1200x0/2022/12/16/rdbrykisqgsi.jpg"
                        class="rounded" alt="...">
                </div>
            </div>
            <br><br>
            <div class="container text-left">
                <h5>
                    Redeem Points
                </h5>
            </div>
            <br>
            <div class="container">
                <div class="card flex-row flex-wrap" @click="openWindow()">
                    <div class="card-header border-0">
                        <img src="//placehold.it/50" alt="" />
                    </div>
                    <div class="card-block px-2">
                        <h4 class="card-title">Cash Back 10 %</h4>
                        <p class="card-text">Points : 10,000</p>
                    </div>
                </div>
            </div>
            <br>
            <div class="container">
                <div class="card flex-row flex-wrap" @click="openWindow()">
                    <div class="card-header border-0">
                        <img src="//placehold.it/50" alt="" />
                    </div>
                    <div class="card-block px-2">
                        <h4 class="card-title">Coupon 100฿</h4>
                        <p class="card-text">Points : 1,000</p>
                    </div>
                </div>
            </div>
            <br>
            <div class="container">
                <div class="card flex-row flex-wrap" @click="openWindow()">
                    <div class="card-header border-0">
                        <img src="//placehold.it/50" alt="" />
                    </div>
                    <div class="card-block px-2">
                        <h4 class="card-title">TOMS member 5%</h4>
                        <p class="card-text">Points : 0</p>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-8">
                </div>
                <div class="col-1">
                    <button type="button" class="rounded-pill btn btn-secondary">More..</button>
                </div>
            </div>
            <br>
            <br><br>
            <div class="container text-left">
                <h5>
                    Member Rewards
                </h5>
            </div>
            <br>
            <div class="container">
                <div class="d-flex justify-content-around">
                    <div class="card mr-3 text-left">
                        <img src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/373708661_3555287451406091_4362216781314616182_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=J5yo4NvrtwIAX8lDojL&_nc_ht=scontent.fbkk12-5.fna&oh=00_AfAu5UZrUYx_cFjUH2PLL94MtN7YuoGcbGyPlnDGrUVTwg&oe=651A49A8"
                            class="card-img-top img-thumbnail" alt="...">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 12px;">AUTUMN SPECIAL OFFER 🍂🍁</h5>
                            <p class="card-text" style="font-size: 10px;">ช้อปรองเท้าสลิปออนได้แล้ววันนี้ที่ TOMS SHOP <br>📌1 ก.ย. 66 - 26 ก.ย. 66

                                <br>SPECIAL OFFER
                                <br>✨New Arrivals 2023
                                <br>buy 1 get 10% discount
                                <br>buy 2 get 15% discount
                            </p>
                        </div>
                    </div>
                    <div class="card mr-3 text-left">
                        <img src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/372910761_3554636698137833_3863392759156742573_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=pBl8A8Z5FbIAX8s7AJh&_nc_ht=scontent.fbkk8-4.fna&oh=00_AfAlZIKLfHRCGbt8EVuUdydB-JZyif3oa0QkaGPYgRs-Sg&oe=651AD4D9"
                            class="card-img-top img-thumbnail" alt="...">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 12px;">NOW OPEN📍 Central Phuket FL.3</h5>
                            <p class="card-text" style="font-size: 10px;">You're Welcome ชวนเพื่อนชาวภูเก็ตช้อปรองเท้า TOMS ได้แล้ววันนี้!
                                รวมสินค้ารุ่นสุดฮิตมากมายพร้อมโปรโมชั่นสุดพิเศษช้อป 2 คู่ รับเลยส่วนลด 15%
                                แล้วเจอกันนะทุกคน!</p>
                        </div>
                    </div>

                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<style scoped>@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css);</style>