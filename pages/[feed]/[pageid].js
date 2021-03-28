import { useRouter } from "next/router";
import { Categories } from "../../components/categories"
import Layout from "../../components/Layout"
import styles from "../../styles/Feed.module.css";

export const Feed = ({ pageNumber, feedCategory, articles }) => {
    const router = useRouter()
    console.log(articles, feedCategory, pageNumber)
    return (
        <>

            <Layout>
                <div>
                    <Categories />
                    <div className={styles.main}>
                        {articles.map((article, index) => (
                            <div className={styles.post}>
                            <div data-aos="zoom-in-up" data-aos-offset="" key={index} >
                                <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                                <p>{article.description}</p>
                                {!!article.urlToImage && <img src={article.urlToImage} />}
                            </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.paginator}>
                        
                    <div
                            onClick={() => {
                                if (pageNumber > 1) {
                                    router.push(`/${feedCategory}/${pageNumber - 1}`)
                                }
                            }}
                            className={pageNumber === 1 ? styles.disabled : styles.active}>
                            Prev
                    </div>

                        <div className={styles.pageNumber}>{pageNumber}</div>

                        <div
                            onClick={() => {
                                if (pageNumber < 5) {
                                    router.push(`/${feedCategory}/${pageNumber + 1}`)
                                }
                            }}
                            className={pageNumber === 5 ? styles.disabled : styles.active}>
                            Next
                    </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.pageid;
    let feedCategory = pageContext.query.feed;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {

        return {
            props: {
                articles: [],
                feedCategory: feedCategory,
                pageNumber: 1,

            }
        }
    }

    if (feedCategory === "feed") {
        feedCategory = "general"
    }
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${feedCategory}&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        },
    );

    const apiJson = await apiResponse.json();
    const { articles } = apiJson;
    console.log(apiJson)



    return {
        props: {
            articles,
            feedCategory: feedCategory,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
};

export default Feed;