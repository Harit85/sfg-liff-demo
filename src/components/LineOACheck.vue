<script>
import { liff } from "@line/liff";

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
        this.message = "LIFF init succeeded.";
      })
      .catch((e) => {
        this.message = "LIFF init failed.";
        this.error = `${e}`;
      });
  },
  methods:{
    openWindow () {
      liff.openWindow({
        url: 'https://developers.line.me/en/docs/liff/overview/'
      })
    },
  closeWindow () {
      liff.closeWindow()
    },
    sendMessage () {
      this.$liff.sendMessages([
        {
          type: 'text',
          text: 'You/\'ve successfully sent a message! Hooray!'
        },
        {
          type: 'sticker',
          packageId: '2',
          stickerId: '144'
        }
      ]).then(function () {
        window.alert('Message sent')
      }).catch(function (error) {
        window.alert('Error sending message: ' + error)
      })
    },
    getProfile () {
      let _this = this
      liff.getProfile().then(function (profile) {
        _this.profile = profile
      }).catch(function (error) {
        alert('Error getting profile: ' + error)
      })
    }
  }
};


</script>

<template>
  <div>
    <h1>create-liff-app</h1>
    <p v-if="message">{{ message }}</p>
    <p v-if="error">
      <code>{{ error }}</code>
    </p>
    <h1 class="title">VueJs Line LIFF Showcase</h1>
    <div class="columns is-mobile">
      <div class="column is-12 has-text-centered buttons">
        <button @click="openWindow()" class="button is-primary">
          Open Window
        </button>
        <button @click="closeWindow()" class="button is-info">
          Close Window
        </button>
        <button @click="sendMessage()" class="button is-success">
          Send Message
        </button>
        <button @click="getProfile()" class="button is-danger">
          Get Profile
        </button>
      </div>
    </div>
    <h2 class="subtitle">Profile</h2>
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">User ID:</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                {{ profile.userId || "-" }}
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Display Name:</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                {{ profile.displayName || "-" }}
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Picture URL:</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                {{ profile.pictureUrl || "-" }}
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Status Message:</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                {{ profile.statusMessage || "-" }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
