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
    </div>
</template>

<style scoped>


</style>