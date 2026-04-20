import {
	call,
	put,
	takeLatest,
	delay,
	all,
	race,
	take,
} from "redux-saga/effects";

import {
	runTestsScriptRequest,
	runTestsScriptSuccess,
	runTestsScriptFailure,
	cancelTestsScript,
} from "./testScriptSlice";

import { startTestScriptApi, getTestScriptStatusApi } from "./testScriptApi";

function* runSingleTestScript(testId: number): any {
	try {
		const job = yield call(startTestScriptApi, testId);

		let retries = 3;

		while (true) {
			try {
				const result = yield call(getTestScriptStatusApi, job.jobId);

				if (result.status === "success") {
					return { testId, status: "success" };
				}

				yield delay(1000); // polling
			} catch (err) {
				if (retries > 0) {
					retries--;
					yield delay(1000); // retry delay
				} else {
					return { testId, status: "failed" };
				}
			}
		}
	} catch (e) {
		return { testId, status: "failed" };
	}
}

function* runMultipleTestsScript(testIds: number[]): any {
	const results = yield all(
		testIds.map((id) => call(runSingleTestScript, id)),
	);

	return results;
}

function* handleRunTestsScript(action: any): any {
	try {
		const { result, cancel } = yield race({
			result: call(runMultipleTestsScript, action.payload),
			cancel: take(cancelTestsScript.type),
		});

		if (cancel) {
			console.log("Tests cancelled");
			return;
		}

		yield put(runTestsScriptSuccess(result));
	} catch (e: any) {
		yield put(runTestsScriptFailure(e.message));
	}
}

export function* testScriptSaga() {
	yield takeLatest(runTestsScriptRequest.type, handleRunTestsScript);
}
