import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { IconButton } from "@mui/material";
import { useRef } from "react";

let clicked = false;

const Header = ({ paymentModalRef }) => {
  console.log("Header Re-renderring");

  const logoRef = useRef();
  const searchBoxRef = useRef();
  const searchBoxContainerRef = useRef();

  const searchButtonClickHandle = () => {
    if (clicked) {
      logoRef.current.style = "display:none;";
      searchBoxRef.current.style = "display:inline-block;";
      searchBoxContainerRef.current.style.backgroundColor = "#fdf3f3";
    } else {
      logoRef.current.style = "display:inline-block;";
      searchBoxRef.current.style = "display:none;";
      searchBoxContainerRef.current.style.backgroundColor = "inherit";
    }
  };

  return (
    <header className=" fixed top-0 left-0 z-[100] w-full p-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* header left */}
      <div className=" flex items-center">
        <IconButton sx={{ color: "red" }}>
          <MenuIcon
            sx={{
              color: "#c82196",
            }}
          />
        </IconButton>
        <h1
          ref={logoRef}
          style={{
            display:
              window.innerWidth < 640
                ? clicked
                  ? "none"
                  : "inline-block"
                : "inline-block",
          }}
          className=" ml-2 text-sm font-bold"
        >
          AUK <span className=" text-[#c82196]">DEV</span>
        </h1>
        <div
          ref={searchBoxContainerRef}
          style={{
            backgroundColor:
              window.innerWidth < 640
                ? clicked
                  ? "#fdf3f3"
                  : "inherit"
                : "#fdf3f3",
          }}
          className=" overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]"
        >
          <input
            ref={searchBoxRef}
            type="text"
            placeholder="Search"
            style={{
              display:
                window.innerWidth < 640
                  ? clicked
                    ? "inline-block"
                    : "none"
                  : "inline-block",
              transition: "all 400ms ease-in-out",
            }}
            className=" hidden sm:inline-block ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"
          />
          <IconButton
            onClick={() => {
              if (window.innerWidth < 640) {
                clicked = !clicked;
                searchButtonClickHandle();
              }
            }}
          >
            <SearchIcon
              sx={{
                color:
                  window.innerWidth < 640
                    ? clicked
                      ? "rgb(156 163 175)"
                      : "black"
                    : "rgb(156 163 175)",
              }}
            />
          </IconButton>
        </div>
      </div>
      {/* header right */}
      <IconButton
        onClick={() => {
          paymentModalRef.current.handleOpen();
        }}
      >
        <div className=" relative p-1">
          <ShoppingCartOutlinedIcon className=" text-black" />
          <div className=" absolute top-[2px] right-0 text-[7px] font-semibold text-white bg-black flex items-center justify-center w-3 h-3 rounded-full">
            2
          </div>
        </div>
      </IconButton>
    </header>
  );
};

export default Header;
