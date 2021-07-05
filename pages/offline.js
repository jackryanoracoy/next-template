import { server } from '../config'
import Meta from '../components/Meta'
import stylesUtility from '../styles/Utility.module.scss'

export default function Home({ articles }) {
  return (
    <>
      <Meta title='Offline Page' />

      <section className={stylesUtility.section}>
        <h2 className={`
          ${stylesUtility["font_default"]}
          ${stylesUtility["font_extra_large_md"]}
          ${stylesUtility["mb_20"]}
          ${stylesUtility["mb_md_40"]}`}>Offline</h2>

        <p>You Are Offline!</p>
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
