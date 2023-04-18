import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Mousewheel, Pagination } from "swiper";
import { Rating } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./style.css";

const productArr = [
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    price: "100",
    productTitle:
      "product title 1 product title 1 product title 1product title 1 product title 1",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    price: "100",
    productTitle: "product title 2",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    price: "100",
    productTitle: "product title 3",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    price: "100",
    productTitle: "product title 4",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    price: "100",
    productTitle: "product title 5",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    price: "100",
    productTitle: "product title 6",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    price: "100",
    productTitle: "product title 7",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    price: "100",
    productTitle: "product title 8",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    price: "100",
    productTitle: "product title 9",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    price: "100",
    productTitle: "product title 10",
  },
];
const Product = ({ title }) => {
  return (
    <section
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      className=" w-full mt-6 p-2 md:mb-10"
    >
      <h1 className=" text-lg font-bold mt-2 ml-2 mb-3">{title}</h1>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Grid, Pagination, Mousewheel]}
      >
        {productArr.map(({ imageUrl, price, productTitle }, index) => (
          <SwiperSlide key={index} className={`hover:opacity-60`}>
            <ProductUnit
              imageUrl={imageUrl}
              price={price}
              productTitle={productTitle}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;

const ProductUnit = ({ imageUrl, price, productTitle, id }) => (
  <div className=" w-full h-full relative mb-5 pb-4">
    <img
      src={imageUrl}
      alt={`product_unit_${id}`}
      className=" w-full object-contain"
    />
    <div className=" px-1 sm:px-2">
      <h3 className=" text-xs sm:text-sm md:text-lg text-justify font-semibold text-stone-900">
        {String(productTitle).substring(0, 49)}
        {String(productTitle).length > 49 ? "..." : null}
      </h3>
      <Rating
        name={imageUrl}
        value={3.5}
        precision={0.1}
        size="small"
        readOnly
      />
      <h3 className=" text-stone-900 font-bold text-lg">Rs.{price}/-</h3>
    </div>
  </div>
);
