import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sub List | Home</title>
        <meta name="keywords" content="Sub list testing"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Home </h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid omnis sed dolor exercitationem, obcaecati nihil ratione, unde corrupti mollitia dignissimos perferendis accusantium! Quis porro debitis repellat impedit eaque laudantium hic?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem harum, a neque laborum reiciendis molestias nulla in. Fugiat a laudantium aliquid assumenda, error molestias perspiciatis quisquam odio non reiciendis?
        </p>

        <Link href="/sub">
          <a className={styles.btn}>See Sub Listing</a>
        </Link>
      </div>
    </>
    
  )
}
