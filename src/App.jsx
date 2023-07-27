import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Layout, Landing, Resume, Projects, Contact } from "./pages";

const App = () => {

	return (
		<div className="body-container">

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout/>}>
						<Route index element={<Landing />}/>
						<Route path="resume" element={<Resume />} />
						<Route path="projects" element={<Projects />} />
						<Route path="contact" element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
