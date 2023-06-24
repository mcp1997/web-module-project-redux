import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer'

const reducer = combineReducers({movieReducer, favoritesReducer})

export default reducer;