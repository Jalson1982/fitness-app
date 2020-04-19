import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';
import userReducer from './user/reducers';

const rootReducer = combineReducers({
  userReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userReducer']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;