<template>
<v-row justify="center">
    <v-dialog :value="true" persistent max-width="290">
        <v-card>
            <v-card-title class="text-h5">
                EditTask
            </v-card-title>
            <v-text-field class="pa-5" label="upadte text" v-model="newTaskTitle"></v-text-field>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="$emit('close')">
                    Cancel
                </v-btn>
                <v-btn color="green darken-1" :disabled="validateTitle" @click="updateTask(task.id)">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
export default {
    props: ['task'],
    data() {
        return{
            newTaskTitle : null
        } 
    },
    computed:{
       validateTitle(){
           return !this.newTaskTitle || this.newTaskTitle == this.task.title;
       }
    },
    methods: {
        updateTask(id) {
            var taskData = {
                id :id,
                title :this.newTaskTitle
            }
            // console.log(taskData)
            this.$store.dispatch('updateTask',taskData);
            this.$emit('close');
            this.$vuetify.goTo(0, { duration: 0 })
        }

    },
    mounted() {
        this.newTaskTitle = this.task.title
    }
}
</script>
