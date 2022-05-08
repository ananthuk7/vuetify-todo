<template>
<div class="text-subtitle-2">
    {{date}}
</div>
</template>

<script>
import {
    format
} from 'date-fns'
export default {
    data() {
        return {
            date: null
        }
    },
    methods: {
        showDateTime() {
            this.date = format(new Date(), 'MMM-d, H:mm:ss')
            setTimeout(this.showDateTime, 1000)
        },
    },

    mounted() {
        this.showDateTime()
    }

}
</script>

<style>

</style>
