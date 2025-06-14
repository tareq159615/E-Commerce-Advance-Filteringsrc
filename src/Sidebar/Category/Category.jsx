import React from "react";
import "./Category.css"; // Ensure you have the correct path to your CSS file
import Input from "../../components/Input";
function Category({ handleChange }) {
  return (
    <>
      <div>
        <h2 className="sidebar-label-container">Category</h2>
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test1" />
            <span className="checkmark"></span>All
          </label>
          <Input
            handleChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="test1"
          />
          <Input
            handleChange={handleChange}
            value="flats"
            title="Flats"
            name="test1"
          />
          <Input
            handleChange={handleChange}
            value="sandals"
            title="Sandals"
            name="test1"
          />
          <Input
            handleChange={handleChange}
            value="heels"
            title="Heels"
            name="test1"
          />
        </div>
      </div>
    </>
  );
}

export default Category;
