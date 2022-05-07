<template>
<v-text-field
:value="$store.state.search"
@input="$store.commit('searchFilter',$event)"
@blur="searchData = true"
@focus="searchData = false"
  placeholder="Search"
  prepend-inner-icon="mdi-magnify"
  filled
  clearable
  dense
  class="mt-1 search-btn"
  :class="{'closed':searchData && !$store.state.search}"></v-text-field>
</template>

<script>
export default {
data(){
  return {
    searchData:true,
  }
}
}
</script>

<style scoped>
.search-btn{
  transition: max-width 0.5s;
}
.v-text-field > .v-input__control > .v-input__slot:before,.v-text-field > .v-input__control > .v-input__slot:after{
border-color: transparent !important;
background-color: transparent !important;
}
.closed{
  max-width: 45px !important;
  background-color: transparent !important;
}
</style>
