<template>
<v-row justify="center">
    <v-dialog :value="true" persistent max-width="290">
        <v-card>
            <v-card-title class="text-h5">
                DeleteTask
            </v-card-title>
            <v-card-text>are yoy ready for delete this</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="$emit('close')">
                    no
                </v-btn>
                <v-btn color="green darken-1" text  @click="deleteTask(task.id)">
                    yes
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
export default {
    props:['task'],
    methods:{
        deleteTask(id){
            this.$store.dispatch('deleteTask',id)
            this.$emit('close')
        }
    }
}
</script>

