
import {​​​​​​​​​ environment }​​​​​​​​​ from'src/environments/environment'
 
export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:8080'
export const productsUrl = baseUrl + '/enableProducts'
export const cartUrl = baseUrl + '/carts'
export const wishlistUrl = baseUrl + '/wishlist'
export const productsUrlType = baseUrl + '/products'



