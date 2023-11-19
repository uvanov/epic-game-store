import {ITab} from "./shared/ui/Tab";
import {Sidebar} from "./modules/Sidebar";
import {FaShoppingBasket} from "react-icons/fa";
import {SiWindows} from "react-icons/si";
import {TbHexagonLetterU} from "react-icons/tb";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {GlobalLayout} from "./modules/GlobalLayout";



export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout/>}>
          <Route path='/' element={<div>index</div>} />
          <Route path='/library' element={<div>library</div>} />
          <Route path='/shop' element={<div>shop</div>} />
          <Route path='/engine' element={<div>We're creating Engine's page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};