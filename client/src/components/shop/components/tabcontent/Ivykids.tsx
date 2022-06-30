import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { height } from "@mui/system";
import Button from "../themes/Button/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ivykidsImage } from "../data/ivymodaData";
const Ivykids = () => {
  return (
    <div className="ivymoda-style">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {ivykidsImage.map((item, index) => {
          return (
            <SwiperSlide key={item.imgUrl}>
              <div className="ivymoda-style">
                <div className="product">
                  <div className="product-img">
                    <img src={item.imgUrl} alt="Product" />
                  </div>
                  <div className="product-color">
                    <div
                      style={{ background: "#dc3545" }}
                      className="color-selector"
                    ></div>
                    <div
                      style={{ background: "#343a40" }}
                      className="color-selector"
                    >
                      <DoneOutlinedIcon fontSize="small" />
                    </div>
                  </div>
                  <div className="product-name">Quần Sooc Họa Tiết Kẻ</div>
                  <div className="product-price">790.000đ</div>
                  <div className="add-to-cart" style={{}}>
                    <ShoppingBagOutlinedIcon sx={{ color: "#c4c3c3" }} />
                  </div>

                  <div className="infor-product">
                    <p className="infor-status">NEW</p>
                    <div className="infor-img">
                      <img
                        src="https://pubcdn2.ivymoda.com/images/bg_news.png"
                        alt="tag"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <p className="see-all">
        <Button buttonContent="Xem tất cả " bgColor="white" width="100px" />
      </p>
    </div>
  );
};
export default Ivykids;
