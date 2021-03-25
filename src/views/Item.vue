<template>
  <div class="container-item">
      <div class="info">
          <span class="info-element">Название</span>
          <span class="data-element">{{ product.title }}</span>
      </div>
      <div class="info">
          <span class="info-element">Цена</span>
          <span class="data-element">{{ product.price }} руб</span>
      </div>
      <div class="info">
          <span class="info-element">Колличество</span>
          <span class="data-element">{{ product.amount }}</span>
      </div>
      <button @click="ADD_ITEM(product)" class="btn-add">Добавить в корзину</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            product: 'product'
        })
    },

    mounted(){
        this.fetchProduct(this.$route.params.id)
    },

    methods: {
        ...mapActions({
            fetchProduct: 'fetchProduct'
        }),

        ...mapMutations({
            ADD_ITEM: 'ADD_ITEM'
        })
    }
}
</script>

<style lang="scss" scoped>
    .container-item{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .info{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 3rem;
            margin: 1rem 0;
            border: 1px solid cornflowerblue;
            border-radius: 4px;
            box-shadow: 0 0 5px 0 cornflowerblue;
            max-width: 95%;
            min-width: 85%;

            .info-element{
                color: cornflowerblue;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 24px;
                font-weight: 600;
            }

            .data-element{
                color: coral;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 24px;
                font-weight: 600;
            }
        }

        .btn-add{
            background-color: white;
            padding: .5rem 2rem;
            border: 2px solid rgba(59, 168, 55, 0.924);
            color: rgba(59, 168, 55, 0.924);
            
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 20px;
            font-weight: 500;
            transition: .3s;
        }

        .btn-add:hover{
            background-color: rgba(59, 168, 55, 0.924);
            color: white;
            transition: .3s;
        }
    }

</style>