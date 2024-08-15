import React from 'react'

export default function Main(props) {
  const {data} = props
  return (
      <div className='ImageContainer'>
        <img src={data?.hdurl} alt='mar-demo-art' className='bgImag'></img>
      </div>
  )
}
