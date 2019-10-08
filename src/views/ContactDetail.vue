<template>
<v-container class="pa-2" fluid>
  <v-row><v-col>
    <PageTitle/>
  </v-col></v-row>
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
      tabs: 3,
      text: 'testtext',
    }
  }
}
</script>