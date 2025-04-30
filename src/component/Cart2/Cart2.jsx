import BookMark from "../BookMark/BookMark";

const Cart2 = ({ cartObj }) => {
    // console.log(cartObj)

    return (
        <div className="space-y-3 bg-amber-200 border-2 rounded-lg solid w-full h-3/6 p-5 mt-6">
            {/* <img src={author_img} alt="" /> */}
            <h2 className="text-3xl">Selected: ({cartObj.length}/8)</h2>
            <div className="border-2 solid rounded-lg bg-fuchsia-300 w-full h-72 p-8 overflow-scroll">
                {
                    cartObj.map((bookmark, idx) => <BookMark key={idx} bookmark={bookmark}></BookMark>)
                }
            </div>
        </div>
    );
};

export default Cart2;