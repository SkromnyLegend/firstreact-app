import React from 'react'
import Empty from '../../components/emty/Empty'
import CartProduct from '../../components/cart-product/CartProduct'


function Cart() {
  const cart = true
  return (
    <div className='container'>
 
     {
      !cart ?

      <Empty
       url="https://uzum.uz/static/img/shopocat.490a4a1.png"
       title="Savatda hozircha mahsulot yoʻq"
       desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
       btnTitel="Bosh sahifa"
       nav="/"
      /> :
      <CartProduct/>
     }
      
    </div>
  )
}

export default Cart