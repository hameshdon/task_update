// import uuid from 'uuid/v4';

export const Reducer = (state, action) => {
  switch (action.type) {
    // case 'ADD_Toll':
    //   console.log(action);
    //   return [
    //     ...state,
    //     {
        
         
    //    tollName: action.datas.tollName, 
    //   fair1: action.datas.fair1 ,
    //   single1: action.datas.single1,
    //   double1: action.datas.double1,

    //   fair2: action.datas.fair2,
    //   single2: action.datas.single2,
    //   double2: action.datas.double2,

    //   fair3: action.datas.fair3,
    //   single3: action.datas.single3,
    //   double3: action.datas.double3,

    //   fair4: action.datas.fair4 ,
    //   single4: action.datas.single4 ,
    //   double4: action.datas.double4 ,
          
    //     }
    //   ];
      case 'ADD_VEHICLE':
      console.log(action);
      return [
        ...state,
        {
          selectToll: action.datas.selectToll,

          vehicleType: action.datas.vehicleType,
          vehicleNum: action.datas.vehicleNum,
    
          tariff: action.datas.tariff,
         
    

     
          
        }
      ];
      // case 'REMOVE_BOOK':
      // console.log(action.id);
      // return state.filter(book => book.id !== action.id);
    default:
      return state;
  
   
     
   
  }
};
