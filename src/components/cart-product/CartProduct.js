import React, {useState} from 'react'
import "./Card1122.css"
import { PRODUCTS} from "../../static"
import { FaTrash } from "react-icons/fa";
function CartProduct() {
    const [state, setState] = useState("")
    const [state2, setState2] = useState("")
    const [state3, setState3] = useState("")
    const [state4, setState4] = useState("")
  return (
    <div className='card__wrapper'>
        <div className="card-prod">
            {
                PRODUCTS?.map(el =><div key={el.id} className='cart__item'>
                     <div className='cart_item_left'>
                    <img src={el.url} width={80} alt="" />
                    <div>
                      <h4>{el.title}</h4>
                      <p>Ktegoriya: {el.category}</p>

                        </div> 
                        </div>
                            <div className="cart_item_right">
                            <div className="cart__counter">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <div>
                                <button className='card__trash'> <FaTrash/> </button>
                                <h3>{el.price?.brm()} so'm</h3>
                            </div>

                     </div>
                </div>)
             
            }
        </div>
        <div className="card__regis">
            <input 
            value={state}
            onChange={(e) => setState(e.target.value) }
             type="text" placeholder=' Toliq ismngiz kiriting ' />
            <input 
          value={state2}
          onChange={(a) => setState2(a.target.value)}
             type="text" placeholder=' +998 00-000-00-00 ' />
            <input  
            value={state3}
            onChange={(b) => setState3(b.target.value)}
           
             type="text" placeholder=' Manzilingiz ' />
            <input 
            value={state4}
            onChange={(d) => setState4(d.target.value)}
           
             type="text" placeholder=' Habar yuborish ' />
             
             <p>Umumiy Narx</p>
             <button className='inp__btn'>Rasmiylashtirishga o'tish</button>
             
        </div>
    </div>
  )
}

export default CartProduct