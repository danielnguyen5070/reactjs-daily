import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Job = {
	testId: number;
	status: string;
};
export interface TestScriptState {
	jobs: Job[];
	loading: boolean;
	error: string | null;
}

const initialState: TestScriptState = {
	jobs: [],
	loading: false,
	error: null,
};

const testScriptSlice = createSlice({
	name: "testScript",
	initialState,
	reducers: {
		runTestsScriptRequest(state, action: PayloadAction<number[]>) {
			state.loading = true;
		},
		runTestsScriptSuccess(state, action: PayloadAction<any>) {
			state.loading = false;
			state.jobs = action.payload;
		},
		runTestsScriptFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
		cancelTestsScript(state) {
			state.loading = false;
		}, // trigger cancellation
	},
});

export const {
	runTestsScriptRequest,
	runTestsScriptSuccess,
	runTestsScriptFailure,
	cancelTestsScript,
} = testScriptSlice.actions;

export default testScriptSlice.reducer;
