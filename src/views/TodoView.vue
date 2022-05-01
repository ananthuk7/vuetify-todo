<template>
<div class="pt-3">
    <task-field></task-field>
    <task-list v-if="$store.state.tasks.length"></task-list>
    <empty-task v-else></empty-task>
</div>
</template>

<script>
export default {
    name: "Home",
    components:{
        'task-field':require('@/components/tasks/TaskField.vue').default,
        'task-list':require('@/components/tasks/TaskList.vue').default,
        'empty-task':require('@/components/tasks/EmptyTask.vue').default,
    },
    
};
</script>
