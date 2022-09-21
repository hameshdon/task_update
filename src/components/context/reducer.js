
export default (state, action) => {
    switch (action.type) {
        case 'SET_USER_GENDER':
            return {
                ...state,
                userGender: action.payload
            }
        case 'SET_USER_PROFILE_IMAGE':
            return {
                ...state,
                userProfileImg: action.payload
            }
        case 'SET_USER_NAME':
            return {
                ...state,
                userName: action.payload
            }
        case 'SET_USER_EMAIL':
            return {
                ...state,
                userEmail: action.payload
            }
        case 'SET_USER_COUNTRY':
            return {
                ...state,
                userCountry: action.payload
            }
        case 'SET_USER_MEASUREMENT':
            return {
                ...state,
                userMeasurements: action.payload
            }
        case 'SET_USER_MEASUREMENT_UNIT':
            return {
                ...state,
                measurementUnit: action.payload
            }
        case 'SET_OERATION_START':
            return {
                ...state,
                operationStart: action.payload
            }
        case 'SET_CART_PRODUCTS':
            return {
                ...state,
                AddCartProducts: action.payload
            }
        case 'SET_ADDRESS':
            return {
                ...state,
                Address: action.payload
            }
        case 'SET_ONDC_LOCATION':
                return {
                    ...state,
                    Ondclocation: action.payload
                }
        case 'SET_LOCATION_PRODUCT_ONDC_API':
                    return {
                        ...state,
                        locationProductApi: action.payload
                    }
        case 'SET_SEARCH_LOCATION_ONDC_API':
                return {
                    ...state,
                    searchLocationApi: action.payload
                        }            
         case 'SET_PRODUCT_ONDC_API':
                return {
                     ...state,
                    productApi: action.payload
                        }    
         case  'SET_CART_UPDATE_ONDC_API':
                 return {
                 ...state,
                  cartUpdate: action.payload
                      }        
        case  'SET_CART_ONDC_API':
                return {
                ...state,
                cartApi: action.payload
                 }                                         
        default: return state
    }
}