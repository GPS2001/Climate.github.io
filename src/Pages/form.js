import React, { useState } from "react";
import './animations/raining.css'

function Forms({ handleStateChange , curState}) {
  const handleChange = (e) => {
    const selected = e.target.value;
    console.log("selected: ", selected);
    handleStateChange(selected)
  };

  return (
    <div className="container pt-10" style={{marginTop: "200px"}}>
      <select
        className="myform"
        value={curState}
        onChange={(e) => handleChange(e)}>
        <option value="NoS">No selection</option>
        <option value="ab">Alberta</option>
        <option value="bc">British Columbia</option>
        <option value="mb">Manitoba</option>
        <option value="nb">New Brunswick</option>
        <option value="NL_graph">Newfoundland and Labrador</option>
        <option value="nt">North West Territories</option>
        <option value="ns">Nova Scotia</option>
        <option value="nu">Nunavut</option>
        <option value="on">Ontario</option>
        <option value="PE">Prince Edward Island</option>
        <option value="qc">Quebec</option>
        <option value="sk">Saskatchewan</option>
        <option value="yk">Yukon</option>
      </select>
    </div>
  );
}
export default Forms;