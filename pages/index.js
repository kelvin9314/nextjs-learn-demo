import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid omnis sed dolor exercitationem, obcaecati nihil ratione, unde corrupti mollitia dignissimos perferendis accusantium! Quis porro debitis repellat impedit eaque laudantium hic?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem harum, a neque laborum reiciendis molestias nulla in. Fugiat a laudantium aliquid assumenda, error molestias perspiciatis quisquam odio non reiciendis?</p>

      <Link href="/sub">See Sub Listing</Link>
    </div>
    
  )
}
