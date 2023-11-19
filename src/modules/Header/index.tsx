import {BiArrowToLeft, BiSolidUser} from "react-icons/bi";
import {Input} from "../../shared/ui/Input";
import {IoSearchSharp} from "react-icons/io5";
import {Anchor} from "../../shared/ui/Anchor";
import {Link} from "react-router-dom";
import {TbUser} from "react-icons/tb";

export const Header = () => {
  return (
    <header className='flex items-center justify-between row-start-1 row-end-2 col-start-2 col-end-3'>
      <div className='flex items-center gap-5'>
        <button>
          <BiArrowToLeft />
        </button>
        <Input
          icon={IoSearchSharp}
          placeholder='Поиск...'
          rounded
        />
      </div>
      <div className='flex items-center gap-10'>
        <Anchor href='wishlist'>
          Список желаемого
        </Anchor>
        <Anchor href='cart'>
          Корзина
        </Anchor>
        <div className='h-10 w-[1px] bg-dark-200'/>
        <Link to='profile'>
          <div className='h-12 w-12 bg-dark-200 rounded-full flex items-center justify-center text-gray'>
            <TbUser size={25}/>
          </div>
        </Link>
      </div>
    </header>
  );
};