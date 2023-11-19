import { FC, PropsWithChildren} from "react";
import {Link} from "react-router-dom";

export interface AnchorProps {
  href: string
}

export const Anchor: FC<PropsWithChildren<AnchorProps>> = (
  {
    href,
    children,
  }
) => {
  return (
    <Link to={href}>
      <p className='text-gray hover:text-white transition-colors'>
        {children}
      </p>
    </Link>
  );
};