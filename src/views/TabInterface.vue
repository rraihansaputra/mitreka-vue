<template>
  <v-card>
  <v-tabs>

    <!-- TAB SLIDER -->
    <v-tabs-slider></v-tabs-slider>
    <v-tab
      v-for="contact in contacts"
      v-bind:key="contact.url"
      v-bind:href="`#tab-${contact.name}`"
    >
      {{ contact.name }}
    </v-tab>


    <!-- TAB ITEM -->
    <v-tab-item
      v-for="contact in contacts"
      :value="`tab-${contact.name}`"
      :key="contact.url"
    >
      <v-card flat tile>
        {{contact}}
      </v-card>
    </v-tab-item>


  </v-tabs>
  </v-card>
</template>

<script>
import { getContacts } from '../api.js'

export default {
  data() {
    return {
      contacts: [
    {
        "url": "http://127.0.0.1:8000/contacts/1/",
        "name": "testContact",
        "phone_number": "",
        "website": "",
        "address": "",
        "employees": "",
        "notes": "",
        "interactions": [
            {
                "url": "http://127.0.0.1:8000/interactions/2/",
                "action": "Event",
                "notes": "Event coming up in 2 days",
                "created_at": "2019-10-07T11:42:19.291834Z",
                "contact": "http://127.0.0.1:8000/contacts/1/"
            },
            {
                "url": "http://127.0.0.1:8000/interactions/3/",
                "action": "Call",
                "notes": "Call tomorrow",
                "created_at": "2019-10-07T11:49:54.023340Z",
                "contact": "http://127.0.0.1:8000/contacts/1/"
            }
        ]
    },
    {
        "url": "http://127.0.0.1:8000/contacts/2/",
        "name": "test2",
        "phone_number": "0887880816025",
        "website": "",
        "address": "",
        "employees": "",
        "notes": "",
        "interactions": [
            {
                "url": "http://127.0.0.1:8000/interactions/1/",
                "action": "Call",
                "notes": "Call today",
                "created_at": "2019-10-07T11:35:54.711888Z",
                "contact": "http://127.0.0.1:8000/contacts/2/"
            }
        ]
    },
    {
        "url": "http://127.0.0.1:8000/contacts/3/",
        "name": "test3",
        "phone_number": "",
        "website": "",
        "address": "",
        "employees": "",
        "notes": "",
        "interactions": []
    }
],
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
    //this.contacts = getContacts()
  }
}
</script>
