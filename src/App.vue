<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/tabsm">
      <v-btn
        text
      >
        <span class="mr-2">Tab Contact</span>
      </v-btn>
      </router-link>
      <router-link to="/multiview">
      <v-btn
        text
      >
        <span class="mr-2">MultiView</span>
      </v-btn>
      </router-link>
      <router-link to="/multiviewapi">
      <v-btn
        text
      >
        <span class="mr-2">MultiView API</span>
      </v-btn>
      </router-link>
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
