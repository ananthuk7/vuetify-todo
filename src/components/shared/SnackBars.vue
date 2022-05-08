<template>
<div class="text-center">
    <v-snackbar v-model="$store.state.snackBar.show" :multi-line="multiLine">
        {{ $store.state.snackBar.text }}
        <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="$store.state.snackBar.show = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</div>
</template>

<script>
export default {
    data: () => ({
        multiLine: true,
    }),
}
</script>

<style lang="sass">
div.v-snack:not(.v-snack--absolute) 
    height: 100%
</style>
