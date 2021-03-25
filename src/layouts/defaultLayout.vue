<template>
  <div class="container">
      <header>
          <router-link class="link" to="/"><h2>Logo</h2></router-link>
          <router-link class="link" to="/cart">Корзина( {{ cartCount }} )</router-link>
      </header>
      <main>
          <router-view />
      </main>
      <footer></footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            cartCount: 'cartCount'
        })
    }
}
</script>

<style lang="scss" scoped>
    .container{
        min-height: 100vh;
        header{
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 1rem 2rem;
            border: 1px solid cornflowerblue;
            box-shadow: 0 0 5px 0 cornflowerblue;
            background-color: cornflowerblue;
            color: white;

            .link{
                text-decoration: none;
                color: white;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 20px;
                font-weight: 500;
            }

        }
    }
</style>