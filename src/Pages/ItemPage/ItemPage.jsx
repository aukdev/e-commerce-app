import { ListItemButton } from "@mui/material";
import { useRef } from "react";

const itemImageArr = [
  "https://wallpaperaccess.com/full/267434.jpg",
  "https://wallpaperaccess.com/full/267434.jpg",
  "https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg",
  "https://wallpaperaccess.com/full/267434.jpg",
];

const ItemPage = () => {
  console.log("item page reRender");
  const mainImageRef = useRef();
  const subImagesRef = useRef([]);

  return (
    <div className=" px-5 py-[100px] sm:px-12 md:px-[120px] w-full h-screen overflow-y-scroll">
      {/* Main Title */}
      <h1 className=" text-lg font-bold px-3 mb-7">Item Title</h1>
      {/* Main Image */}
      <img
        ref={mainImageRef}
        src={itemImageArr[0]}
        alt="main item"
        className=" w-full object-contain rounded-md"
      />
      {/* Item Imagers */}
      <div className=" w-full mt-5 grid grid-cols-4 text-center grid-rows-1 gap-3">
        {itemImageArr.map((ele, index) => (
          <ListItemButton
            key={index}
            sx={{
              padding: "0",
              borderRadius: "2px",
            }}
            onClick={() => {
              subImagesRef.current[index].style.border = "2px solid gold";
              mainImageRef.current.src = subImagesRef.current[index].src;
              for (let i = 0; i < itemImageArr.length; i++) {
                if (i !== index) {
                  subImagesRef.current[i].style.border = "none";
                }
              }
            }}
          >
            <img
              ref={(refEle) => (subImagesRef.current[index] = refEle)}
              name={`item image ref : ${index}`}
              src={ele}
              alt={ele}
              className=" w-full object-contain rounded-sm"
            />
          </ListItemButton>
        ))}
      </div>
      {/* seller details */}
    </div>
  );
};

export default ItemPage;
