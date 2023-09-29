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
        <img v-bind:src="profile.pictureUrl" style="width: 50%" />
        <h1>{{ profile.displayName }}</h1>
        <p class="title">Points : 11,000</p>
        <p>Name : Toms Shoes</p>
        <p>Email : toms@shoes.com</p>
        <p>Phone : 0889997766</p>
        <a href="#"><i class="fa fa-dribbble"> </i></a>
        <a href="#"><i class="fa fa-twitter"> </i></a>
        <a href="#"><i class="fa fa-linkedin"> </i></a>
        <a href="#"><i class="fa fa-facebook"> </i></a>
        <br/>
        <span>  <img src="https://www.popticles.com/wp-content/uploads/2022/03/Toms-Logo.png" style="width: 100px;margin-top: 10px;margin-bottom: 10px;" class="centerImg"/></span>
    </div>
    <div class="footer">
        <button class="btn btn-primary mt-3" id="back" @click="$router.push('home')" ><span>กลับสู่หน้าหลัก</span></button>
    </div>
  </div>
</template>
<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
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

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
.footer {
  position:fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  background-color:#ffffff;
}
</style>
