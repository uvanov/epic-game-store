import {Button} from "../../shared/ui/Button";
import {motion} from "framer-motion";
import {useEffect, useMemo, useState} from "react";
import {v4 as uuid} from 'uuid'
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

const FEED_SLIDER_TIME = 6000;

export const Feed = () => {
  
  const [games] = useState<IFeedItem[]>([
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
  
  const [selectedGameIndex, setSelectedGameIndex] = useState(0)
  
  const [selectedGame, setSelectedGame] = useState<IFeedItem>(games[0])
  
  useEffect(() => {
    const interval = setInterval(() => {
      if(selectedGameIndex < games.length - 1) {
        setSelectedGameIndex(prev => prev + 1)
      } else {
        setSelectedGameIndex(0)
      }
    }, FEED_SLIDER_TIME)
    
    return () => clearInterval(interval)
  }, [selectedGameIndex]);
  
  useEffect(() => {
    console.log('set game', selectedGameIndex)
    setSelectedGame(games[selectedGameIndex])
  }, [selectedGameIndex]);
  
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
    'after:content-[""]',
    'after:absolute',
    'after:inset-0',
    'after:bg-background/60',
  )
  
  const imageKey = useMemo(() => Date.now(), [selectedGame.thumbnailUrl])
  
  return (
    <div className='grid grid-cols-[auto_20%] h-[70vh] gap-10'>
      <motion.div
        className={thumbnailStyled}
        key={imageKey}
        initial={{opacity: 0, x: 20}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: 20}}
        transition={{ ease: [0.5, 0, 0.75, 0] }}
        style={{backgroundImage: `url(${selectedGame.thumbnailUrl})`}}
      >
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
      </motion.div>
      <div className='flex flex-col gap-5'>
        {
          games.map((game, index) => (
            <div
              className={clsx(
                'relative',
                'flex',
                'items-center',
                'gap-5',
                'pl-5',
                'transition-colors',
                'rounded-2xl',
                'h-20',
                'hover:bg-dark-200',
                'cursor-pointer',
                'overflow-hidden',
                selectedGameIndex === index && 'bg-dark-100',
              )}
              onClick={() => setSelectedGameIndex(index)}
            >
              {
                selectedGameIndex === index && (
                  <motion.div
                    className='absolute inset-0 bg-dark-200'
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: FEED_SLIDER_TIME / 1000 }}
                  />
                )
              }
              <img
                className='w-10 z-10'
                src={game.posterUrl}
                alt=""
              />
              <p className='z-10'>
                {game.title.length > 30 ? game.title.substring(0, 30).concat('...') : game.title}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
};