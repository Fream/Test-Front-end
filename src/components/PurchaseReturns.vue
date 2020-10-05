<template>
  <div id="app">
    <h1>Условия возврата</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
import clientApi from './../clientApi';

export default {
  name: 'PurchaseReturns',
  data() {
    return {
      content: ''
    }
  },
  beforeCreate() {
    clientApi.getPurchaseReturnsPage().then((data) => {
      this.content = data.content['ru'];
    });
  }
}
</script>

<style scoped>
</style>
