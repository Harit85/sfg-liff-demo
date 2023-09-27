<script>
import { liff } from "@line/liff";
import { ref, computed, resolveDirective } from 'vue'
import TheWelcome from "./TheWelcome.vue";


export default {
  name: "LineOACheck",
  components: {},
  data: () => ({
    message: "",
    error: "",
    profile: {
      userId: "",
      displayName: "",
      pictureUrl: "",
      statusMessage: "",
    },
  }),
  mounted() {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
      })
      .then(() => {
        console.log('LIFF init succeeded.')
        this.message = "LIFF init succeeded.";
      })
      .catch((e) => {
        console.log('LIFF init failed.')
        this.message = "LIFF init failed.";
        this.error = `${e}`;
      });

      this.getProfile()
  },
  methods:{
    closeWindow () {
      liff.closeWindow()
    },
    
    getProfile () {
      let _this = this
      liff.getProfile().then(function (profile) {
        _this.profile = profile
      }).catch(function (error) {
        //alert('Error getting profile: ' + error)
      }).then(()=>{
        setTimeout(function(){
            location = this.TheWelcome
        },10000)
      })
      console.log('Line Name :',this.profile.displayName);
      console.log('Line ID :',this.profile.userId);
      
    }
  }
};


</script>

<template>
  <div>
    <img src="https://www.popticles.com/wp-content/uploads/2022/03/Toms-Logo.png"/>
    <h2>TOMS THAILAND MEMBER</h2>
    <div id="loading">
        <img
        class="img"
        src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
        alt="loading..."
        width="100"
        style="margin-left: 120px;margin-top: 50px;"
        />
    </div>

  </div>
</template>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 1.6rem;
  top: -10px;
  text-align: center;
}  
img {
    margin-top: 100px;
    max-width :-webkit-fill-available;
}

</style>
