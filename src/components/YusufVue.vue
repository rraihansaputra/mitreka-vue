<template>
    <v-card>
    <v-card flat tile>
      <v-container>
        <v-row>
          <v-col>
            <h1>Yusuf F</h1>
          </v-col>          
        </v-row>
      </v-container>
    </v-card>
    <v-card>
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

      </v-col></v-row>
    </v-container>
  </v-card>
    </v-card>    
  </v-card>
</template>
<script>
export default {
    props: ['contact'],
}
</script>