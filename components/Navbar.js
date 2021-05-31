import Link from 'next/link'

const Navbar = (params) => {
  return (
    <nav>
      <div className="logo">
        <h1>Sub List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/sub">Sub Listing</Link>
    </nav>
  )
}

export default Navbar
