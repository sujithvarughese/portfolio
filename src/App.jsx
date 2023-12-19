import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Layout, Contact, AboutMe, Resume, Portfolio } from "./pages";

const App = () => {

  return (
      <div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<AboutMe />}/>
                <Route path="resume" element={<Resume />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
  );
}

export default App;
