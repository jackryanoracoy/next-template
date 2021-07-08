import { usePaginatePosts } from "./api/useRequest";
import Meta from '../components/Meta'
import ArticleList from '../components/ArticleList'
import stylesButton from '../styles/button.module.scss'
import stylesUtility from '../styles/Utility.module.scss'

export default function Articles () {
  const {
    articles,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd
  } = usePaginatePosts("/posts");

  if (error) return <h1>Something went wrong!</h1>;
  if (!articles) return <h1>Loading...</h1>;

  return (
    <>
      <Meta title='Articles' keywords='Your Keyword' />

      <section className={stylesUtility.section}>
        <h2 className={`
          ${stylesUtility["font_default"]}
          ${stylesUtility["font_extra_large_md"]}
          ${stylesUtility["mb_20"]}
          ${stylesUtility["mb_md_40"]}`}>Articles</h2>

        <ArticleList articles={articles} />

        <div className={`
          ${stylesUtility["flex"]}
          ${stylesUtility["is_jus_center"]}
          ${stylesUtility["mt_40"]}
        `}>
          <button
            className={`
              ${stylesButton["button"]}
            `}
            disabled={isLoadingMore || isReachingEnd}
            onClick={() => setSize(size + 1)}
          >
            {isLoadingMore
              ? "Loading articles..."
              : isReachingEnd
              ? "No more articles"
              : "Load more articles"}
          </button>
        </div>
      </section>
    </>
  )
}
