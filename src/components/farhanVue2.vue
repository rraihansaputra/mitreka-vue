
<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Nameasdasd</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ contact.name }}</td>
          <td>ok</td>  
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