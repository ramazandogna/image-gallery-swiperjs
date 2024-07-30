import { useState } from "react";
//Data
import { images } from "./data/Images";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { MdiStar } from "./assets/icons/star";
import { LoveEmpty, LoveFill } from "./assets/icons/love";
import BlurHash from "./components/blurhash";

function App() {
  const [like, setLike] = useState(false);
  return (
    <div className="fixed inset-0 text-black bg-white">
      <div className="flex justify-center fixed left-47px right-47px top-50%  -translate-y-50% ">
        <div className="gradient-bg absolute -top-50px h-full bottom-50px w-full"></div>
        <div className="absolute h-62px flex items-center justify-end px-20px -top-62px left-0 right-0">
          <span className="flex mt-16px items-center cursor-pointer max-h-36px hover:bg-white  pr-12px pl-10px rounded-20px transition-all">
            Tüm Ürünler!
          </span>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={32}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            modifier: 2.5,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
        >
          {images.map((image) => (
            <SwiperSlide
              className="w-212px relative cursor-pointer shadow-md transition-all hover:-translate-y-1px hover:shadow-2xl rounded hover:[border:1px_solid_#00000035] [border:1px_solid_#00000020] bg-white h-350px"
              key={image.id}
            >
              <div
                onClick={() => setLike(!like)}
                className="w-32px shadow-2xl h-32px rounded-full transition-all text-#242424 duration-400 hover:text-blue flex items-center justify-center bg-white absolute top-10px right-10px z-999999 cursor-pointer"
              >
                {like ? (
                  <LoveEmpty className="w-24px h-24px  " />
                ) : (
                  <LoveFill className="w-24px h-24px  text-blue" />
                )}
              </div>
              <div className="w-full bg-#e6e6e6 h-221px flex rounded-t items-center justify-center overflow-hidden">
                <BlurHash src={image.url} alt={image.title} hash={image.hash} />
              </div>
              <div className="flex px-10px flex-col">
                <div className="  my-10px bg-opacity-50 text-#242424  ">
                  <div className="text-14px font-bold">{image.title}</div>
                  <div className="flex items-center justify-start">
                    <div className="text-14px mr-4px">5.0</div>
                    <MdiStar className="text-amber" />
                    <MdiStar className="text-amber" />
                    <MdiStar className="text-amber" />
                    <MdiStar className="text-amber" />
                    <MdiStar className="text-amber" />
                    <div className="text-#999999 text-9px ml-4px">(21992)</div>
                  </div>
                </div>
                <div className="mb-10px text-blue flex items-center text-14px h-36px items-center">
                  599 TL
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
