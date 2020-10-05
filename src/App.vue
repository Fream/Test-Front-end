<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-nav>
        <b-nav-item to="/home" exact exact-active-class="active">Главная</b-nav-item>
        <b-nav-item to="/vacuum-vessel" exact exact-active-class="active">Ваккуматоры</b-nav-item>
        <b-nav-item to="/dosage-meter" exact exact-active-class="active">Дозаторы</b-nav-item>
        <b-nav-item to="/purchase-returns" exact exact-active-class="active">Условия возврата</b-nav-item>
        <b-nav-item to="/payment" exact exact-active-class="active">Условия оплаты</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
</style>
