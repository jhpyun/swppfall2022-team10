import "./App.css";
import Login from "./components/Login/Login";
import PostList from "./components/PostComponents/PostList/PostList";
import PostDetail from "./components/PostComponents/PostDetail/PostDetail";
import ReviewList from "./components/ReviewComponents/ReviewList/ReviewList";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<PostList />} />
					<Route
						path="/post/:id"
						element={<PostDetail is_author={false} />}
					/>
					{/* <Route path="/post/:id/submit" element={<ApplyCreate />} /> */}
					<Route
						path="/mypost/:id"
						element={<PostDetail is_author={true} />}
					/>
					<Route path="/review" element={<ReviewList />} />
					{/* <Route
						path="/review/:id"
						element={<ReviewDetail is_author={false} />}
					/> */}
					<Route path="*" element={<h1>Not Found</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;