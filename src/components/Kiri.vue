<template>
    <v-card>
    <v-card flat tile>
      <v-container>
        <v-row>
          <v-col>
              <h2> {{title}} </h2> 
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn class="ma-2">Button1</v-btn>
            <v-btn class="ma-2">Button2</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card>
      <v-card-text>{{text}}</v-card-text>
    </v-card>
  </v-card>
</template>
<script>
export default {
  props :['title','text'],
  components: {
    //PageTitleTest
  },
  data() {
    return {
    }
  }
}
</script>