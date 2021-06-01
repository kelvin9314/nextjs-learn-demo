import Link from "next/link"

// NOTE run at build time
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  const paths = data.map( sub => ({
    params: {id: sub.id.toString()}
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()

  return {
    props: { sub: data }
  }
}

const Details = ({ sub }) => {
  return (
    <div>
      <Link href='/sub'><a>Back to Sub Listing</a></Link>
      <h1>{sub.name}</h1>
      <p>{sub.email}</p>
      <p>{sub.website}</p>
      <p>{sub.address.city}</p>
    </div>
  )
}

export default Details
