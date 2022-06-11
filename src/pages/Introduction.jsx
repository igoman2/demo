import React from "react";
import Dropdown from "../components/Dropdown";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="content">
      <div></div>
      <Dropdown />
      <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </div>
  );
};

export default Introduction;
