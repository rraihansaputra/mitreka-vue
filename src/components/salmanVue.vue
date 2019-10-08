<template>
    <v-card>
    <v-card flat tile>
      <v-container>
        <v-row>
          <v-col>
            <h1>Salman Muhammad Ichsan</h1>
          </v-col>          
        </v-row>
      </v-container>
    </v-card>
    <v-card>
      <v-container>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Phone Number</th>
              <th class="text-left">Website</th>   
              <th class="text-left">Address</th>
              <th class="text-left">Employees</th> 
              <th class="text-left">Notes</th>          
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ contact.name }}</td>
              <td>{{ contact.phone_number }}</td>
              <td>{{ contact.website }}</td>
              <td>{{ contact.address }}</td>
              <td>{{ contact.employees }}</td>
              <td>{{ contact.notes }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      </v-container>
    </v-card>    
  </v-card>
</template>
<script>
export default {
    props: ['contact'],
}
</script>