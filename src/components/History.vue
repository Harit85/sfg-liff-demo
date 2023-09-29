<script>
import MenuNavBarVue from "./MenuNavBar.vue";
import MiniProfile from "./MiniProfile.vue"
export default {
  name: "History",
  components: {
    menubar: MenuNavBarVue,
    miniProfile:MiniProfile,
  },
  data: () => ({

  }),
  mounted() {

  },
  methods: {
    openTab(tabName) {
        var i;
        var x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        document.getElementById(tabName).style.display = "block";  
    }
  },
};
</script>

<template>
  <div>
    <menubar></menubar>
    <miniProfile></miniProfile>
    <div id="tabMenu" style="margin-top: 20px;">
        <div class="w3-bar w3-black">
            <button class="w3-bar-item w3-button" @click="openTab('purches')">ประวัติการซื้อ</button>
            <button class="w3-bar-item w3-button" @click="openTab('mycoupon')">คูปองของฉัน</button>
            <button class="w3-bar-item w3-button" @click="openTab('couponhis')">ประวัติการใช้คูปอง</button>
        </div>
        <div id="purches" class="w3-container tab" style="background-color: darkgray;">
            <div class="card-grid" style="margin-top: 10px;margin-bottom: 10px;">
                <div class="card">
                    <img src="https://www.toms.com/dw/image/v2/BDWV_PRD/on/demandware.static/-/Sites-toms-master-catalog/default/dwf4633fe2/images/product-images/10020275-S.jpg" 
                     style="width: 60px;height: 40px;"/>
                    <h2>Alp Fwd Green Canvas</h2>
                    <p>2,300฿</p><p>Purches:20/09/2023</p>
                </div>
                <div class="card">
                    <img src="https://www.toms.com/dw/image/v2/BDWV_PRD/on/demandware.static/-/Sites-toms-master-catalog/default/dwe3d3244a/images/10019128-S.jpg?sw=900&sh=630&sm=fit&q=65" 
                     style="width: 60px;height: 40px;"/>
                    <h2>Carlo Mid Graphite</h2>
                    <p>6,200฿</p><p>Purches:17/01/2023</p>
                </div>
            </div>
        </div>

        <div id="mycoupon" class="w3-container tab" style="display:none;background-color: darkgray;">
            <div class="card-grid" style="margin-top: 10px;margin-bottom: 10px;">
                <div class="card">
                    <img src="https://www.toms.com/dw/image/v2/BDWV_PRD/on/demandware.static/-/Library-Sites-toms-content-global/default/dwe57cf32a/page-designer/home/usca/promo_banners/0926_US_HP_BMSM_v7_m_563x334.jpg" 
                     style="width: 100px;height: 60px;"/>
                    <h2>30% Gift for you!</h2>
                    <p>*Enjoy when you spend 1500฿ or more, to get discount 30%</p>
                </div>
            </div>
        </div>

        <div id="couponhis" class="w3-container tab" style="display:none;background-color: darkgray;">
            <div class="card-grid" style="margin-top: 10px;margin-bottom: 10px;"></div>
        </div>
    </div>
    <div class="footer">
        <button class="btn btn-primary mt-3 buttonFooter" id="back" @click="$router.push('home')" ><span>กลับสู่หน้าหลัก</span></button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Poppins:wght@400;600&display=swap');
@import url('https://www.w3schools.com/w3css/4/w3.css');

.footer {
  position:fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  background-color:#ffffff;
}

button{
    font-size: 13px;
}
.buttonFooter {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
.card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
.card {
    background-color: #fafafa;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
}
.card i {
            font-size: 24px;
            margin-bottom: 10px;
        }

        .card h2 {
            font-size: 9px;
            margin: 0;
            font-weight: 200;
        }

        .card p {
            font-size: 8px;
        }

        .card:hover {
            transform: scale(1.02);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }

</style>

