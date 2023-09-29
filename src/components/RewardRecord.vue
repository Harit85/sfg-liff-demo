<script>
import MenuNavBarVue from "./MenuNavBar.vue";
import MiniProfile from "./MiniProfile.vue"
export default {
  name: "Reward",
  components: {
    menubar: MenuNavBarVue,
    miniProfile:MiniProfile,
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
        <div class="card-grid" style="margin-top: 10px;margin-bottom: 10px;">

        </div>
    </div>
</template>

<style scoped>

</style>