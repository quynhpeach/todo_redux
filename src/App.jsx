import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./Home";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path = "/" element={<Home/>}></Route>
    <Route path ="/create" element={<Create/>}></Route>
    <Route path = "/edit/:id" element={<Update/>}></Route>
  </Routes>
  </BrowserRouter>;
}

export default App;
