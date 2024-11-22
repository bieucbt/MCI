import React from 'react'
import Heading from './Heading'
import Card from './Card'
import { trainingData } from '../data/trainingData'

const Training = () => {
  return (
    <section>
      <div className='flex justify-center'>
        <Heading>Chương trình đào tạo của MCI</Heading>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-6 max-lg:grid-cols-2'>
        {
          trainingData.map((train, i) => <Card key={i} data={train} cssImg={'rounded-full'}
          cssTitle={'text-center my-2'} />)
        }
      </div>
    </section>
  )
}

export default Training