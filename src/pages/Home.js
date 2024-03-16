import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts, getAllProducts } from "../store/productSlice";
import Product from "../components/Product";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Home() {
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const videoRefs = useRef([]);
  const [sound, setSound] = useState(true);
  const [volume, setVolume] = useState(false);

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, []);

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
  }, [products]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  return (
    <Fragment>
      <Swiper
        className="swip"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        direction="vertical"
        mousewheel={true}
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide className="vid-card">
              <Product
                product={product}
                setVideoRef={handleVideoRef(index)}
                autoplay
                sound={sound}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

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

export default Home;
