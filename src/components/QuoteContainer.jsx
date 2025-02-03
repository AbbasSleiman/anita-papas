import QuoteTop from "/images/quote_top.png";
import QuoteBottom from "/images/quote_bottom.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useState } from "react";

const QuoteContainer = () => {
  
  const [quotes, setQuotes] = useState([
    "I know deep inside and no one can convince me otherwise that when I seek, I will find, when I dream, I will realize, if I fall, I will rise and if I fail, I will never give up!",
    "I know deep inside and no one can convince me otherwise that when I seek, I will find, when I dream, I will realize, if I fall, I will rise and if I fail, I will never give up!",
    "I know deep inside and no one can convince me otherwise that when I seek, I will find, when I dream, I will realize, if I fall, I will rise and if I fail, I will never give up!",
  ]);

  return (
    <div>
      <div className="px-5 space-y-8 md:hidden">
        <img src={QuoteTop} alt="quotes" className="w-6 m-auto" />
        <h3 className="text-center">
          Be at peace with yourself, mind and body. Be in touch with your
          innermost feelings.
        </h3>
        <img src={QuoteBottom} alt="quotes" className="w-6 m-auto" />
      </div>
      <div className="hidden md:block">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="quotes_swiper"
        >
          {quotes.length > 0 ? (
            quotes.map((quote) => (
              <SwiperSlide>
                <div className="flex flex-row items-start justify-center px-36">
                  <div className="w-24">
                    <img
                      src={QuoteTop}
                      alt="quote top"
                      className="w-24 object-contain"
                    />
                  </div>
                  <h3>{quote}</h3>
                  <div className="w-24">
                    <img
                      src={QuoteBottom}
                      alt="quote top"
                      className="w-24 object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>No Quotes</p>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default QuoteContainer;
