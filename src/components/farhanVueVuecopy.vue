<template>
    <v-card>
    <v-card flat tile>
      <v-container>
        <v-row>
          <v-col>
            <h1>SISKOHAT STYLEx2</h1>
          </v-col>
        </v-row>
        <v-row 
          v-for="data in contact"
          :key="data.url"
        >
        <template 
          v-for="(val, key) in data"
        >
            <v-col 
              :key="val.url">
              <b>{{ key }}</b>
            </v-col>
            <v-col
              :key="val.url">
              <span>: {{ val }}</span>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-card>
    <v-card>
      <v-card-text>{{ contact }}</v-card-text>
    </v-card>
  </v-card>
</template>
<script>
export default {
    props: ['contact'],
}
</script>