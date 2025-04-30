import logo from '../../assets/logo.png'
import bgShadow from '../../assets/bg-shadow.png'
import banner from '../../assets/banner-main.png'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Cart from './Cart/Cart';

const Blogs = () => {
    const [money, setMoney] = useState(0)
    const [cartObj, setCartObj] = useState([])
    // console.log(cartObj)
    

    const handleCreditBtn = () => {
        const coin = 1000000
        const saveCart = coin + money;
        setMoney(saveCart)
        toast("Wow so easy!");

    }
    const handlePlayerBuy = (price, id) => {
        // console.log(id)

        if (money >= 1000000) {
            const saveMoney = money - price
            setMoney(saveMoney)
            const saveData = [...cartObj, id]
            // console.log(saveData)
            setCartObj(saveData)
        }
        else {
            toast("you do not have enough money!")
        }

        
    }

    return (
        <div>
            <div className='flex justify-between items-center border-b-2 pb-3 mb-15'>
                <img src={logo} alt="" />
                <div className='flex items-center gap-6 '>
                    <h2><a href="">Home</a></h2>
                    <h2><a href="">Fixture</a></h2>
                    <h2><a href="">Teams</a></h2>
                    <h2><a href="">Scheduls</a></h2>
                    <h2 className='border-2 solid rounded-lg bg-emerald-200 px-8 py-3'>{money} coin</h2>
                </div>
            </div>
            <div className='relative'>
                <img className='bg-cyan-300' src={bgShadow} alt="" />
                <div className='absolute w-full top-3 text-center'>
                    <img className='w-60 absolute left-2/5 md:w-42  ' src={banner} alt="" />
                    <div className='absolute w-full top-42 space-y-5'>
                        <h2 className='lg:text-5xl md:text-2xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                        <p>Beyond Boundaries Beyond Limits</p>
                        <button onClick={handleCreditBtn} className='bg-fuchsia-500 text-cyan-50 '>Claim Free Credit</button>
                        <ToastContainer position='top-center'></ToastContainer>
                    </div>
                </div>
            </div>
            {/* Button added */}
            <Cart handlePlayerBuy={handlePlayerBuy} cartObj={cartObj}></Cart>
            
        </div>
    );
};

export default Blogs;