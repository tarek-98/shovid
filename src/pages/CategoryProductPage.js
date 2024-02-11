import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProductsByCategory,
  fetchAsyncProductsOfCategory,
} from "../store/categorySlice";
import Product from "../components/Product";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

const CategoryProductPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoryProducts = useSelector(getAllProductsByCategory);
  const videoRefs = useRef([]);
  const [sound, setSound] = useState(true);
  const [volume, setVolume] = useState(false);

  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category));
  }, [dispatch, category]);

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
    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [categoryProducts]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  return (
    <Fragment>
      {categoryProducts.map((product) => {
        return (
          <Product
            product={product}
            setVideoRef={handleVideoRef(product.id)}
            autoplay
            sound={sound}
          />
        );
      })}
      <div className="volume">
        {volume ? (
          <FaVolumeHigh
            className="text-white fw-bold"
            onClick={() => {
              setSound(!sound);
              setVolume(!volume);
            }}
          />
        ) : (
          <FaVolumeXmark
            className="text-white fw-bold"
            onClick={() => {
              setSound(!sound);
              setVolume(!volume);
            }}
          />
        )}
      </div>
    </Fragment>
  );
};

export default CategoryProductPage;
