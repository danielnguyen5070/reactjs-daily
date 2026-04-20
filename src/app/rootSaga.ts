import { all } from "redux-saga/effects";
import { testScriptSaga } from "@/features/redux/testScriptSaga";

export default function* rootSaga() {
	yield all([testScriptSaga()]);
}
