<script>
import MenuNavBarVue from './MenuNavBar.vue'
export default{
    name:'Profile',
    components:{
        'menubar': MenuNavBarVue
    },
    data:()=> ({
     profile: {
        userId: "",
        displayName: "",
        pictureUrl: "",
        statusMessage: "",
      },
    }),
    mounted() {
      this.getProfile()
    },
    methods:{
        getProfile () {
      let _this = this
      liff.getProfile().then(function (profile) {
          _this.profile = profile
          console.log('Line Name :',_this.profile.displayName)
          console.log('Line ID :',_this.profile.userId)

        }).catch(function (error) {
            console.log('Profile not found')
             _this.message = 'Profile not found'
            _this.profile = {
            userId : 'test123',
            displayName: 'Mr.Toms shoes',
            pictureUrl: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'
          }
        })
      },
    }
    
}
</script>

<template>
    <div>
        <menubar></menubar>
        <div class="card">
            <img v-bind:src="profile.pictureUrl" style="width: 50%;margin-top: 10px;" />
            <h1>{{ profile.displayName }}</h1>
            <p class="title">Points : 11,000</p>
            <br/>
            <button style="vertical-align:middle" @click="$router.push('profile')"><span>ไปหน้า Profile</span></button>
    
            <button style="vertical-align:middle" @click="$router.push('reward')"><span>รางวัลและสิทธิพิเศษ</span></button>

            <button style="vertical-align:middle" @click="$router.push('history')"><span>ประวัติการใช้คูปอง</span></button>
            <br/>
            <span>  <img src="https://www.popticles.com/wp-content/uploads/2022/03/Toms-Logo.png" style="width: 100px;margin-top: 10px;margin-bottom: 10px;" class="centerImg"/></span>
        </div>
    </div>

    
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  margin-top:15px;
}
button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
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