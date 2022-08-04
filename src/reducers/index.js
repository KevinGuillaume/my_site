import displayThemeReducer from './changeDark';
import {combineReducers} from 'redux'

/**
 * Can add more reducers if more come up in the project
 * inside all reduce possible formats are:
 *  name: imported_reducer
 * or just by itself:
 * imported_reducer
 * 
 */
const allReducers = combineReducers({
    displayThemeReducer,
    
    
})

export default allReducers;