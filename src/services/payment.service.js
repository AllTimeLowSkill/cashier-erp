import { request } from './api.service'

const getPaymentIntent = data => request({ url: 'payment', method: 'post', data })

export {
    getPaymentIntent
}