import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions/actions";
import GeneralCategory from "./GeneralCategory";
import LoaderGeneral from "../../LoaderGeneral/LoaderGeneral";

const CatHome = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-center" style={{ color: " #1F1F1F" }}>
        Categories
      </h2>
      <div className="container  h-100">
        {categories.length > 0 ? (
          <div className="row">
            {categories.map((cat) => (
              <div
                className="col-md-4 d-flex justify-content-evenly"
                key={cat.id}
              >
                <GeneralCategory name={cat.typecategory} id={cat.id} />
              </div>
            ))}
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <LoaderGeneral />
          </div>
        )}
      </div>
    </div>
  );
};

export default CatHome;
