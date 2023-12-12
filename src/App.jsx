import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Layout, AboutMe, Resume, Projects, Contact } from "./pages";

const App = () => {

	return (
		<div>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout/>}>
						<Route index element={<AboutMe />}/>
						<Route path="resume" element={<Resume />} />
						<Route path="portfolio" element={<Projects />} />
						<Route path="contact" element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
