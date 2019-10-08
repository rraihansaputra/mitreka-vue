<template>
<v-container class="pa-2" fluid>
  <v-row><v-col>
    <v-card>
      <v-text-field v-model="title_var"></v-text-field>
      <v-text-field v-model="message_var"></v-text-field>
    </v-card>
  </v-col></v-row>
  <v-row><v-col>
    <PageTitle/>
  </v-col></v-row>
  <v-row>
    <v-col><Kiri
      v-bind:title="title_var"
      v-bind:text="message_var"
    /></v-col>
    <v-col><Penawaran
      v-bind:title="title_var"
      :text="message_var"
    /></v-col>
  </v-row>
  <v-row>
    <v-col><Kiri/></v-col>
    <v-col><Kanan/></v-col>
  </v-row>
  <v-row><v-col>
    <Increments/>
  </v-col></v-row>
</v-container>
</template>
<style></style>
<script>
import PageTitle from '../components/PageTitle'
import Increments from '../components/Increments'
import Penawaran from '../components/Penawaran'
import Kanan from '../components/Kanan'
import Kiri from '../components/Kiri'

export default {
  components: {
    PageTitle,
    Increments,
    Penawaran,
    Kanan,
    Kiri,
  },
  data() {
    return {
      tabs: 5,
      text: 'testtext',
      title_var: "Title Baru",
      message_var: "Message Baru",
    }
  }
}
</script>