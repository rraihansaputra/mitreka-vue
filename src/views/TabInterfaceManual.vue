<template>
  <v-card>
  <v-tabs>

    <!-- TAB SLIDER -->
    <v-tabs-slider></v-tabs-slider>

    <v-tab href="#tab-1">
      Tab 1
    </v-tab>

    <v-tab href="#tab-2">
      Tab 2
    </v-tab>

    <v-tab href="#tab-3">
      Tab 3
    </v-tab>
    <v-tab href="#penawaran">
      Penawaran
    </v-tab>

    <v-tab href="#farhanVue">
      Farhan Vue
    </v-tab>

    <v-tab href="#farhannubss">
      farhannubss 
    </v-tab>
    
    <v-tab href="#farhanVue2">
      Testsad
    </v-tab>
    
    <v-tab href="#salmanVue">
      Salman
    </v-tab>

    <v-tab href="#farhanvuevuecopy">
      Bambang
    </v-tab>

     <v-tab href="#YusufVue">
      Bambang Pamungkas
    </v-tab>

     <v-tab href="#farhanVueVue">
      Farhan Vue Vue
    </v-tab>


    <!-- TAB ITEM -->
    <v-tab-item
      value="tab-1"
    >
      <v-card flat tile>
        <v-card-title>{{contact}}</v-card-title>
      </v-card>
    </v-tab-item>

    <v-tab-item
      value="tab-2"
    >
      <v-card flat tile>
        <v-card-title>{{contact}}</v-card-title>
      </v-card>
    </v-tab-item>

    <v-tab-item
      value="tab-3"
    >
      <v-card flat tile>
        <v-card-title>{{contact[url]}}</v-card-title>
      </v-card>
    </v-tab-item>

    <v-tab-item
      value="penawaran"
      >
      <Penawaran/>
    </v-tab-item>

    <v-tab-item
      value="farhanVue2">
      <fafhanVue2/>
      <farhanVue2 :contact='contact'/>
    </v-tab-item>

    <v-tab-item
      value="farhannubss" >
      <farhannubss/>
      <farhannubss :contact='contact'/>
    </v-tab-item>

    <v-tab-item
      value="farhanVue"
      >
      <farhanVue
        :contact='contact'
      />
    </v-tab-item>

    <v-tab-item
      value="salmanVue"
      >
      <salmanVue
        :contact='contact'
      />
    </v-tab-item>

    <v-tab-item
      value="YusufVue"
      >
      <YusufVue
      :contact='contact'
      />
    </v-tab-item>

    <v-tab-item
      value="farhanVueVue"
      >
      <farhanVueVue
        :contact='contact'
      />
    </v-tab-item>
    
 

    <v-tab-item
      value="farhanvuevuecopy"
      >
      <rusuhPada/>
    </v-tab-item>

  </v-tabs>
  </v-card>
</template>

<script>
import Vue from 'vue';
import api from '../api.js'
import Penawaran from '../components/Penawaran'
import farhanVue from '../components/farhanVue'
import farhanVue2 from '../components/farhanVue2'
import farhannubss from '../components/farhannubss'
import rusuhPada from '../components/farhanVueVuecopy'
import YusufVue from '../components/YusufVue'
import farhanVueVue from '../components/farhanVueVue'
import salmanVue from '../components/salmanVue'

export default Vue.extend({
  components: {
    Penawaran,
    farhanVue,
    farhanVue2,
    salmanVue,
    farhanVueVue,
    farhannubss,
    YusufVue,
    rusuhPada
  },
  data() {
    return {
      contacts: [],
      contact: {
          "url": "http://127.0.0.1:8000/contacts/1/",
          "name": "testContact",
          "phone_number": "0812345678",
          "website": "www.test.com",
          "address": "Jl Krakatau no 5",
          "employees": "100",
          "notes": "Bertemu di pameran",
      },
      tabs: 3,
      tabtext: "tab",
    }
  },
  methods: {
    getContacts() {
      this.contacts = api.getContacts()
    },
  },
  mounted() {
    this.getContacts()
  },
})
</script>
