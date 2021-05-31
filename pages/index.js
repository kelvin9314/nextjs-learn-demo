import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid omnis sed dolor exercitationem, obcaecati nihil ratione, unde corrupti mollitia dignissimos perferendis accusantium! Quis porro debitis repellat impedit eaque laudantium hic?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem harum, a neque laborum reiciendis molestias nulla in. Fugiat a laudantium aliquid assumenda, error molestias perspiciatis quisquam odio non reiciendis?</p>
      <Footer />
    </div>
    
  )
}
