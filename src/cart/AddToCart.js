import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "src/component/Header";
import Footer from "src/component/Footer";
import { addItemToCart, removeToCart ,getCartProducts} from "src/store/cart/cart.action";


const AddToCart = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(()=>{
    try{
      dispatch(getCartProducts());
    }catch(err){
      console.log(err);
    }
   
  },[])

  //INCREASE VALUE
  const increaseValue = (id, quantity, countStock) => {
    const newQty = quantity + 1;
    if (newQty > countStock) return;
    dispatch(addItemToCart(id, newQty));
  };

  //DECREASE VALUE
  const decreaseValue = (id, quantity) => {
    const newQty = quantity - 1;
    if (newQty < 1) return;
    dispatch(addItemToCart(id, newQty));
  };

  //remove item from cart
  const removeItemFromCart = (id) => {
    dispatch(removeToCart(id));
  };

  //go to checkout
  const goToCheckout = () => {
    history.push("/signin?redirect=shipping");
  };

  return (
    <>
      {/* HEADER */}
      <Header />
      <div className='container wrapper_add_to_Cart'>
        <div className='row'>
          <div className='col-sm-9'>
            {cartItems < 1 ? (
              <>
                <h2>Your cart is empty!</h2>
              </>
            ) : (
              cartItems.map((item) => (
                <div className='row_loop' key={item.product}>
                  <div className='colcart'>
                    <img src={item.image} alt={item.name} className='small' />
                  </div>

                  <div className='colcart'>
                    <h6>{item.name}</h6>
                  </div>

                  <div className='colcart'>
                    <div className='qty_and_addtocart'>
                      <div>
                        <div
                          onClick={() =>
                            decreaseValue(item.product, item.quantity)
                          }
                          className='value-button'
                          id='decrease'
                          value='Decrease Value'
                        >
                          -
                        </div>
                        <input
                          type='number'
                          id='number'
                          value={item.quantity}
                          readOnly
                        />
                        <div
                          onClick={() =>
                            increaseValue(
                              item.product,
                              item.quantity,
                              item.countStock
                            )
                          }
                          className='value-button'
                          id='increase'
                          value='Increase Value'
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='colcart'>
                    <h6>${(item.price * item.quantity).toFixed(2)}</h6>
                  </div>

                  <div className='colcart'>
                    <h6>
                      <i
                        onClick={() => removeItemFromCart(item.product)}
                        style={{ color: "red", cursor: "pointer" }}
                        className='fa fa-trash'
                        aria-hidden='true'
                      ></i>
                    </h6>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className='col-sm-3'>
            <div className='order_sumary'>
              <div className='title_summary'>
                <h3 style={{ color: "#0e6098" }}>Order Summary:</h3>
              </div>
              <div className='subtotal'>
                <h5>
                  Subtotal {cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                  Unit(s)
                </h5>
                <h5>
                  Total Price: $
                  {cartItems
                    .reduce((a, c) => a + c.price * c.quantity, 0)
                    .toFixed(2)}{" "}
                </h5>
              </div>
              <button
                disabled={cartItems.length === 0}
                onClick={goToCheckout}
                className='btn_checkout'
              >
                Proceed to Check out
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddToCart;
