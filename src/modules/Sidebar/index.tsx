import {FC} from "react";
import {ITab, Tab} from "../../shared/ui/Tab";
import {useLocation} from "react-router-dom";

interface SidebarProps {
  tabs: ITab[]
}

export const Sidebar: FC<SidebarProps> = (
  {
    tabs
  }
) => {
  
  const location = useLocation()
  
  return (
    <nav className='flex flex-col gap-1'>
      <div className="text-center">
        <img src="" alt=""/>
      </div>
      <ul className="flex flex-col">
        {
          tabs.map((tab, index) => (
            <Tab
              key={index} {...tab}
              selected={location.pathname.includes(tab.url)}
            />
          ))
        }
      </ul>
    </nav>
  );
};