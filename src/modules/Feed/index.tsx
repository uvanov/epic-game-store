import {Button} from "../../shared/ui/Button";
import {TbPlus, TbSpherePlus, TbUserPlus} from "react-icons/tb";
import {useState} from "react";
import { v4 as uuid} from 'uuid'
import {clsx} from "clsx";
import {GoPlusCircle} from "react-icons/go";

interface IFeedItem {
  id: string,
  title: string,
  posterUrl: string,
  thumbnailUrl: string,
  description: string,
  price: number
}

export const Feed = () => {
  
  const [games, setGame] = useState<IFeedItem[]>([
    {
      id: uuid(),
      title: 'Alan Wake 2',
      description: 'Серия ритуальных убийств, в которых Алекс пидорас ебаный',
      posterUrl: 'https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2_RemedyEntertainment_S2_1200x1600-c7c8091ddac0f9669c8e5905bca88aaa',
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/21C3/production/_131534680_alan_wake_2_keyart-2largecopy.jpg',
      price: 49.99,
    },
    {
      id: uuid(),
      title: 'Assasin\'s Creed Syndicate',
      description: 'Серия ритуальных убийств, в которых Алекс пидорас ебаный',
      posterUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Assassin%27s_Creed_Syndicate_cover.jpg',
      thumbnailUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202010/0220/y7N5IayWNS7e008hUsfgPkh1.jpg',
      price: 15.00,
    }
  ])
  
  const [selectedGame, setSelectedGame] = useState<IFeedItem>(games[0])
  
  const thumbnailStyled = clsx(
    'relative',
    'flex',
    'flex-col',
    'gap-10',
    'rounded-2xl',
    'pl-10',
    'pb-10',
    'justify-end',
    'bg-cover',
    `bg-[url('${selectedGame.thumbnailUrl}')]`,
    'after:content-[""]',
    'after:absolute',
    'after:inset-0',
    'after:bg-background/60',
  )
  
  return (
    <div className='grid grid-cols-[auto_20%] h-[70vh] gap-10'>
      <div className={thumbnailStyled}>
        <div className='flex flex-col gap-3 relative z-10'>
          <p className='text-xs'>
            УЖЕ ДОСТУПНО
          </p>
          <p className='text-xl w-[30%]'>
            {selectedGame.description}
          </p>
        </div>
        <div className='flex flex-col gap-2 relative z-10'>
          <p className='text-xl'>
            От {selectedGame.price.toFixed(2)} $
          </p>
          <div className='flex items-center gap-5 w-[50%]'>
            <Button variant='filled'>
              КУПИТЬ СЕЙЧАС
            </Button>
            <Button variant='transparent' icon={GoPlusCircle}>
              В СПИСОК ЖЕЛАЕМОГО
            </Button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        {
          games.map(game => (
            <div
              className='flex items-center gap-5 pl-5 transition-colors rounded-2xl h-20 hover:bg-dark-200 cursor-pointer'
              onClick={() => setSelectedGame(game)}
            >
              <img
                className='w-10'
                src={game.posterUrl}
                alt=""
              />
              <p className=''>
                {game.title.length > 30 ? game.title.substring(0, 30).concat('...') : game.title}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
};