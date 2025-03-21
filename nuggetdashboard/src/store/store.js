import {  configureStore }
from '@reduxjs/toolkit';
import indexReducer from "./indexSlice"
import bitcoinReducer from "./bitcoinSlice"
import dbReducer from "./dbSlice"




const store = configureStore({
  reducer: {
    savings: indexReducer,
    bitcoinSavings: bitcoinReducer,
    savingGoals: dbReducer,

  },

});

export default store;
