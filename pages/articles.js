import { server } from '../config'
import Meta from '../components/Meta'
import ArticleList from '../components/ArticleList'
import stylesUtility from '../styles/Utility.module.scss'

export default function Articles ({ article }) {
  return (
    <div>
      <Meta title='Articles' keywords='Your Keyword' />

      <section className={stylesUtility.section}>
        <h2 className={`
          ${stylesUtility["font_default"]}
          ${stylesUtility["font_extra_large_md"]} 
          ${stylesUtility["mb_20"]}
          ${stylesUtility["mb_md_40"]}`}>Articles</h2>

        <ArticleList articles={article} />
      </section>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}
