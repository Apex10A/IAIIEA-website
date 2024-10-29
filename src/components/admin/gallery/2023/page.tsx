import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <div className='grid grid-cols-3'>
            <div>
                <Image src='/2023Woman' alt='' width={300} height={300}/>
            </div>
            <div>
                <Image src='/2023Girl' alt='' width={300} height={300}/>
            </div>
            <div>
                <Image src='/2023faith' alt='' width={300} height={300}/>
            </div>
        </div>
    </div>
  )
}

export default page