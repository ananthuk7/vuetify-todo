<template>
<div>
    <v-list flat class="pt-0">
        <div v-for="(task, index) in $store.state.tasks" :key="index" :class="{ 'green accent-2': task.done }">
            <v-list-item @click="$store.commit('setActive', task.id)">
                <template v-slot:default>
                    <v-list-item-action>
                        <v-checkbox :input-value="task.done"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">{{ task.title }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-list-item-action-text v-if="task.dueDate">
                            <v-icon small>mdi-calendar</v-icon>{{task.dueDate | niceDate}}
                        </v-list-item-action-text>

                    </v-list-item-action>
                    <v-list-item-action>
                        <task-menu :task='task'></task-menu>
                    </v-list-item-action>
                </template>
            </v-list-item>
            <v-divider></v-divider>

        </div>
    </v-list>
</div>
</template>

<script>
import {format} from 'date-fns'
export default {
    filters:{
        niceDate(value){
            return format(new Date(value), 'MMM-d')
        }
    },
    components: {
        'task-menu': require('@/components/tasks/TaskMenu.vue').default
    },

}
</script>
