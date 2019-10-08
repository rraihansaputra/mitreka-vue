<template>
  <v-card>
    <v-container>
      <v-row><v-col>

      <v-text-field
        v-model="contact.name"
        label="Nama"
      ></v-text-field>

      <v-text-field
        v-model="contact.phone_number"
        label="Nomor Telfon"
      ></v-text-field>

      <v-text-field
        v-model="contact.website"
        label="URL Website"
      ></v-text-field>

      <v-text-field
        v-model="contact.address"
        label="Alamat"
      ></v-text-field>

      <v-text-field
        v-model="contact.employee"
        label="Jumlah Karyawan"
      ></v-text-field>

      <v-text-field
        v-model="contact.notes"
        label="Catatan"
      ></v-text-field>
      <v-btn color="red" v-if="!isNew" @click="DeleteContact">Delete</v-btn>
      <v-btn v-if="isNew" @click="SubmitForm">Submit</v-btn>

      </v-col></v-row>
    </v-container>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    'contact': Object,
    'isNew': Boolean,
  },
  data() {
    return {
      contactOld:  {
        "url": "http://127.0.0.1:8000/contacts/1/",
        "name": "testContact",
        "phone_number": "0812345678",
        "website": "www.test.com",
        "address": "Jl Krakatau no 5",
        "employees": "100",
        "notes": "Bertemu di pameran",
      },
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
    SubmitForm() {
      axios.post('http://127.0.0.1:8000/contacts/', this.contact)
        .then(response => {
          console.log(response);
          this.$emit('newForm')
          this.contact = this.emptyContact
          return response
        })
    },
    DeleteContact() {
      axios.delete(this.contact.url)
        .then(response => {
          console.log(response);
          this.$emit('newForm')
          return response
        })
    }
  }
}
</script>
