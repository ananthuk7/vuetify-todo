<template>
<div class="pa-5 pb-2">
    <v-text-field outlined clearable label="Add new task" hide-details v-model="newTaskTitle" @keydown.enter="addTask()">
        <template v-slot:append>
            <v-icon @click="addTask()" color="primary" :disabled="validateTitle">mdi-plus</v-icon>
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
                this.$store.dispatch("addNewTask", this.newTaskTitle),
                    (this.newTaskTitle = "");
            }
        },
    },
};
</script>
