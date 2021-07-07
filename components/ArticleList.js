import ArticleItem from './ArticleItem'
import stylesUtility from '../styles/Utility.module.scss'

const ArticleList = ({ articles }) => {
  return (
    <div className={`
      ${stylesUtility["flex"]}
      ${stylesUtility["gap_20"]}
    `}>
      {articles.map((article) => (
        <div key={article.id} className={`
          ${stylesUtility["flex_item_12"]}
          ${stylesUtility["flex_item_xs_6"]}
          ${stylesUtility["flex_item_md_4"]}
        `}>
          <ArticleItem article={article} />
        </div>
      ))}
    </div>
  )
}

export default ArticleList
