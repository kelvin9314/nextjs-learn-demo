import styles from '../../styles/Sub.module.css'

// NOTE run in build time
export const getStaticProps = async ( context ) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()


  return{
    props: {
      subs: data
    }
  }
}

const Sub = ({subs}) => {
  return (
    <div>
      <h1>
        All subs
      </h1>
      
      {subs.map(sub => (
        <div key={sub.id}>
          <a className={styles.single}>
            <h3>{sub.name}</h3>
          </a>
        </div>
      ))}
    
    </div>
  )
}

export default Sub