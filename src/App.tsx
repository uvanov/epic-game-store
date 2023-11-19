import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {GlobalLayout} from "./modules/GlobalLayout";
import {Shop} from "./pages/Shop";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout/>}>
          <Route path='/' element={<Navigate to='/shop'/>} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:gameId' element={<div>shop id</div>} />
          <Route path='/library' element={<div>library</div>} />
          <Route path='/engine' element={<div>We're creating Engine's page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};