import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Header from "src/component/Header";
import Footer from "../component/Footer";
import { addItemToCart } from "src/store/cart/cart.action";
import Loading from "../component/Loading";
import Rating from "../component/Rating";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ViewProduct = ({ match, history }) => {
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState(1);
  const {
    title,
    price,
    description,
    status,
    discount,
    size,
    color,
    countStock,
    reviews,
    numReviews,
    avatar,
    _id,
  } = product;
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/products/${match.params.productid}`)
      .then((res) => {
        setProduct(res.data.data);
        setLoading(false);
      });
    console.log("done ")
  }, [numReviews]);
  console.log(product);

  const handleClickCard = () => {
    dispatch(addItemToCart(match.params.productid, qty));
    history.push("/cart");
  };

  //INCREASE VALUE
  const increaseValue = () => {
    const count = Number(document.getElementById("number").value);
    if (count >= countStock) return;
    const quantity = count + 1;
    setQty(quantity);
  };

  //DECREASE VALUE
  const decreaseValue = () => {
    const count = Number(document.getElementById("number").value);
    if (count <= 1) return;
    const quantity = count - 1;
    setQty(quantity);
  };

  // submit rating
  const submitRating = async (e) => {
    e.preventDefault();
    // try {
    //     const {data} = axios.post(`/api/product/${_id}/reviews`, {rating, comment});
    //     console.log(data)
    //     if  (data.status === 404){
    //         toast.error("you already add review!")
    //     }
    //    toast.success("review added")
    //         setComment('');
    //         setRating(0)

    //     console.log(data)
    // } catch (error) {
    //    //console.log("submit error", error.response.data.message)
    //    //toast.error(error.response.data.error)
    //   console.log("error resp", error.response.data.error)
    // }
    axios
      .post(`/api/product/${_id}/reviews`, { rating, comment })
      .then((res) => {
        console.log("res review", res);
        toast.success("review added");
        setComment("");
        setRating(0);
      })
      .catch((error) => {
        console.log("error review", error.response.data.error);
        toast.error(error.response.data.error);
      });
  };

  useEffect(() => { }, [numReviews]);

  //Chose color
  const [colorChose, setColorChose] = useState("")
  function handleChoseColor(e) {
    e.target.classList.toggle("color-item-chose");
    document.querySelectorAll('[color]')

  }
  return (
    <>
      <Header></Header>
      <div className='container single_product'>
        {false ? (
          <Loading />
        ) : (
          <div className='row'>
            <div className='col-sm-6 '>
              <img style={{ width: "100%" }} src="https://traffic-edge07.cdn.vncdn.io/nvn/ncdn/store/662/ps/20220711/GN0153__2_.jpg" alt="" />
            </div>
            <div className='col-sm-6'>
              <div className='product_desc_wrapper'>
                <div className='product_title'>
                  <h1>{title}</h1>

                  <hr />
                  <h2>${price}</h2>
                  <h4>-{discount}%</h4>
                </div>

                <div className='qty_and_addtocart'>
                  <div className="qty">
                    <div
                      onClick={decreaseValue}
                      class='value-button'
                      id='decrease'
                      value='Decrease Value'
                    >
                      -
                    </div>
                    <input type='number' id='number' value={qty} readOnly />
                    <div
                      onClick={increaseValue}
                      class='value-button'
                      id='increase'
                      value='Increase Value'
                    >
                      +
                    </div>
                  </div>
                  <div className="product-color">
                    <h3>Màu sắc</h3>
                    <div className="product-color-list">
                      <div
                        className="product-color-item color-item-chose"
                        style={{ backgroundColor: color }}
                        onClick={handleChoseColor}
                        name="color"
                      >
                      </div>
                      <div
                        className="product-color-item"
                        style={{ backgroundColor: color }}
                        onClick={handleChoseColor}
                        name="color"
                      >
                      </div>
                    </div>
                  </div>
                  <div className="product-size">

                    <h3>Size</h3>
                    <div className="product-size-list">
                      <div
                        className="product-size-item size-item-chose"
                      >
                        M
                      </div>
                      <div
                        className="product-size-item"
                      >
                        L
                      </div>
                      <div
                        className="product-size-item"
                      >
                        XL
                      </div>
                    </div>
                  </div>
                  <button
                    // style={{ display: countStock ? "block" : "none" }}
                    onClick={handleClickCard}
                    className='addtocart'
                  >
                    Add to cart
                  </button>
                </div>
                <div className='stock'>
                  <hr />
                  <h6>
                    Status:{" "}
                    {status}
                  </h6>
                </div>

                <hr />
                <div className='desc'>
                  <h2>Description</h2>
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 '>
              <div className='img_div'>
                <img
                  className='img-fluid'
                  src={avatar ? avatar : ""}
                  alt={title}
                />
                <div className='review' style={{ paddingTop: "10px" }}>
                  <h4>REVIEWS</h4>

                  {reviews && reviews.length === 0 && (
                    <>
                      <div
                        class='alert alert-warning alert_warning_custom'
                        role='alert'
                        data-mdb-color='warning'
                      >
                        {" "}
                        No review added yet{" "}
                      </div>
                    </>
                  )}

                  <div className='review_loop'>
                    {reviews &&
                      reviews.map((review) => (
                        <ul className='review_list'>
                          <li>
                            <strong>{review.name}</strong>
                          </li>
                          <li>
                            <Rating value={review.rating} />
                          </li>
                          <li>
                            <strong>
                              {new Date(review.createdAt).toLocaleDateString()}
                            </strong>
                          </li>
                          <li>
                            <p>{review.comment}</p>
                          </li>
                        </ul>
                      ))}
                    <hr />
                    <div className='review_comment'>
                      {isAuthenticated ? (
                        <>
                          <form
                            className='col-sm-6  pt-5'
                            onSubmit={submitRating}
                          >
                            <h4>Leave a review</h4>
                            <div className='mb-2'>
                              <select
                                class='mdb-select'
                                onChange={(e) => setRating(e.target.value)}
                                value={rating}
                                required
                              >
                                <option value='' selected>
                                  Choose your rating
                                </option>
                                <option value='1'> 1 - Poor</option>
                                <option value='2'> 2 - Fair</option>
                                <option value='3'> 3 - Good</option>
                                <option value='4'> 4 - Very Good</option>
                                <option value='5'> 5 - Excellent</option>
                              </select>
                            </div>
                            <div className='mb-4'>
                              <label
                                className='form-label'
                                htmlFor='form4Example1'
                              >
                                Leave a comment
                              </label>
                              <textarea
                                required
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className='form-control'
                                name=''
                                id=''
                                cols='100'
                                rows='3'
                                placeholder='Comment...'
                              ></textarea>
                            </div>
                            <button
                              type='submit'
                              className='btn btn-primary btn-block mb-4'
                            >
                              Add review
                            </button>
                          </form>
                        </>
                      ) : (
                        <>
                          Please <Link to={"/signin"}>Sign In</Link> to leave a
                          review
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ViewProduct;
