import React, { useState,useContext, useEffect } from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../GlobalContext";
const options = [
  {
    label: "Car/Jeep/Van",
    value: "Car/Jeep/Van",
  },
  {
    label: "LCV",
    value: "LCV",
  },
  {
    label: "Truck/Bus",
    value: "Truck/Bus",
  },
  {
    label: "Heavy vehicle",
    value: "Heavy vehicle",
  },
];

export default function TollForm({ toll, children, onClose }) {
  

  const { dispatch } = useContext(GlobalContext); 
  const [tollName, setTollname] = useState("");

  const [fair1, setFare1] = useState("");
  const [fair2, setFare2] = useState("");
  const [fair3, setFare3] = useState("");
  const [fair4, setFare4] = useState("");

  const [single1, setSingle1] = useState("");
  const [single2, setSingle2] = useState("");
  const [single3, setSingle3] = useState("");
  const [single4, setSingle4] = useState("");

  const [double1, setDouble1] = useState("");
  const [double2, setDouble2] = useState("");
  const [double3, setDouble3] = useState("");
  const [double4, setDouble4] = useState("");

  function fair1Update(e) {
    setFare1(e.target.value);
  }
  function fair2Update(e) {
    setFare2(e.target.value);
  }
  function fair3Update(e) {
    setFare3(e.target.value);
  }
  function fair4Update(e) {
    setFare4(e.target.value);
  }

  function single1Update(e) {
    setSingle1(e.target.value);
  }
  function single2Update(e) {
    setSingle2(e.target.value);
  }
  function single3Update(e) {
    setSingle3(e.target.value);
  }
  function single4Update(e) {
    setSingle4(e.target.value);
  }

  function double1Update(e) {
    setDouble1(e.target.value);
  }
  function double2Update(e) {
    setDouble2(e.target.value);
  }
  function double3Update(e) {
    setDouble3(e.target.value);
  }
  function double4Update(e) {
    setDouble4(e.target.value);
  }

  function tollNameUpdate(e) {
    setTollname(e.target.value);
  }

  // function getToll(e) {
  //   e.preventDefault();
  //   dispatch({ type: 'ADD_Toll', datas: { 
    
  //     tollName,

  //     fair1 ,
  //     single1,
  //     double1,

  //     fair2,
  //     single2,
  //     double2,
  //     fair3,
  //     single3,
  //     double3,

  //     fair4 ,
  //     single4 ,
  //     double4 ,
  //   } })
    
  // }
  // console.log("eeee",tollData)
  // console.log(tollName)
  if (!toll) return null;
  return (
    <div>
      <div className="vehicle-form-container">
        <div className="vehicle-form-card">
          <div style={{ justifyContent: "end", display: "flex" }}>
            <FontAwesomeIcon onClick={onClose} icon={faXmark} />
          </div>
          <p style={{ textAlign: "center" }}>Add new toll</p>
          <form 
          // onSubmit={getToll}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="label-text">
                Toll Name<abr title="required">*</abr>
              </label>
              <input
                className="input-field"
                placeholder="Enter toll name"
                type="text"
                value={tollName}
                onChange={tollNameUpdate}
                required
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <select
                  className="input-field"
                  value={fair1}
                  onChange={fair1Update}
                >
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
                <input
                  className="input-field"
                  placeholder="Single journey"
                  type="number"
                  value={single1}
                  onChange={single1Update}
                />
                <input
                  className="input-field"
                  placeholder="Return Journey"
                  type="number"
                  value={double1}
                  onChange={double1Update}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <select
                  className="input-field"
                  value={fair2}
                  onChange={fair2Update}
                >
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
                <input
                  className="input-field"
                  placeholder="Single journey"
                  type="number"
                  value={single2}
                  onChange={single2Update}
                />
                <input
                  className="input-field"
                  placeholder="Return Journey"
                  type="number"
                  value={double2}
                  onChange={double2Update}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <select
                  className="input-field"
                  value={fair3}
                  onChange={fair3Update}
                >
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
                <input
                  className="input-field"
                  placeholder="Single journey"
                  type="number"
                  value={single3}
                  onChange={single3Update}
                />
                <input
                  className="input-field"
                  placeholder="Return Journey"
                  type="number"
                  value={double3}
                  onChange={double3Update}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <select
                  className="input-field"
                  required
                  value={fair4}
                  onChange={fair4Update}
                >
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
                <input
                  className="input-field"
                  placeholder="Single journey"
                  type="number"
                  value={single4}
                  onChange={single4Update}
                />
                <input
                  className="input-field"
                  placeholder="Return Journey"
                  type="number"
                  value={double4}
                  onChange={double4Update}
                />
              </div>
            </div>

           <input className="btn-add" type="submit" value="Add Toll Details"/>
            {/* <button onClick={
            getTollDetails
            
            } className="btn-add">
              Add Toll Details
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}
