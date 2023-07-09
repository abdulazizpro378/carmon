import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginP from "./pages/LoginP";
import Layout from "./components/layout";
import DebtsP from "./pages/DebtsP";
import Transactions from "./pages/Transactions";
// import HomeP from "./pages/HomeP";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LoginP />} /> */}
        <Route path="/" element={<Layout />}>
          {/* <Route path="home" element={<HomeP />} /> */}
          <Route path="debts" element={<DebtsP />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
