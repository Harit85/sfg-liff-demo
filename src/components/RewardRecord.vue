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

    },
};
</script>

<template>
    <div>
        <menubar></menubar>
        <miniProfile></miniProfile>
        <section class="box" style="padding-top: 10px;">
            <div class="content">

                <div class="left">
                    <div class="product_img">
                        <!-- <img src="https://i.pinimg.com/originals/be/3f/5d/be3f5d61a8d2059bfd16c10e8c08f552.png"
                        style="height: 190px;"/> -->
                    </div>
                    <div class="product_details">
                        <h4 class="title">10% Discount Coupon Code! </h4>
                        <p class="discription">*เฉพาะสินค้าที่ร่วมรายการ</p>
                        <p class="other">inclusive of all taxes</p>
                    </div>
                </div>
                <div class="right">
                    <div class="product_description">
                        <h4>PRODUCT DESCRIPTION</h4>
                        <p>Elevate your style with this classy pair of Casual Shoes from the house of Our brand. Featuring a
                            contemporary refined design with exceptional comfort, this pair is perfect to give your
                            quintessential dressing an upgrade.
                        </p>
                    </div>
                </div>

                <button style="vertical-align:middle" @click="$router.push('history')"><span>Redeem</span></button>

            </div>
        </section>

    </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi);

@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gasoek+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kablammo&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
}

section {
  background: #b8f6fa;
  width: 700px;
  border-radius: 5px;
}

.content {
  display: flex;
  justify-content: space-between;
}

/* Left Side:Start */
.left {
  display: block;
  height: fit-content;
  min-width: 250px;
}
.left .product_img {
  height: 190px;
  width: 320px;
  margin: 10px;
  border-radius: 5px;
 background: url(https://i.pinimg.com/originals/be/3f/5d/be3f5d61a8d2059bfd16c10e8c08f552.png);
  background-position: center;
  background-size: cover;
}
.product_details {
  text-align: center;
  margin: 0 10px 10px;
  padding: 5px;
}
.product_details .title {
  font-size: 1.3em;
  color: rgb(99, 99, 99);
  font-weight: 900;
}
.product_details .discription {
  margin-top: 2px;
  font-size: 0.8em;
  color: gray;
}
.product_details .price {
  margin-top: 4px;
  font-size: 1.1em;
  font-weight: 600;
  white-space: pre;
}
.product_details .price span {
  font-weight: 500;
}
.product_details .price .price_original {
  text-decoration: line-through;
  font-size: 0.7em;
  font-weight: 400;
  color: gray;
}
.product_details .price .offer {
  color: #03ac13;
  font-weight: 600;
}
.product_details .other {
  font-size: 0.8em;
  color: grey;
}
/* Left Side:End */

/* Right Side:Start */
.right {
  display: block;
}
.right .product_description {
  text-align: left;
  margin: 30px 20px;
}
.product_description h4 {
  font-size: 0.9em;
  font-weight: 900;
  margin-bottom: 20px;
}
.product_description p {
  font-size: 0.8em;
  color: grey;
  margin-bottom: 15px;
}
.product_description .highlight {
  color: rgb(99, 99, 99);
  font-weight: 900;
}
.product_description .special {
  font-size: 0.85em;
}
/* Right Side:End */

/* Responsiveness:Start */
@media screen and (min-width: 320px) and (max-width: 480px) {
  .content {
    display: flex;
    flex-direction: column;
    width: 100vw;
    border-radius: 0px;
  }
  section {
    width: 100% !important;
  }
  .product_img {
    /* width: calc(100vw - 6%) !important; */
    height: 200px !important;
  }
  h4.title {
    font-size: 1em !important;
  }
  p {
    width: 90%;
  }
  p.discription {
    font-size: 0.7em !important;
  }
  p.other {
    font-size: 0.7em !important;
  }
}

button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    background-color: #1cc5e3;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 20px;
    padding: 10px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin-bottom: 20px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

</style>