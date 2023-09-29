<script>
export default {
name: "MiniProfile",

  data: () => ({
    profile: {
      userId: "",
      displayName: "",
      pictureUrl: "",
      statusMessage: "",
    },
  }),
  mounted() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      let _this = this;
      liff
        .getProfile()
        .then(function (profile) {
          _this.profile = profile;
          console.log("Line Name :", _this.profile.displayName);
          console.log("Line ID :", _this.profile.userId);
        })
        .catch(function (error) {
          console.log("Profile not found");
          _this.message = "Profile not found";
          _this.profile = {
            userId: "test123",
            displayName: "Mr.Toms shoes",
            pictureUrl:
              "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
          };
        });
    },
  },
}
</script>
<template>
    <div id="miniUserProfile">
            <div class="username-container">
                <div class="profile-container">
                    <div class="profile-img">
                        <img v-bind:src="profile.pictureUrl" alt="Profile Picture" />
                    </div>
                    <div class="profile-description">
                        <p class="user-title">{{ profile.displayName }}</p>
                        <p class="username">Point:⭐ 11,000</p>
                    </div>
                </div>
                <div class="menu-bar">
                    <i class="bi bi-three-dots"></i>
                </div>
            </div>
        </div>
</template>
<style scoped>
p{
  margin-bottom:0rem
}
.username-container{
    background-color: #ffffff;
    width: 180px;
    height: 50px;
    display: flex;
    border-radius: 50px;
    padding: 10px;
    justify-content: space-between;
    margin-left: auto; 
    margin-right: 0;
}
.profile-container{
    display: flex;
    gap: 0.5em;
    justify-content: space-between;
    align-items: center;
}

.profile-description{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.profile-img {
    border-radius: 50%;
    width: 40px;
    height: 70px;
    overflow: hidden;
}
.profile-img img{
    width: 100%;
    height: 80%;
    object-fit: cover; 

}

.user-title{
    color: rgb(59, 132, 222);
    font-weight: bold;
    font-size: 0.8em;
}

.username {
    color: #4c4c55;
}
</style>