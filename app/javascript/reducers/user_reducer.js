const userReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_USER_LOADING':
        return { 
            ...state,
            loading: true, 
            errorMessage: "" 
        };
      case 'FETCH_USER_SUCCESS':
        return {
          ...state,
          user: action.payload,
          loading: false,
          errorMessage: "",
        };
      case 'FETCH_USER_FAILED':
        return {
          ...state,
          loading: false,
          errorMessage: "Unable to fetch user",
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;