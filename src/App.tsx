import {ITab} from "./shared/ui/Tab";
import {AiFillAlert, AiFillShop} from "react-icons/ai";
import {Sidebar} from "./modules/Sidebar";
import {FaShoppingBasket} from "react-icons/fa";
import {SiWindows} from "react-icons/si";
import {TbHexagonLetterU} from "react-icons/tb";

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

export const App = () => {
  return (
    <div className='h-full w-full grid-cols grid grid-cols-[20%_auto] gap-10'>
      <Sidebar tabs={tabs} />
    </div>
  );
};