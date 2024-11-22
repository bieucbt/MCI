import React from 'react'
import Slider from './Slider'
import Heading from './Heading'
import Post from './Post'

const Event = () => {
  return (
    <section>
      <div>
        <Heading>Sự kiện của MCI</Heading>
          <Slider />
      </div>
      <Post />
    </section>
  )
}

export default Event