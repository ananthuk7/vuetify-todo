<template>
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
                <v-list-item-icon @click.stop="$store.commit('deleteTask', task.id)">
                    <v-icon>mdi-delete</v-icon>
                </v-list-item-icon>
            </template>
        </v-list-item>
        <v-divider></v-divider>
    </div>
</v-list>
</template>

<script>
export default {};
</script>
