/** This is the reducer to change the states of the theme
 *
 */

const displayThemeReducer = (state = true, action) => {
  switch (action.type) {
    case "changeToLight":
      return false;
    case "changeToDark":
      return true;
    default:
      return true;
    //Note to self:
    //can add another case if i want to add more
  }
};

export default displayThemeReducer;
