import { useState } from 'react'
import './index.css'

export function TwitterFollowCard(
  {
    children, 
    formatUsername, 
    username = '@None', 
    initialIsFollowing,
    imageSrc
  }
  ) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const textFollowing = !isFollowing ? 'Seguir' : 'Siguiendo'
    const btnClassNames = !isFollowing 
      ? 'bg-slate-100 px-4 font-bold border border-white rounded-full py-1' 
      : 'border border-white px-4 font-bold rounded-full py-1 text-white'

    const handleClick = () =>  {
      setIsFollowing(!isFollowing)
    }

    return (
        <article className='transition-all flex justify-between items-center w-full px-6 py-2 hover:bg-gray-800'>
          <header className='flex items-center gap-3'>
            <img className='w-10 h-10 rounded-full' src={imageSrc} alt={`Avatar de ${children}`} />
            <div className='flex flex-col'>
            <strong className='text-white'>{children}</strong>
              <span className='text-[#71727B]'>{formatUsername(username)}</span>
            </div>
          </header>
  
          <aside className='ml-10'>
            <button className={btnClassNames} onClick={handleClick}>
              {textFollowing}
            </button>
          </aside>
        </article>
      )
}