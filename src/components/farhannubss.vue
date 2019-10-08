
  <template>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">No Telfon</th>
            <th class="text-left">Website</th>
            <th class="text-left">Adress</th>
            <th class="text-left">Employees</th>
            <th class="text-left">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ contact.name }}</td>
            <td> {{contact.phone_number}} </td>       
            <td> {{contact.website}} </td>       
            <td> {{contact.address}} </td>
            <td> {{contact.employees}} </td>     
            <td> {{contact.notes}} </td>       
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </template>


<script>
export default {
    props: ['contact'],
    
}
</script>