<template>
<div class="mt-4" style="width:100%">
    <v-text-field class="my-task-add-field" outlined clearable placeholder="Add New Task" hide-details v-model="newTaskTitle" @keydown.enter="addTask()">
        <template v-slot:append>
            <v-icon @click="addTask()"  :disabled="validateTitle">mdi-plus</v-icon>
        </template>
    </v-text-field>
</div>
</template>

<script>
export default {
    name: "task-field",
    data() {
        return {
            newTaskTitle: null,
        };
    },
    computed: {
        validateTitle() {
            return !this.newTaskTitle;
        },
    },
    methods: {
        addTask() {
            if (!this.validateTitle) {
                this.$store.dispatch("addNewTask", this.newTaskTitle)
                this.newTaskTitle = ""
            }
        },
    },
};
</script>
<style lang="sass">
    .my-task-add-field.v-input--is-focused
        .v-input__slot
            background-color: rgba(89, 162, 179, .5) !important    
</style>
