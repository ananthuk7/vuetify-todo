<template>
<div>
    <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>

        <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" @click="handleClick(i)">
                <v-icon>{{item.icon}}</v-icon>
                <v-list-item-title class="ml-2">{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
    <edit-dialog v-if="dialog.edit" @close="dialog.edit = false" :task="task"></edit-dialog>
    <due-date-dialog v-if="dialog.dueDate" @close="dialog.dueDate = false" :task="task"></due-date-dialog>
    <delete-dialog v-if="dialog.delete" @close="dialog.delete = false" :task="task"></delete-dialog>
</div>
</template>

<script>
export default {
    props: ['task'],
    components: {
        'edit-dialog': require('@/components/tasks/diloag/DialogEdit.vue').default,
        'due-date-dialog': require('@/components/tasks/diloag/DialogDueDate.vue').default,
        'delete-dialog': require('@/components/tasks/diloag/DialogDelete.vue').default,
    },
    data() {
        return {
            dialog: {
                delete: false,
                dueDate: false,
                edit: false
            },
            items: [{
                    title: 'Delete',
                    icon:'mdi-trash-can-outline',
                    click() {
                        this.dialog.delete = true;
                    }
                },
                {
                    title: 'Due Date',
                    icon:'mdi-calendar',
                    click() {
                        this.dialog.dueDate = true;
                    }
                },
                {
                    title: 'Edit',
                    icon:'mdi-pencil',
                    click() {
                        this.dialog.edit = true;
                    }
                },
                {
                    title: 'Sort',
                    icon:'mdi-sort',
                    click() {
                        if(!this.$store.state.search){
                            this.$store.commit('toggleDraggable')        
                        }else{
                            this.$store.commit('showSnackBar',"You can't sort tasks while updating")
                        }
                    }
                },
            ],

        }
    },
    methods: {
        handleClick(i) {
            this.items[i].click.call(this);
        }
    }
}
</script>
