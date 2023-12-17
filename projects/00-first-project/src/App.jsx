import {TwitterFollowCard} from './TwitterFollowCard'
import './index.css'

const users = [
  {
    username: 'DiegoZM1006',
    name: 'Diego Zuñiga',
    isFollowing: true,
    imageSrc: 'https://avatars.githubusercontent.com/u/103274890?v=4'
  },
  {
    username: 'dylanbc1',
    name: 'Dylan Bermudez Cardona',
    isFollowing: false,
    imageSrc: 'https://avatars.githubusercontent.com/u/101611405?v=4'
  },
  {
    username: 'santiesleo',
    name: 'Santiago Escobar',
    isFollowing: false,
    imageSrc: 'https://avatars.githubusercontent.com/u/83185169?v=4'
  },
  {
    username: 'Juandap19',
    name: 'Juan David Patiño Zambrano',
    isFollowing: true,
    imageSrc: 'https://avatars.githubusercontent.com/u/103268847?v=4'
  }
]

export function App() {

    const addAt = (username) => `@${username}`

    return (
      <section className='flex flex-col gap-4 bg-[#16181c] py-6 rounded-xl'>
        <h2 className='text-white font-bold text-xl px-6'>A quién seguir</h2>
        
        <div>
          {
            users.map(({username, name, isFollowing, imageSrc}) => (
              <TwitterFollowCard 
              key={username}
              username={username}
              initialIsFollowing={isFollowing}
              formatUsername={addAt}
              imageSrc={imageSrc}
              >
                {name}
              </TwitterFollowCard>
            ))
          }
        </div>
      </section>
    )
  }