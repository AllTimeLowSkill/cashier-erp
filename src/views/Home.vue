<template>
  <div class="home">
      <Card v-for="(item, idx) in products" :key="idx" :product="item" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'

import Card from '../components/Card'
export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      products: 'products',
    })
  },
  mounted(){
    this.fetchProducts()
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts'
    })
  },
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
  .home{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem 2rem;
  }
</style>
