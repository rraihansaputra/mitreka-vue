<template>
    <v-card>
    <v-card flat tile>
      <v-container>
        <v-row>
          <v-col>
            <h1>{{title}}</h1>
            <h1>Ini Halaman ajis</h1>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn class="ma-2">Button1</v-btn>
            <v-btn class="ma-2">Button2</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card>
      <v-card-text>{{title}}</v-card-text>
      <v-card-text>Mabar Kuy</v-card-text>
      <v-card-text>Gamau ah, Kerja Euy</v-card-text>
    </v-card>
  </v-card>
</template>
<script>
export default {
    props: ['title', 'text'],
}
</script>