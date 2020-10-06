<template>
  <div id="app">
    <h1>{{ header }}</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
import clientApi from './../clientApi';

export default {
  name: 'PurchaseReturns',
  data() {
    return {
      header: '',
      content: ''
    }
  },
  beforeCreate() {
    clientApi.getPurchaseReturnsPage().then((data) => {
      this.header = data.name['ru'];
      this.content = data.content['ru'];
    });
  }
}
</script>

<style scoped>
</style>
