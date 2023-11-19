import {FC} from "react";
import {IconType} from "react-icons";
import {Link} from "react-router-dom";

export interface ITab {
  label: string,
  icon: IconType,
  url: string
}

interface TabProps extends ITab {
  selected?: boolean,
}

export const Tab: FC<TabProps> = (
  {
    icon,
    url,
    label,
    selected,
  }
) => {
  return (
    <Link to={url}>
      <div
        className={`transition-colors flex items-center text-gray gap-5 p-5 hover:bg-dark-200 hover:text-white rounded-xl ${selected && 'bg-dark-200 text-white'}`}>
        {icon({})}
        <p>{label}</p>
      </div>
    </Link>
  );
};