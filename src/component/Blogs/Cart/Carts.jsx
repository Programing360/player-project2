
const Carts = ({ cart,handlePlayerBuy } ) => {
    // console.log(cart1)
    const {cover,author, price} =cart
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{author}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <h2>Price:{price}</h2>
                    <div className="card-actions justify-end">
                        <button onClick={() => handlePlayerBuy(price, cart)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;