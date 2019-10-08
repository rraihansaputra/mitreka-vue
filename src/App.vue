<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/home">
      <v-btn
        text
      >
        <span class="mr-2">Home</span>
      </v-btn>
      </router-link>
      <router-link to="/about">
      <v-btn
        text
      >
        <span class="mr-2">About</span>
      </v-btn>
      </router-link>
    </v-app-bar>
    <span class="mr-2">Penawaran</span>
      </v-btn>
      </router-link to="/Penawaran">
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
