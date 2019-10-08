<template>
<v-container>
  <v-card>
    <v-tabs>
      <v-tabs-slider></v-tabs-slider>

      <v-tab
        v-for="contact in apiContacts"
        :key="contact.url"
        :href="`#tab-${contact.name}`"
        >
        {{contact.name}}
      </v-tab>
      <v-tab-item
        v-for="contact in apiContacts"
        :value="`tab-${contact.name}`"
        :key="contact.url"
      >
        <ContactView
          :contact="contact"
          @newForm="refreshContacts"
          >
        </ContactView>
      </v-tab-item>

      <v-tab href="#new-form">
        New Form
      </v-tab>
      <v-tab-item value="new-form">
        <ContactView
          :contact="emptyContact"
          isNew
          @newForm="refreshContacts"
          >
        </ContactView>
      </v-tab-item>

      <v-tab href="#farhanvuevuecopy">
        Bambang
      </v-tab>
      <v-tab-item
        value="farhanvuevuecopy"
      >
        <rusuhPada
          :contact="apiContacts"
        />
      </v-tab-item>

      <v-tab href="#meta-tab">
        Tab Tab
      </v-tab>
      <v-tab-item value="meta-tab">
        <Kanan/>
      </v-tab-item>

    </v-tabs>
  </v-card>

  <v-row><v-col>
    <v-card>
      <ContactView
        :contact="hardcodeContact"
      >
      </ContactView>
    </v-card>
  </v-col></v-row>

    <v-row><v-col>
    <v-card
      value="farhanVue2">
      <farhanVue2/>
      <farhanVue2
          :contact='hardcodeContact'
      />
    </v-card>
    </v-col></v-row>

    <v-row><v-col>
    <v-card
      value="farhannubss" >
      <farhannubss/>
         <farhannubss
        :contact="hardcodeContact"
      />
    </v-card>
    </v-col></v-row>

    <v-row><v-col>
    <v-card
      value="farhanVue"
      >
      <farhanVue
        :contact="hardcodeContact"
      />
    </v-card>
    </v-col></v-row>

    <v-row><v-col>
    <v-card
      value="salmanVue"
      >
      <salmanVue
      :contact='hardcodeContact'
      />
    </v-card>
    </v-col></v-row>

    <v-row><v-col>
    <v-card
      value="YusufVue"
      >
      <YusufVue
        :contact='hardcodeContact'      
        />
    </v-card>
    </v-col></v-row>

    <v-row><v-col>
    <v-card
      value="farhanVueVue"
      >
      <farhanVueVue
          :contact='hardcodeContact'
      />
    </v-card>
    </v-col></v-row>


    <v-row><v-col>
    <v-card
      value="farhanvuevuecopy"
      >
      <rusuhPada/>
    </v-card>
    </v-col></v-row>
</v-container>
</template>

<script>
import axios from 'axios';
import farhanVue from '../components/farhanVue'
import farhanVue2 from '../components/farhanVue2'
import farhannubss from '../components/farhannubss'
import rusuhPada from '../components/farhanVueVuecopy'
import YusufVue from '../components/YusufVue'
import farhanVueVue from '../components/farhanVueVue'
import salmanVue from '../components/salmanVue'
import ContactView from '../components/ContactView'
import Kanan from '../components/Kanan'
import { getContacts } from '../api.js'

export default {
  components: {
    farhanVue,
    farhanVue2,
    salmanVue,
    farhanVueVue,
    farhannubss,
    YusufVue,
    rusuhPada,
    ContactView,
    Kanan,
  },
  data() {
    return {
      hardcodeContact: {
        "url": "http://127.0.0.1:8000/contacts/1/",
        "name": "testContact",
        "phone_number": "0812345678",
        "website": "www.test.com",
        "address": "Jl Krakatau no 5",
        "employees": "100",
        "notes": "Bertemu di pameran",
      },
      apiContacts: [],
      emptyContact: {
        "name": "",
        "phone_number":  "",
        "website": "",
        "address": "",
        "employees": "",
        "notes": "",
      },
    }
  },
  methods: {
    refreshContacts() {
      axios.get('http://127.0.0.1:8000/contacts/')
        .then(response => {
            this.apiContacts = response.data
            console.log(response)
            return response
          })
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/contacts/')
      .then(response => {
          this.apiContacts = response.data
          console.log(response)
          return response
        })
  }
}
</script>
