import React,{useState,useContext} from "react";
import "../../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
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
  const tollList = [
    {
      label: "All",
      value: "Car/Jeep/Van",
    },
    {
      label: "Kappalur",
      value: "Kappalur",
    },
    {
      label: "Chengalpattu",
      value: "Chengalpattu",
    },
    {
      label: "Krishnagiri",
      value: "Krishnagiri",
    },
  ];


export default function VehicleForm({vehicle,children,onClose}) {
  // const {
  //   setCartUpdate,
  //   setCartApi

  const {  setUserGender } = useContext(GlobalContext); 

  // } = useContext(GlobalContext);
  const [selectToll, setselecttoll] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleNum, setVehicleNum] = useState('');
  const [tariff, setTariff] = useState('');


    if (!vehicle) return null;
   
    function selecttollUpdate(e) {
      setselecttoll(e.target.value)
  }

    function vehicleTypeUpdate(e) {
      setVehicleType(e.target.value)
  }


    function vehicleNumUpdate(e) {
      setVehicleNum(e.target.value)
  }
  function tariffUpdate(e) {
    setTariff(e.target.value)
  }
console.log("=====>",vehicleType, vehicleNum,tariff)

    function getAlldetails(e) {
      e.preventDefault();
      setUserGender( { 
    
      selectToll,

      vehicleType,
      vehicleNum,

      tariff,
      
     })
  }
  function getData() {
    console.log(localStorage.getItem('selecttoll'))
    console.log(localStorage.getItem('vehicleType'))
    console.log(localStorage.getItem('vehicleNum'));
    console.log(localStorage.getItem('tariff'))
   
}


    return(
        <div>
            <div className="vehicle-form-container">
               <div className="vehicle-form-two-card " >
              <div style={{justifyContent:"end",display:"flex"}}>
               <FontAwesomeIcon  onClick={onClose} icon={faXmark} />
               </div>
                <p style={{textAlign:"center"}}>Add new entry</p>
                <form onSubmit={getAlldetails}>
                   <div style={{display:"flex",flexDirection:"column",marginBottom:"18px"}}>
                    <label className="label-text">
                        Select toll Name<abr title="required">*</abr>
                    </label>
                    <select className="input-field" required  value={selectToll}  onChange={selecttollUpdate}> 
                        
           
            {tollList.map((option) => (
               
              <option value={option.value}>{option.label}</option>
             
            ))}
           
          </select>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"18px"}}>
                    <label className="label-text">
                        Select vehicle type<abr title="required">*</abr>
                    </label>
                    <select className="input-field" value={vehicleType} onChange={vehicleTypeUpdate}>
                        
           
            {options.map((option) => (
               
              <option value={option.value}>{option.label}</option>
             
            ))}
           
          </select>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"18px"}}>
                    <label className="label-text"  required>
                     Vehicle Number<abr title="required">*</abr>
                    </label>
                    <input className="input-field" value={vehicleNum} onChange={vehicleNumUpdate} placeholder="Enter login id" type="text" required/>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"18px"}}>
                    <label className="label-text">
                      Tariff <abr title="required">*</abr>
                    </label>
                    <input className="input-field" placeholder="Tariff amount" value={tariff} onChange={tariffUpdate}  type="number" required/>
                    </div>
                  
                    <input   type="submit" className="btn-add" style={{width:"19rem"}}
                        Add Vehicle Entry
                    />
                   
                </form>
              
                </div>
            </div>
            
           
        </div>
    )
}
 