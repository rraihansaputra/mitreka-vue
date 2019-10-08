<template>
    <v-card>
        <v-btn class="ma-2" v-on:click=increment()>Up</v-btn>
        
        <v-text-field v-model="status"></v-text-field>
        <v-btn @click=updateStatus()>Update Status</v-btn>
    </v-card>
</template>
<script>
export default {
    props: ['num'],
    data() {
        return {
            status: ""
        }
    },
    methods: {
        increment() {
            // TODO emit even 
            this.$emit('updateGame', this.num)
        },
        updateStatus(){
            this.$emit('updateStatus2', this.num, this.status)
        }
    }
}
</script>