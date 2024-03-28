
// import Rating from '@mui/icons-material/StarOutline';
export default function Products({ img, name, rating, originalPrice, deliveryTime, discountedPrice }) {
    return (
        <section>
            <div className="cards-container">
                <div className="card1">
                    <div className="card-img">
                        <img src={img} />
                    </div>
                    <div className="card-content">
                        <h3><b><i>{name}</i></b></h3>
                        {/* <Rating
                            name="read-only"
                            value={rating}
                            emptyIcon={
                                <StarIcon
                                    style={{ opacity: 0.55, color: "white" }}
                                    fontSize="inherit"
                                />
                            }
                            readOnly
                        /> */}
                       
                            <p><b>{discountedPrice}$</b><del className="originalPrice">{originalPrice}</del></p>
                           
                           

                    </div>
                    <button className='card-btn'>В корзину</button> 
                    <p className="deliveryTime">{deliveryTime}</p>
                </div>
            </div>
        </section>
    )
}



