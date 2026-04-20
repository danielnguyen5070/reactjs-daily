// TestScriptComponent.tsx
import { useDispatch, useSelector } from "react-redux";
import {
    runTestsScriptRequest,
    cancelTestsScript,
} from "./testScriptSlice";
import type { RootState } from "../../app/store";

export default function TestScriptComponent() {
    const dispatch = useDispatch();
    const { loading, jobs } = useSelector(
        (state: RootState) => state.tests
    );

    return (
        <div>
            <button className="border" onClick={() => dispatch(runTestsScriptRequest([1, 2]))}>
                Run Tests
            </button>

            <button className="border ml-4" onClick={() => dispatch(cancelTestsScript())}>
                Cancel
            </button>

            {loading && <p>Running...</p>}

            <ul>
                {jobs && jobs.map((j) => (
                    <li key={j.testId}>
                        {j.testId}: {j.status}
                    </li>
                ))}
            </ul>
        </div>
    );
}