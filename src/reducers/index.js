import displayAbout from './changeAbout'
import displayProjects from './changeProjects'

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
    displayProjects,
    displayAbout
})

export default allReducers;