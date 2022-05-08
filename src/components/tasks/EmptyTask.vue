<template>
    <div class="no-task">
      <v-icon  size="80" color="rgb(32, 223, 226)">mdi-check</v-icon>
        no tasks
    </div>
</template>

<script>
export default {

}
</script>
<style>
.no-task{
  color: rgb(32, 223, 226);
  font-size:2rem;
  text-transform: capitalize;
  position:absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction:column;
}

</style>