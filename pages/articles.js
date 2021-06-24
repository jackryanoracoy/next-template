import { server } from '../config'
import Meta from '../components/Meta'
import ArticleList from '../components/ArticleList'
import stylesUtility from '../styles/Utility.module.scss'

export default function about({ articles }) {
  return (
    <div>
      <Meta title='About' keywords='Your Keyword' />

      <section className={stylesUtility.section}>
        <h2 className={`
        ${stylesUtility["font_extra_large"]} 
        ${stylesUtility["mb_40"]}`}>Articles</h2>

        <ArticleList articles={articles} />
      </section>
    </div>
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
