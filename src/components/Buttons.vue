<template>
    <v-card>
      <v-card-title>{{number}}</v-card-title>
      <v-card-text v-if="number >= 10">Lebih dari 10</v-card-text>
      <v-btn class="ma-2" @click=increment()>Up</v-btn>
      <v-btn class="ma-2" @click=decrement()>Down</v-btn>

  </v-card>
</template>
<script>
export default {
    data() {
      return {
        number:0,
      }
    },
    methods: {
      increment() {
        this.number = this.number + 1
      },
      decrement() {
        this.number = this.number - 1
      }
    }
}
</script>