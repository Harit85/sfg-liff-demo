<script >
export default {
    name:'RegisterPage',
    data:()=> ({
     profile: {
        userId: "",
        displayName: "",
        pictureUrl: "",
        statusMessage: "",
      },
      fname:'',
      lname:'',
      bdate:'',
      branch:'',
      phone:'',
      firstNameError:'',
      lastNameError:'',
      bdateError:'',
      branchError:'',
      phoneError:'',
      disableSubmit:false,
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
          _this.message = 'Profile not found'
          _this.profile = {
            userId : 'test123',
            displayName: 'Mr.Toms shoes'
          }
        })
      },
      submitHandler(){
        let _this = this
        //check input
        _this.firstNameError = _this.fname.length > 2 ? "" : "กรุณากรอกข้อมูลชื่อ ตัวอักษรมากกว่า 2";
        _this.lastNameError = _this.lname.length > 2 ? "" : "กรุณากรอกข้อมูลนามสกุล ตัวอักษรมากกว่า 2";
        _this.bdateError = _this.bdate != "" ? "" : "กรุณาระบุวันเกิด";
        _this.branchError = _this.branch != null ? "" : "กรุณาเลือกสาขาที่ทำการสมัคร";
        _this.phoneError = _this.phone.length == 10 ? "" : "กรุณากรอกเบอร์โทรศัพท์ 10 หลัก"

        let project = {
          firstName: this.fname,
          lastName: this.lname,
          birthDate: this.bdate,
          phone: this.phone,
          branch: this.branch,
        };
        console.log(project);
        if(_this.firstNameError != "" || _this.lastNameError != "" 
            || _this.bdateError != "" || _this.branchError != "" || _this.phoneError != "" ){
              _this.disableSubmit = true
        }else{
          this.$router.push("/wait");
        }
        
      }
    }
}
</script>

<template>
  <div>
    <form @submit.prevent="submitHandler">
      <img src="https://www.popticles.com/wp-content/uploads/2022/03/Toms-Logo.png" style="width: 200px;margin-bottom: 10px;" class="centerImg"/>
      <h2 style="margin-bottom: 10px;">Register Member</h2>
      <label for="" >👟 Welcome! {{ profile.displayName }} ,please input some information about you.👟</label>
      <br/>
      <span style="margin-top: 20px;"></span>
      <label for="fname">ชื่อ :</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." v-model="fname">
      <div v-if="firstNameError" class="error">{{ firstNameError }}</div>

      <label for="lname">นามสกุล :</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." v-model="lname">
      <div v-if="lastNameError" class="error">{{ lastNameError }}</div>

      <label for="bdate">วันเกิด :</label>
      <input type="date" id="bdate" name="birthdate" v-model="bdate" >
      <div v-if="bdateError" class="error">{{ bdateError }}</div>
      <br/>
      <label for="branch">สาขา ณ จุดสมัคร</label>
      <select id="branch" name="branch" v-model="branch" class="form-control">
        <option value="" selected disabled hidden>--กรุณาเลือก--</option>
        <option value="Online">Online</option>
        <option value="Central world">Central world</option>
        <option value="Central Bangna">Central Bangna</option>
        <option value="Central Ladproa">Central Lardprao</option>
      </select>
      <div v-if="branchError" class="error">{{ branchError }}</div>

      <label for="phone">เบอร์โทรศัพท์ :</label>
      <input type="text" id="phone" name="phone" placeholder="เบอร์โทรศัพท์ 10 หลัก..." v-model="phone">
      <div v-if="phoneError" class="error">{{ phoneError }}</div>

      <div class="footer">
        <button class="btn btn-primary mt-3" id="nextButton" ><span>Submit</span></button>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css);
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
h2 {
  font-weight: 100;
  font-size: 1.6rem;
  top: -10px;
  text-align: center;
}
h3 {
  font-size: 1.2rem;
}
.centerImg{
    display: block;
    margin-left: auto;
    margin-right: auto;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-weight: 60;
}
input[type=date] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-weight: 60;
}


input[type=submit] {
  width: 100%;
  background-color: #bcbcbc;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #ffffff;
  /* padding: 20px; */
}
.footer {
  position:sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  background-color:#ffffff;
}
label{
  font-weight: 60;
}
button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    border-radius: 4px;
    background-color: #1cc5e3;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 20px;
    padding: 10px;
    width: 100%;
    transition: all 0.5s;
    cursor: pointer;

}
button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
.error{
  color: red;
  font-size: 13px;

}
</style>
