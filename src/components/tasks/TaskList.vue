<template>
<div>
    <v-list flat class="pt-0">
        <draggable v-model="tasks" handle=".handle">
            <task v-for="(task, index) in tasks" :task="task" :key="index" :class="{ 'green accent-2': task.done }" />
        </draggable>
    </v-list>
</div>
</template>

<script>
import draggable from 'vuedraggable'
export default {

    computed: {
        tasks: {
            get() {
                return this.$store.getters.getFilteredData
            },
            set(value) {
                this.$store.commit('setTasks', value)
            }
        }
    },
    components: {
        'task': require('@/components/tasks/Task.vue').default,
        draggable,
    }   
}
</script>
