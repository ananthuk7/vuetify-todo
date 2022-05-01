<template>
<div class="pa-5 pb-2">
    <v-text-field
      outlined
      clearable
      label="Add new task"
      hide-details
      append-icon="mdi-plus"
      @click:append="addTask()"
      @keydown.enter="addTask()"
      v-model="newTaskTitle"></v-text-field>
</div>
</template>

<script>
export default {
    name: "task-field",
    data() {
        return {
            newTaskTitle: "",
        };
    },
    methods: {
        addTask() {
            this.$store.commit('addNewTask', this.newTaskTitle),
                this.newTaskTitle = ''
        },
    },
}
</script>
