import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <h1 className="justify-center">Categories</h1>
      <div className="categories">

        {/* LEFT COLUMN */}
        <div className="col">

          {/* SALE → Category ID = 5 */}
          <div className="row">
            <img
              src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link className="link" to="/products?category=5">
                Sale
              </Link>
            </button>
          </div>

          {/* WOMEN → Category ID = 2 */}
          <div className="row">
            <img
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products?category=2" className="link">
                Women
              </Link>
            </button>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="col">
          {/* NEW SEASON → Kids (Category ID = 3) */}
          <div className="row">
            <img
              src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products?category=3" className="link">
                New Season
              </Link>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col col-l">
          <div className="row">

            {/* MEN → Category ID = 1 */}
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <button>
                  <Link to="/products?category=1" className="link">
                    Men
                  </Link>
                </button>
              </div>
            </div>

            {/* ACCESSORIES → Category ID = 6 */}
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <button>
                  <Link to="/products?category=6" className="link">
                    Accessories
                  </Link>
                </button>
              </div>
            </div>

          </div>

          {/* SHOES → Category ID = 4 */}
          <div className="row">
            <img
              src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products?category=4" className="link">
                Shoes
              </Link>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Categories;
