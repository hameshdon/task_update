import React, { useState,useContext } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faL } from "@fortawesome/free-solid-svg-icons";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import TollForm from "./Forms/TollForm";
import VehicleForm from "./Forms/VehicleForm";
import { GlobalContext } from "../components/GlobalContext";
// import {Modal} from reactstrap
function TollViewPage() {
  const { data } = useContext(GlobalContext);

  const tollGetValue = Object.values(data);
  const [tollform, setTollForm] = useState(false);
  const [vehicleForm, setVehicleForm] = useState(false);
  const history = useNavigate();
  console.log("kkkkkkkk",tollGetValue[0])
  return (
    <>
    <div>
    {/* {tollGetValue.map((tollget) => (

                    <div value={tollget.value}>{tollget.single1},{tollget.single2}</div>
                  ))} */}
       <h1 className="main-layout">Toll Management Application</h1>
      <hr />

      <div style={{ display: "flex", marginTop: "27px" }}>
        <p className="toll-text" >Tollgate List </p>

        {/* <FontAwesomeIcon
          style={{ marginTop: "6px", marginRight: "14" }}
          icon={faFilter}
        /> */}
        <form>
          <input
            className="search-input"
            type="search"
            placeholder="Search a toll"
          />
        </form>

        <div style={{ marginLeft: "38rem" }}>
          <button className="add"  onClick={() => setVehicleForm(true)}>Add vehicle entry</button>
          <button className="add" onClick={() => setTollForm(true)}>
            Add new entry
          </button>
          

          <button className="add" onClick={() => history("/")}>Back to vehicle logs</button>
        </div>
      </div>

      <div className="vehicle-entry">
        <p style={{ paddingRight: "9rem" }}>TOLL NAME</p>
        <p>CAR/JEEP/VAN</p>
        <p>LCV</p>
        <p>TRUCK/BUS</p>
        <p>HEAVY VEHICLE</p>
      </div>
      
        
      {tollGetValue.map((tollget,index) => (
    
      <div className="vehicle-entry-data" >
      <div style={{display:"flex",flexDirection:"column"}}>

       <p>{tollget.tollName}</p>
       </div> 
        <p>{tollget.single1/tollget.double1}</p>
        <p>{tollget.single2/tollget.double2}</p>
        <p>{tollget.single3/tollget.double3}</p>
        <p>{tollget.single4/tollget.double4}</p>

</div>
))} 
       
     
     
        
    </div>
    <div>
        <TollForm toll={tollform} onClose={() =>setTollForm(false)}/>
    </div>
    <div>
        <VehicleForm vehicle={vehicleForm} onClose={() =>setVehicleForm(false)}/>
    </div>
    </>
  );
}
export default TollViewPage;
