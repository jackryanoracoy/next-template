import { usePaginatePosts } from "./api/useRequest";
import Meta from '../components/Meta'
import ArticleList from '../components/ArticleList'
import stylesButton from '../styles/Button.module.scss'
import stylesUtility from '../styles/Utility.module.scss'

const pageTitle = 'Article';
const pageKeyword = 'Keyword here!';

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
      <Meta
        title={pageTitle}
        keywords={pageKeyword}
      />

      <div className={stylesUtility.container}>
        <section className={stylesUtility.section}>
          <h1 className={`
            ${stylesUtility["font_default"]}
            ${stylesUtility["font_extra_large_md"]}
            ${stylesUtility["mb_20"]}
            ${stylesUtility["mb_md_40"]}
          `}>
            {pageTitle}
          </h1>

          <ArticleList articles={articles} />

          <div className={`
            ${stylesUtility["flex"]}
            ${stylesUtility["is_jus_center"]}
            ${stylesUtility["mt_40"]}
          `}>
            <button
              className={stylesButton.button}
              disabled={isLoadingMore || isReachingEnd}
              onClick={() => setSize(size + 1)}
            >
              {isLoadingMore
                ? "Loading articles..."
                : isReachingEnd
                ? "No more articles"
                : "Load more articles"
              }
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
