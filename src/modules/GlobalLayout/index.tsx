import {Sidebar} from "../Sidebar";
import {ITab} from "../../shared/ui/Tab";
import {FaShoppingBasket} from "react-icons/fa";
import {SiWindows} from "react-icons/si";
import {TbHexagonLetterU} from "react-icons/tb";
import {Outlet} from "react-router-dom";
import {Header} from "../Header";

const tabs: ITab[] = [
  {
    url: 'shop',
    icon: FaShoppingBasket,
    label: 'Магазин'
  },
  {
    url: 'library',
    icon: SiWindows,
    label: 'Библиотека'
  },
  {
    url: 'engine',
    icon: TbHexagonLetterU,
    label: 'Real Engine'
  }
]

export const GlobalLayout = () => {
  return (
    <div className='h-full w-full grid-cols grid grid-cols-[20%_auto] grid-rows-[50px_auto] gap-10'>
      <Sidebar tabs={tabs} />
      <Header />
      <Outlet />
    </div>
  );
};