<script >
export default {
    name:'WaitProfile',
    data() {
        return {
            lodingVisible: true,
            notRegisterVisible : false
        }
    },

    created() {
        setTimeout(() => {
            this.lodingVisible = false 
            this.notRegisterVisible = true
        }, 6000)
    }
}
</script>

<template>
  <div>
    <img src="https://www.popticles.com/wp-content/uploads/2022/03/Toms-Logo.png" style="width: 200px;margin-top: 100px;margin-bottom: 20px;" class="centerImg"/>
    <h2>TOMS THAILAND MEMBER</h2>
    <div id="loading" v-show="lodingVisible" class="hideElement">
        <img
        class="centerImg"
        src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
        alt="loading..."
        width="100"
        style="margin-top: 20px;"
        />
    </div>
    <div id="notiMessage" v-show="notRegisterVisible" class="hideElement">
        <h4>ขอบคุณสำหรับการสมัครสมาชิก!</h4>
        <h4>คุณพร้อมแล้วที่จะใช้งาน</h4>
        <button style="vertical-align:middle" @click="$router.push('profile')"><span>ไปหน้า Profile</span></button>
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
h4 {
  font-weight: 100;
  font-size: 1.4rem;
  top: -10px;
  text-align: center;
  color:#88d4ee;
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

.centerImg{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
