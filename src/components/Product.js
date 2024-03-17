import React, { useEffect, useRef, useState } from "react";
import "./product.css";
import "./singleProduct.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Swal from "sweetalert2";
import {
  FaCheck,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Comments from "./comments/Comments";
import { addToFav, removeFromFav } from "../store/favorite-slice";
import { addToCart } from "../store/cartSlice";

function Product({ product, setVideoRef, autoplay, sound }) {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [option, setOption] = useState(false);
  const [addcart, setAddcart] = useState(false);
  const [social, setSocial] = useState(false);
  const [des, setDes] = useState(false);
  const [img, setImg] = useState(false);
  const [comment, setComment] = useState(false);
  const [liked, setLiked] = useState(false);
  const [changeBackground, setChangeBackground] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [discount, setdiscount] = useState(false);

  useEffect(() => {
    if (product.discount > 0) {
      setdiscount(true);
    }
  }, []);

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product.stock) tempQty = product.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  //handle size
  const data = [41, 42, 43];
  const [toggleState, setToggleState] = useState(
    data.map((siz) => {
      return siz;
    })
  );

  const addToCartHandler = (product) => {
    // - product.price * (product.discountPercentage / 100);
    let discountedPrice = product.unit_price - product.discount;
    let totalPrice = quantity * discountedPrice;
    let productColor = product.images[changeBackground];
    let productWeight = product.unit_price; //edit

    dispatch(
      addToCart({
        ...product,
        quantity: quantity,
        totalPrice,
        size: toggleState,
        discountedPrice,
        productColor,
        productWeight,
      })
    );
  };
  function disableOption() {
    setDes(false);
    setImg(false);
    setOption(false);
    setSocial(false);
    setComment(false);
  }
  function desToggel() {
    setDes((des) => !des);
    setImg(false);
    setOption(false);
    setSocial(false);
  }
  function desToggel2() {
    setImg((img) => !img);
    setDes(false);
    setOption(false);
    setSocial(false);
  }
  const handleCart = () => {
    setTimeout(() => {
      setAddcart(false);
    }, 2000);
  };

  // Function to convert likes count to a number
  const parseLikesCount = (count) => {
    if (typeof count === "string") {
      if (count.endsWith("K")) {
        return parseFloat(count) * 1000;
      }
      return parseInt(count);
    }
    return count;
  };

  // Function to format likes count
  const formatLikesCount = (count) => {
    if (count >= 10000) {
      return (count / 1000).toFixed(1) + "K";
    }
    return count;
  };

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (autoplay) {
      videoRef.current.play();
    }
  }, [autoplay]);

  function onVideoPress() {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  useEffect(() => {
    if (comment || img || des || option || social) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  function sweetAlertAdd() {
    Swal.fire({
      title: "تم اضافة المنتج بنجاح",
      icon: "success",
      confirmButtonText: "فهمت",
    });
  }

  const img_url =
    "https://gomla-wbs.el-programmer.com/storage/app/public/product";
  return (
    <div className="content">
      <div className="card-content" onClick={() => disableOption()}>
        <video
          onClick={() => onVideoPress()}
          id={`vdo${product.id}`}
          className="player"
          ref={(ref) => {
            videoRef.current = ref;
            setVideoRef(ref);
          }}
          loop
          defaultmuted
          data-wf-ignore="true"
          data-object-fit="cover"
          playsinline
          inline={true}
          preload="auto"
          autoPlay
          muted={sound}
          mediaGroup="video"
          controls={true}
        >
          <source src={product.video_url} type="video/mp4" />
        </video>
      </div>
      <div className="sidebar">
        <div className="price">
          <p className="m-0 text-white">{product.unit_price}</p>
          <span className="text-white">ر.س</span>
        </div>
        <div
          className="item"
          onClick={() => {
            liked
              ? dispatch(removeFromFav(product))
              : dispatch(addToFav(product));
          }}
        >
          <FaHeart
            style={{
              color: liked ? "#FF0000" : "white",
            }}
            onClick={handleLikeClick}
          />
          <span>
            {formatLikesCount(
              parseLikesCount(product.unit_price) + (liked ? 1 : 0)
            )}
          </span>
        </div>
        <div
          className="item"
          onClick={() => {
            setComment((comment) => !comment);
            setOption(false);
            setSocial(false);
          }}
        >
          <FaCommentDots />
          <span>80</span>
        </div>
        <div
          className="item"
          onClick={() => {
            setSocial((social) => !social);
            setOption(false);
          }}
        >
          <FaShare />
        </div>
      </div>
      <div className={option ? "option" : "hide-option"}>
        <div className="close" onClick={() => setOption((option) => !option)}>
          <IoIosCloseCircleOutline />
        </div>
        <div>
          <div className="product-img">
            <div className="product-img-zoom w-100 mb-2">
              <img
                src={`${img_url}/${product.images[changeBackground]}`}
                alt=""
                className="img-cover w-100 h-100"
              />
            </div>
            <div className="product-img-thumbs d-flex align-center">
              {product.images.map((image, index) => {
                return (
                  <div
                    className="thumb-item"
                    onClick={() => setChangeBackground(index)}
                  >
                    <img
                      src={`${img_url}/${image}`}
                      alt=""
                      className="img-cover w-100"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product-single-r mt-1" dir="rtl">
            <div className="product-details font-manrope">
              <div className="title mb-3">{product.name}</div>
              <div className="price mb-2">
                <div className="d-flex align-center">
                  <div className="new-price ms-3">
                    <span>السعر : </span>
                    <span>
                      {(product.unit_price - product.discount) * quantity} ر.س
                    </span>
                  </div>
                  {discount && (
                    <div className="old-price">{product.unit_price} ر.س</div>
                  )}
                </div>
              </div>
              <div className="qty align-center m-1 mb-2">
                <div className="qty-text mb-2 ms-2">الكمية :</div>
                <div className="qty-change d-flex">
                  <button
                    type="button"
                    className="qty-decrease d-flex justify-content-center"
                    onClick={() => decreaseQty()}
                  >
                    -
                  </button>
                  <div className="qty-value d-flex justify-content-center">
                    {quantity}
                  </div>
                  <button
                    type="button"
                    className="qty-increase d-flex justify-content-center"
                    onClick={() => increaseQty()}
                  >
                    +
                  </button>
                </div>
                {product.current_stock === 0 ? (
                  <div className="qty-error text-uppercase bg-danger text-white">
                    out of stock
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="size-opt d-flex">
                <div className="size-text mb-2 ms-2">المقاس :</div>
                <div className="size-change d-flex">
                  <ul className="size-list">
                    {data.map((siz) => {
                      return (
                        <li
                          className="list-item"
                          onClick={() => setToggleState(siz)}
                        >
                          <span
                            className={
                              toggleState === siz
                                ? "list-item-opt active"
                                : "list-item-opt"
                            }
                          >
                            {siz}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="send-cart text-center mt-1 text-white"
          onClick={() => {
            // setAddcart((addcart) => !addcart);
            handleCart();
            setOption((option) => !option);
            addToCartHandler(product);
            sweetAlertAdd();
          }}
        >
          اضف الي السلة
        </div>
      </div>
      <div className={addcart ? "added-cart" : "hide-cart"}>
        <FaCheck />
        <p className="mb-0 ms-2">Added Sucssesfully</p>
      </div>
      <div className={social ? "social" : "hidden"}>
        <div className="close" onClick={() => setSocial((social) => !social)}>
          <IoIosCloseCircleOutline />
        </div>
        <div className="links">
          <FaFacebook className="facebook" />
          <FaTiktok className="tiktok" />
          <FaSnapchat className="snapshat" />
          <FaInstagram className="instagram" />
          <FaTwitterSquare className="twitter" />
        </div>
      </div>
      <div className="description ps-2 pe-2">
        <div className="description-btn">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="product-name p-2">
                <p className="m-0">{product.name}</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="add-cart p-2">
                <p
                  className="m-0"
                  onClick={() => {
                    setOption((option) => !option);
                    setSocial(false);
                  }}
                >
                  أضف الي السلة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={comment ? "com" : "hide-comment"}>
        <div
          className="close"
          onClick={() => setComment((comment) => !comment)}
        >
          <IoIosCloseCircleOutline />
        </div>
        <div className="comm">
          <Comments
            product={product}
            commentsUrl="http://localhost:3004/comments"
            currentUserId="1"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
