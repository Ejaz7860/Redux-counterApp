const counterReducer = (state = 1, action) => {
  
  switch (action.type) {

    case "INCEREMENT":
      return state + 1;

    case "DECEREMENT":
      return state > 0 ? state - 1 : 0;

    case "RESET":
      return state = 0;

      case "Add":
        return state + 10;
    default:
      return state;
  }
};

export default counterReducer;
