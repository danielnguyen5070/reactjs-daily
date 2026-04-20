import { combineReducers } from "@reduxjs/toolkit";
import testScriptReducer from "@/features/redux/testScriptSlice";

const rootReducer = combineReducers({
	tests: testScriptReducer,
});

export default rootReducer;
