/** This is the reducer to change the states of the displays at the top of page
 * 
 */

const displayAbout = (state = false, action) => {
    switch(action.type){
      case 'changeAbout':
          return !state;
      default:
          return state;
      //Note to self:
      //can add another case if i want to add more    
    }
  }

  export default displayAbout;