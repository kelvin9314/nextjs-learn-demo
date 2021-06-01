import Link from "next/link"

const Details = (params) => {
  return (
    <div>
      <Link href='/sub'><a>Back to Sub Listing</a></Link>
      <h1>Details</h1>
    </div>
  )
}

export default Details