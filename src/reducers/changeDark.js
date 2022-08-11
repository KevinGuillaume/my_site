/** This is the reducer to change the states of the theme
 *
 */

const displayThemeReducer = (state = true, action) => {
  switch (action.type) {
    case "showParticles":
      return true;
    case "dontShowParticles":
      return false;
    default:
      return true;
    //Note to self:
    //can add another case if i want to add more
  }
};

export default displayThemeReducer;
