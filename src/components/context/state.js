import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
const initialState = {
  userGender: "male",
  userProfileImg: null,
  userName: null,
  userEmail: null,
  userCountry: null,
  userMeasurements: null,
  measurementUnit:"CM",
  operationStart:false,

  AddCartProducts:null,
  Address:null,
  Ondclocation:false,

  searchLocationApi:null,
  productApi:null,
  locationProductApi:false,

  cartUpdate:null,
  cartApi:false
  
};

let initialAppState;

try {
  if (localStorage.getItem("appState")) {
    if (
      Object.keys(JSON.parse(localStorage.getItem("appState"))).length !==
      Object.keys(initialState).length
    ) {
      localStorage.setItem("appState", JSON.stringify(initialState));
    }
  }
  let appStateFromLocalStorage = JSON.parse(localStorage.getItem("appState"));

  if (Object.keys(appStateFromLocalStorage).length > 0) {
    initialAppState = appStateFromLocalStorage;
  } else {
    initialAppState = initialState;
  }
} 


catch (error) {
  initialAppState = initialState;
}

export const GlobalContext = createContext(initialAppState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAppState);
  React.useEffect(() => {
    try {
      localStorage.setItem("appState", JSON.stringify(state));
    } catch (error) { }
  }, [state]);

  //Actions start

  function setUserGender(gender) {
    dispatch({
      type: "SET_USER_GENDER",
      payload: gender,
    });
  }

  function setUserProfileImage(url) {
    dispatch({
      type: "SET_USER_PROFILE_IMAGE",
      payload: url,
    });
  }

  function setUserName(name) {
    dispatch({
      type: "SET_USER_NAME",
      payload: name,
    });
  }

  function setUserEmail(email) {
    dispatch({
      type: "SET_USER_EMAIL",
      payload: email,
    });
  }

  function setUserCountry(country) {
    dispatch({
      type: "SET_USER_COUNTRY",
      payload: country,
    });
  }

  function setUserMeasurements(measurement) {
    dispatch({
      type: "SET_USER_MEASUREMENT",
      payload: measurement,
    });
  }

  function setUserMeasurementsunit(unit) {
    dispatch({
      type: "SET_USER_MEASUREMENT_UNIT",
      payload: unit,
    });
  }
  
  function setOperationStart(bool) {
    dispatch({
      type: "SET_OERATION_START",
      payload: bool,
   
    });
  }
  function setAddCartProducts(products) {
    dispatch({
      type: "SET_CART_PRODUCTS",
      payload: products,
   
    });
  }
  function setAddress(address) {
    dispatch({
      type: "SET_ADDRESS",
      payload: address,
   
    });
  
  }

  function setOndcLocation(ondclocation) {
    dispatch({
      type: "SET_ONDC_LOCATION",
      payload: ondclocation,
   
    });
  }
  function setLocationProductApi(locationProductApi) {
    dispatch({
      type: "SET_LOCATION_PRODUCT_ONDC_API",
      payload: locationProductApi,
   
    });
  }
  function setLocationApi(searchLocationApi) {
    dispatch({
      type: "SET_SEARCH_LOCATION_ONDC_API",
      payload: searchLocationApi,
   
    });
  }
  function setProductApi(productApi) {
    dispatch({
      type: "SET_PRODUCT_ONDC_API",
      payload: productApi,
   
    });
  }
  function setCartUpdate(cartUpdate) {
    dispatch({
      type: "SET_CART_UPDATE_ONDC_API",
      payload: cartUpdate,
   
    });
  }
  function setCartApi(cartApi) {
    dispatch({
      type: "SET_CART_ONDC_API",
      payload: cartApi,
   
    });
  }
  //Actions End

  return (
    <GlobalContext.Provider
      value={{
        userGender: state.userGender,
        userProfileImg: state.userProfileImg,
        userName: state.userName,
        userEmail: state.userEmail,
        userCountry: state.userCountry,
        userMeasurements: state.userMeasurements,
        usermeasurementUnit:state.measurementUnit,
        operationStart:state.operationStart,
        AddCartProducts:state.AddCartProducts,
        Address:state.Address,
        Ondclocation:state.Ondclocation,

        searchLocationApi:state.searchLocationApi,
        productApi:state.productApi,
        locationProductApi:state.locationProductApi,

        cartUpdate:state.cartUpdate,
        cartApi:state.cartApi,

        setUserGender,
        setUserProfileImage,
        setUserName,
        setUserEmail,
        setUserCountry,
        setUserMeasurements,
        setUserMeasurementsunit,
        setOperationStart,
        setAddCartProducts,
        setAddress,
        setOndcLocation,

        setLocationApi,
        setProductApi,
        setLocationProductApi,

        setCartUpdate,
        setCartApi
        
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
