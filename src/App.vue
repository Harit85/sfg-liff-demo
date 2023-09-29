<script >

import router from './router'
import { liff } from "@line/liff"

export default {
  name:'MainCom',
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
  mounted () {
    document.title = "TOMS THAILAND MEMBERSHIP";
    liff.init({
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
    getProfile () {
      let _this = this
      liff.getProfile().then(function (profile) {
        _this.profile = profile
        console.log('Line Name :',_this.profile.displayName)
        console.log('Line ID :',_this.profile.userId)

         setTimeout(function(){
          router.push({ path: 'consent' ,query: { profile: _this.profile }})
        },10000)
      }).catch(function (error) {
        _this.message = 'Profile not found'
        _this.profile = {
          userId : 'test123',
          displayName: 'test'
        }
        // setTimeout(function(){
        //   router.push({ path: 'welcome' })
        // },7000)
      })
    }
  }

}

</script>

<template>
  <main>
    <title>TOMS Thailand Member</title>
    <!-- <div id="app">
      <router-view/>
    </div> -->
    <router-view/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>
