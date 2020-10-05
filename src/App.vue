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
    <b-container>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
