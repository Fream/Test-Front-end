<template>
  <div id="app">
    <h1>Ваккуматоры</h1>
    <b-table hover :items="vacuumVessels" :fields="fields">
      <template v-slot:cell(image)="data">
        <img :src="data.value" class="img-size">
      </template>
      <template v-slot:cell()="data">
        {{ data.value }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'VacuumVessel',
  data() {
    return {
      fields: [
        {
          key: 'image',
          label: 'Изображение',
        },
        {
          key: 'name',
          label: 'Наименование'
        },
        {
          key: 'availability',
          label: 'Наличие'
        },
        {
          key: 'price',
          label: 'Цена'
        }
      ]
    }
  },
  created() {
    this.$store.dispatch('vacuumVessels/getAll');
  },
  computed: mapGetters('vacuumVessels', {
    vacuumVessels: 'getVacuumVessels'
  })
}
</script>

<style scoped>
.img-size {
  max-width: 200px;
  max-height: 50px;
}
</style>
