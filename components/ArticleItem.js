import Link from 'next/link'
import stylesUtility from '../styles/Utility.module.scss'

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={`
        ${stylesUtility["card"]} 
        ${stylesUtility["block"]}
        ${stylesUtility["height_100"]}
      `}>
        <div className={stylesUtility.card_content}>
          <h3 className={stylesUtility.font_default}>{article.title}</h3>
          <p className={stylesUtility.font_medium}>{article.excerpt}</p>
        </div>
      </a>
    </Link>
  )
}

export default ArticleItem
