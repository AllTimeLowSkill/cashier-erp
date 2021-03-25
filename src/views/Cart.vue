<template>
  <div>
      <template v-if="cart.length === 0">
          <h2>Корзина пуста!</h2>
      </template>
      <template v-else>
          <ul class="list-cart">
            <li class="list-cart-item" v-for="(item, idx) in cart" :key="idx">
                <span class="title">{{ item.title }}</span>
                <div>
                    <span class="price">{{ item.price }} руб</span>
                    <button @click="DELETE_ITEM(idx)" class="btn-delete">&times;</button>
                </div>
            </li>
        </ul>
        <span class="total">Итогова сумма:  {{ total }} руб</span>
        <br>
        
        <card class='stripe-card'
            :class='{ complete }'
            stripe='pk_test_51IYYN4F7CCFluXlQrFh3U92FwpLUd2fgIxLNHtoY667L4MSQm2FXWH9r9ctILFGjN7DwCmMwTBusp2YzrYlb5UKg00DiNVP8w2'
            :options='stripeOptions'
            @change='complete = $event.complete'
        />
        <br>
        <button class='pay-with-stripe' @click='handlegetpaymentIntent' :disabled='!complete'>Оплатить</button>
      </template>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

// import { stripeKey, stripeOptions } from './stripeConfig.json'
import { Card, handleCardPayment } from 'vue-stripe-elements-plus'

export default {
    components: {
        Card
    },

    data(){
        return {
            complete: false,
            stripeOptions: {
                // see https://stripe.com/docs/stripe.js#element-options for details
            },

            paymentIntent: null
        }
    },

    computed: {
        ...mapGetters({
            cart: 'cart',
            total: 'total'
        })
    },

    methods: {
        ...mapMutations({
            DELETE_ITEM: 'DELETE_ITEM'
        }),

        ...mapActions({
            handleBuy: 'handleBuy'
        }),

        async handlegetpaymentIntent(){
            const intent = await this.handleBuy()
            console.log(intent)
            this.paymentIntent = intent.client_secret
            await handleCardPayment(this.paymentIntent)
        },
    }
}
</script>

<style lang="scss" scoped>
    .total{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 24px;
        font-weight: 500;
        color: tomato;
    }

    .btn-pay{
        background-color: green;
        color: white;
        padding: .5rem 1rem;
        margin-top: 1rem;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 24px;
        font-weight: 500;

        border: 2px solid green;
        text-align: center;

        transition: .3s;
    }

    .btn-pay:hover{
        background-color: white;
        color: green;

        transition: .3s;
    }

    .list-cart{
        list-style: none;
        padding-inline-start: 0;
        

        &-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 3rem;
            border: 1px solid cornflowerblue;
            box-shadow: 0 0 5px 0 cornflowerblue;
            margin-top: 2rem;

            .title{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 20px;
                font-weight: 500;
                color: cornflowerblue;
            }

            .price{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 20px;
                font-weight: 500;
                color: coral;
                margin-right: 1rem;
            }

            .btn-delete{
                padding: 8px;
                border-radius: 6px;
                background-color: white;
                color: tomato;
                border: 2px solid tomato;

                font-size: 20px;
                font-weight: 500;

                transition:  .3s;
                
            }

            .btn-delete:hover{
                background-color: tomato;
                color: white;
                transition:  .3s;
            }
        }

    }

    .stripe-card {
        width: 300px;
        border: 1px solid grey;
    }
        .stripe-card.complete {
        border-color: green;
    }
</style>