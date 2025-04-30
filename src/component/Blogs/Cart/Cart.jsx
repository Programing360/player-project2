import { useEffect, useState } from "react";
import Carts from "./Carts";
import Cart2 from "../../Cart2/Cart2";

const Cart = ({ handlePlayerBuy, cartObj }) => {
    const [cart, setCart] = useState([])
    // console.log(cartObj)


    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => {
                setCart(data)
                
            })
    }, [])

    const handleSeletedBtn = () => {
        const setData = []
        setCart(setData)
    }
    const handleAvailableBtn = () => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setCart(data))

    }
    return (
        <div>
            <div className='flex justify-between items-center mt-10'>
                {/* <h2 className='font-bold text-2xl'>{handleSeletedBtn ? '': ''}</h2> */}
                <h2 className='font-bold text-2xl'>{handleAvailableBtn ? 'Available Player': 'selected Player'}</h2>
                <div className='border-2 solid rounded-lg' >
                    <button className='outline-0 bor bgColor' onClick={handleAvailableBtn}>Available</button>
                    <button className="bgColors" onClick={handleSeletedBtn}>Selected({cartObj.length})</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    cart.map((cart2, idx) => <Carts key={idx} cart={cart2} cart1={cart} handlePlayerBuy={handlePlayerBuy}></Carts>)
                }
            </div>
            {handleSeletedBtn ? <Cart2 cartObj={cartObj}></Cart2> : '' }
        </div>
    );
};

export default Cart;