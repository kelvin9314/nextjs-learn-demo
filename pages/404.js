import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'



// NOTE custom 404 page
const NotMatch = (params) => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  }, [])

  return (
    <div className="not-match">
      <h1>Oooooops...</h1>
      <h2>That page cannot be found</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link> </p>
    </div>
  )
}

export default NotMatch