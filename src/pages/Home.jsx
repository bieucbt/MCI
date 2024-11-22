import React from 'react'
import Banner from '../components/Banner'
import Event from '../components/Event'
import LibraryImg from '../components/LibraryImg'
import Training from '../components/Training'

const Home = () => {
  document.title = 'Home'
  return (
    <div >
      <Banner />
      <main className='max-w-[1200px] m-auto flex flex-col gap-5 px-5
      mt-5'>
          <Event />
          <LibraryImg />
          <Training />
      </main>
    </div>
  )
}

export default Home