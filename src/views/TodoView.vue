<template>
<div class="pt-3">
    <div class="pa-5 pb-2" >
        <v-text-field
      outlined
      clearable
      label="Add new task"
      hide-details
      append-icon="mdi-plus"
      @click:append="addNewTask"
      @keydown.enter="addNewTask"
      v-model="newTaskTitle"></v-text-field>
    </div>
   
    <v-list flat class="pt-0" v-if="tasks.length">
        <div v-for="(task, index) in tasks" :key="index" :class="{ 'green accent-2': task.done }">
            <v-list-item @click="setActive(task.id)">
                <template v-slot:default>
                    <v-list-item-action>
                        <v-checkbox :input-value="task.done"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">{{ task.title }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon @click.stop="deleteTask(task.id)">
                        <v-icon>mdi-delete</v-icon>
                    </v-list-item-icon>
                </template>
            </v-list-item>
            <v-divider></v-divider>
        </div>
    </v-list>
    <div v-else>
        no tasks
    </div>
</div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            newTaskTitle: "",
            tasks: [],
        };
    },
    methods: {
        setActive(taskId) {
            var task = this.tasks.filter((task) => task.id == taskId)[0];
            task.done = !task.done;
        },
        deleteTask(taskId) {
            this.tasks = this.tasks.filter((task) => task.id != taskId);
        },
        addNewTask() {
            if (this.newTaskTitle) {
                let newTitle = {
                    id: Date.now(),
                    title: this.newTaskTitle,
                    done: false,
                };
                this.tasks.push(newTitle);
            }
            this.newTaskTitle = "";
        },
    },
};
</script>
