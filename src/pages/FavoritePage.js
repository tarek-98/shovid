import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFavorites } from "../store/favorite-slice";
import { shopping_cart } from "../utils/images";
import { Link } from "react-router-dom";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import Favorite from "../components/Favorite";

function FavoritePage() {
  const favourite = useSelector(getAllFavorites);
  const videoRefs = useRef([]);
  const [sound, setSound] = useState(true);
  const [volume, setVolume] = useState(false);

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
  }, [favourite]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  if (favourite.length === 0) {
    return (
      <div className="home mt-5">
        <div className="container my-5 text-center d-flex justify-content-center align-content-center">
          <div className="empty-cart d-flex justify-content-center flex-column align-content-center text-center">
            <img src={shopping_cart} alt="" />
            <span className="fw-6 fs-15 text-gray">
              .قائمة الرغبات الخاصة بك فارغة
            </span>
            <Link
              to="/"
              className="shopping-btn fw-5 text-decoration-none text-center text-dark"
            >
              اذهب للتسوق الان
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      {favourite.map((fav, index) => {
        return (
          <Favorite
            product={fav}
            setVideoRef={handleVideoRef(index)}
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
}

export default FavoritePage;
