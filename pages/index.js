import { server } from '../config'
import Meta from '../components/Meta'
import ArticleList from '../components/ArticleList'
import AboutContent from '../components/AboutContent'
import stylesUtility from '../styles/Utility.module.scss'

export default function Home({ articles }) {
  return (
    <>
      <Meta title='Home Page' />

      <section className={stylesUtility.section}>
        <h2 className={`
          ${stylesUtility["font_default"]}
          ${stylesUtility["font_extra_large_md"]} 
          ${stylesUtility["mb_20"]}
          ${stylesUtility["mb_md_40"]}`}>About</h2>

        <AboutContent />
      </section>
      
      <section className={stylesUtility.section}>
      <h2 className={`
          ${stylesUtility["font_default"]}
          ${stylesUtility["font_extra_large_md"]} 
          ${stylesUtility["mb_20"]}
          ${stylesUtility["mb_md_40"]}`}>Articles</h2>
        
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
