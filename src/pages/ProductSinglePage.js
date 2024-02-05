import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncProductSingle,
  getProductSingle,
} from "../store/productSlice";
import { useParams } from "react-router";
import Product from "../components/Product";

function Home() {
  const { id } = useParams();
  const singleProduct = useSelector(getProductSingle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));
  }, []);

  //ss
  const videoRefs = useRef([]);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8, // Adjust this value to change the scroll trigger point
    };

    // This function handles the intersection of videos
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoElement = entry.target;
          videoElement.play();
        } else {
          const videoElement = entry.target;
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // We observe each video reference to trigger play/pause
    // videoRefs.current.forEach((videoRef) => {
    //   observer.observe(videoRef);
    // });

    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [singleProduct]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };
  return (
    <div className="home">
      <div className="cat-products py-5 bg-whitesmoke">
        <div className="container">
          <div className="cat-products-content">
            <Product product={singleProduct} />;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
