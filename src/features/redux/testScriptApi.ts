export const startTestScriptApi = async (testId: number) => {
	await delay(1000); // simulate 1s network delay

	return {
		jobId: Math.floor(Math.random() * 1000),
		testId,
	};
};

export const getTestScriptStatusApi = async (jobId: number) => {
	await delay(1500); // simulate polling delay

	// random status
	const rand = Math.random();

	if (rand < 0.6) {
		return { status: "running" };
	} else if (rand < 0.85) {
		return { status: "success" };
	} else {
		throw new Error("Random failure");
	}
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
