import React, { useState } from "react";
import json from "../jsondata.json";
const Form = () => {
  const direction = json.direction.option;
  const justifyContent = json.justifyContent.option;
  const alignItems = json.alignItems.option;

  const [formdata, setFormdata] = useState({
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };


  return (
    <>
      <div className="cardss">
        <div
          className="displayCard"
          style={{
            flexDirection: formdata.direction || "initial",
            justifyContent: formdata.justifyContent || "initial",
            alignItems: formdata.alignItems || "initial",
          }}
        >
          <div className="box1">Cell 1</div>
          <div className="box2">Cell 2</div>
          <div className="box3">Cell 3</div>
        </div>
      </div>
      <form className="main">
        <div className="sub">
          <label>{json.direction.title}</label>
          <div className="cardradio">
            {direction.map((res) => (
              <div key={res.id}>
                <input
                  type={json.direction.typ}
                  name={json.direction.name}
                  value={res.id}
                  checked={formdata.direction === res.id}
                  onChange={handleChange}
                />
                <label htmlFor={res.id}>{res.label}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="sub">
          <label>{json.justifyContent.title}</label>
          <div className="cardradio">
            {justifyContent.map((res) => (
              <div className="radiobtn" key={res.id}>
                <input
                  type={json.justifyContent.type}
                  name={json.justifyContent.name}
                  value={res.id}
                  checked={formdata.justifyContent === res.id}
                  onChange={handleChange}
                />
                <label htmlFor={res.id}>{res.label}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="sub">
          <label htmlFor="">{json.alignItems.title}</label>
          <div className="cardradio">
            {alignItems.map((res) => (
              <div key={res.id}>
                <input
                  type={json.alignItems.type}
                  name={json.alignItems.name}
                  value={res.id}
                  checked={formdata.alignItems === res.id}
                  onChange={handleChange}
                />
                <label htmlFor={res.id}>{res.label}</label>
              </div>
            ))}
          </div>
        </div>
      </form>
      <div className="cardDisplay">
        <code>
          <div className="card">
            {`       
            <Grid        
              container         
              direction= ${formdata.direction}           
              justifyContent=${formdata.justifyContent} 
              alignItems=${formdata.alignItems} 
            >        
        `}
          </div>
        </code>
      </div>
    </>
  );
};

export default Form;
