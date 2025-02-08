import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // ✅ Added return statement
    <Router>
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
