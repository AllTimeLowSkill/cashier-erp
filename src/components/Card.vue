<template>
  <div class="product">
      <router-link :to="{path: `product/${product._id}`}" class="title">{{ product.title }}</router-link>
      <img class="img-card" :src="product.imageUrl" alt=""> 
      <span class="price">Цена: {{ product.price }}</span>
      <button @click="ADD_ITEM(product)" class="btn-add">Добавить в карзину</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    props: ['product'],

    computed: {
        ...mapGetters({
            cart: 'cart'
        })
    },

    methods: {
        ...mapMutations({
            ADD_ITEM: 'ADD_ITEM'
        }),
    }
    
}
</script>

<style lang="scss" scoped>
    .product{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 1rem ;
        padding: 1rem;
        border: 1px solid cornflowerblue;
        border-radius: 4px;
        box-shadow: 0 0 5px 0 cornflowerblue;

        .price{
            margin: 1rem 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 20px;
            font-weight: 500;
        }

        .title{
            color: cornflowerblue;
            text-decoration: none;
            font-size: 24px;
            font-weight: 500;
            transition: .3s;

            margin-bottom: 1rem;
        }

        .title:hover{
            text-decoration: underline cornflowerblue;
            transition: .3s;
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

        .img-card{
            border-radius: 6px;

            width: 25vw;
            height: 30vh;
        }
    }
</style>