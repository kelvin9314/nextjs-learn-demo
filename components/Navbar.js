import Link from 'next/link'
import Image from 'next/image'

const Navbar = (params) => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} />
        {/* <Image src="/logo.png" alt="site logo" width={128} height={77} /> */}
        {/* <img src="/logo.png" /> */}
        {/* <h1>Sub List</h1> */}
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/sub">Sub Listing</Link>
    </nav>
  )
}

export default Navbar
