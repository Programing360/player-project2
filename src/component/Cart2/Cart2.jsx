import BookMark from "../BookMark/BookMark";

const Cart2 = ({cartObj}) => {
    // console.log(cartObj)
    
    return (
        <div className="space-y-3">
            {/* <img src={author_img} alt="" /> */}
            <h2 className="text-3xl">cart: {cartObj.length}</h2>
            {
                cartObj.map((bookmark,idx) => <BookMark key={idx} bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};

export default Cart2;