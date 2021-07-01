import { server } from '../config'
import Meta from '../components/Meta'
import ArticleList from '../components/ArticleList'
import stylesUtility from '../styles/Utility.module.scss'

export default function Home({ articles }) {
  return (
    <>
      <Meta title='Home Page' />
      
      <section className={stylesUtility.section}>
        <h2 className={`
        ${stylesUtility["font_extra_large"]} 
        ${stylesUtility["mb_40"]}`}>Articles</h2>
        
        <ArticleList articles={articles} />
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
