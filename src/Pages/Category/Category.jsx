import { ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getDataFromCollection from "../../Utils/dataFetch/getDataFromCollection";
import Loading from "../../components/Loading/Loading";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getDataFromCollection("category", setCategoryData);
  }, []);

  console.log("category componet data ", categoryData);

  if (categoryData.length === 0) {
    return <Loading />;
  }

  return (
    <div className=" px-5 py-[100px] sm:px-12 md:px-[120px] w-full h-screen overflow-y-scroll">
      <section
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        className=" w-full p-2"
      >
        <h1 className=" text-lg font-bold mt-2 ml-2 mb-3">Main Categories</h1>
        <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-[auto] gap-5">
          {categoryData?.map(({ img, title, categoryId }, index) => (
            <CategoryUnitItems
              key={index}
              imageUrl={img}
              title={title}
              categoryId={categoryId}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;

const CategoryUnitItems = ({ imageUrl, title, categoryId }) => (
  <Link to={`/category/${categoryId}`}>
    {/* ${categoryId} */}
    <ListItemButton
      sx={{
        padding: 0,
        margin: 0,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "6px",
      }}
    >
      <div className=" m-1 w-full py-6 px-3 rounded-md flex flex-col items-center">
        <img
          src={imageUrl}
          alt={title}
          className=" rounded-full w-[50px] h-[50px]"
        />
        <h2 className=" text-[10px] sm:text-sm text-black mt-3 font-bold">
          {title}
        </h2>
      </div>
    </ListItemButton>
  </Link>
);
