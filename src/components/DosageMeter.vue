<template>
  <div id="app">
    <h1>Дозаторы</h1>
    <b-table ref="tableDosageMeters" hover :items="products('dosageMeters', sorting)" :fields="fields" @head-clicked="sort">
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
  name: 'DosageMeter',
  data() {
    return {
      sorting: null,
      fields: [
        {
          key: 'image',
          label: 'Изображение',
          'v-click': 'test'
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
    this.$store.dispatch('products/getProducts', 'dosageMeters');
  },
  computed: mapGetters('products', {
    products: 'get'
  }),
  methods: {

    // Instead of creating a simle table (like <b-table-simple>) and define all columns and rows manualy
    // we could just use <b-table> component from bootstrap-vue
    // Advantages :
    // - no need to define rows, we could just specify our entities to display (array of objects to display)
    // - no need to define stucture or headers of the table, we use only data.fields to describe columns
    // Disadvantages:
    // - sometimes b-table component is not refreshed when the items (rows) of this table are computed, need manual refresh by $refs.table.refresh()

    sort(key) {
      if (key == 'price') {
        this.sorting = !this.sorting;
        this.products('dosageMeters', this.sorting);
        this.$refs.tableDosageMeters.refresh();
      }
    }
  }
}
</script>

<style scoped>
.img-size {
  max-width: 200px;
  max-height: 50px;
}
</style>
