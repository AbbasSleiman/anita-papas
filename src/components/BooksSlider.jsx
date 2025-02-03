import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import BookBox from "./ui/BookBox";

const BooksSlider = () => {
  // array of objects containing books info
  // can be fetched from an API
  const [imagesSrcs, setImagesSrcs] = useState([
    {
      title: "The Positive You",
      src: "/images/the-positive-you-front.png",
    },
    {
      title: "The Positive Us",
      src: "/images/the-positive-us-front.png",
    },
    {
      title: "Go For It",
      src: "/images/go-for-it-front.png",
    },
    {
      title: "Breaking Not Broken",
      src: "/images/breaking-not-broken-front.png",
    },
    {
      title: "The Positive Us",
      src: "/images/the-positive-us-front.png",
    },
    {
      title: "The Positive You",
      src: "/images/the-positive-you-front.png",
    },
  ]);

  return (
    <div className="">
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          centeredSlides={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {imagesSrcs.length > 0 ? (
            imagesSrcs.map((book) => (
              <SwiperSlide>
                <BookBox title={book.title} src={book.src} />
              </SwiperSlide>
            ))
          ) : (
            <p>Please Provide Books</p>
          )}
        </Swiper>
      </div>
      {/* for bigger screens */}
      <div className="hidden md:block">
        <Swiper
          slidesPerView={3}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {imagesSrcs.length > 0 ? (
            imagesSrcs.map((book) => (
              <SwiperSlide>
                <BookBox title={book.title} src={book.src} />
              </SwiperSlide>
            ))
          ) : (
            <p>Please Provide Books</p>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default BooksSlider;
