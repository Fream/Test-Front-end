<template>
  <div id="app">
    <h1>Условия оплаты</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
import clientApi from './../clientApi';

export default {
  name: 'Payment',
  data() {
    return {
      content: ''
    }
  },
  beforeCreate() {
    clientApi.getPaymentPage().then((data) => {
      this.content = data.content['ru'];
    })
  }
}
</script>

<style scoped>
</style>
