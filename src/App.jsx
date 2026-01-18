import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProfileForm from "./excercises/01.action-form";
import ReactHookForm from "./excercises/02.react-hook-form";
import CodeSplitting from "./excercises/03.code-splitting";
import PokemonSearch from "./excercises/04.debounce";
import FlexGrid from "./excercises/05.tailwindcss-flex-grid";
import Todo from "./excercises/06.to-do-list";
import API from "./excercises/07.api-call";
import ReactQuery from "./excercises/08.react-query";
import ReduxSaga from "./excercises/10.redux-saga";
import ReduxToolkit from "./excercises/09.redux-toolkit";

const routes = [
	{ path: "/action-form", element: <ProfileForm /> },
	{ path: "/react-hook-form", element: <ReactHookForm /> },
	{ path: "/code-splitting", element: <CodeSplitting /> },
	{ path: "/debounce-input", element: <PokemonSearch /> },
	{ path: "/flex-grid", element: <FlexGrid /> },
	{ path: "/to-do", element: <Todo /> },
	{ path: "/api", element: <API /> },
	{ path: "/react-query", element: <ReactQuery /> },
	{ path: "/redux-saga", element: <ReduxSaga /> },
	{ path: "/redux-toolkit", element: <ReduxToolkit /> },
];

function App() {
	const [sidebarOpen, setSidebarOpen] = React.useState(false);

	return (
		<Router>
			<div className="flex h-dvh">
				<div
					style={{ display: sidebarOpen ? "none" : "block" }}
					className="shadow-sm shadow-gray-300"
				>
					<Sidebar />
				</div>
				<main
					className={`flex-1 ${
						sidebarOpen ? "ml-0" : "ml-64"
					} transition-all duration-300 ease-in-out`}
				>
					<button
						className="fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded"
						onClick={() => setSidebarOpen(!sidebarOpen)}
						aria-label="Open sidebar"
					>
						☰
					</button>
					<Routes>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								element={route.element}
							/>
						))}
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
