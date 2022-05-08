<template>
<div class="pt-3">
    <task-list v-if="$store.state.tasks.length" />
    <empty-task v-else />
    <sorted-button v-if="$store.state.sorted" />
</div>
</template>

<script>
export default {
    name: "Home",
    components:{
        'task-list':require('@/components/tasks/TaskList.vue').default,
        'empty-task':require('@/components/tasks/EmptyTask.vue').default,
       'sorted-button': require('@/components/tasks/SortedButton.vue').default,
    },
};
</script>
