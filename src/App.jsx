import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Layout, Resume, Projects, Contact, PropertyAssistant } from "./pages";

const App = () => {

	return (
		<div>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout/>}>
						<Route index element={<Projects />}/>
						<Route path="resume" element={<Resume />} />
						<Route path="projects" element={<Projects />} />
						<Route path="contact" element={<Contact />} />
						<Route path="property-app" element={<PropertyAssistant />} />

					</Route>
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
