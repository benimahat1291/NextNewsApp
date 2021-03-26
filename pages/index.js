import Layout from "../components/Layout"
import { Toolbar } from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <Layout>
    <div className="page__container">
      <div className={styles.main}>

          <h1 data-aos="zoom-out-up"  data-aos-offset="-200">Next.js News</h1>
          <h3>Your one stop shop for the latest news articles</h3>
      </div>
    </div>
    </Layout>
  )
}
