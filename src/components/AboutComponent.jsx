import React from 'react'

function AboutComponent({title,data}) {
  return (
    <div>
      <p>{title} Sayfası</p>
      <div>
        {data}
      </div>
    </div>
  )
}

export default AboutComponent