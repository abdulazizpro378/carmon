import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import DebtsP from "./pages/DebtsP";
import Transactions from "./pages/Transactions";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  
      <Route path="/" element={<Layout />}>
 
          <Route index path="debts" element={<DebtsP />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
