import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div class="flex flex-col justify-start">
        <Link href="/home"><button class="m-8 p-8 ...">HOME</button></Link>
        <button class="m-8 p-8 ...">PROJECTS</button>
        <button class="m-8 p-8 ...">ABOUT</button>
        <button class="m-8 p-8 ...">CONTACT</button>
    </div>
  )
}

export default page