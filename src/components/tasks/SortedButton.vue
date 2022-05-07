<template>
  <v-btn @click="$store.commit('toggleDraggable')" class="sorted-btn" color="primary">
      hide dragable
  </v-btn>
</template>

<script>
export default {

}
</script>

<style>
.sorted-btn{
    position:absolute;
    bottom:10%;
    left:50%;
    transform:translate(-50%)
}
</style>