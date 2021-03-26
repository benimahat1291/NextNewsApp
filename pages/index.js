import Layout from "../components/Layout"
import { Toolbar } from '../components/toolbar'
import styles from '../styles/Home.module.css'
import TextLoop from "react-text-loop";

export default function Home() {
    return (
        <Layout>
            <div className="page__container">
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h1 data-aos="zoom-out-up" data-aos-offset="-200"><span>NEXT</span> NEWS</h1>
                        <div className={styles.delay}>
                            <TextLoop className={styles.textloop} delay={500} noWrap={true} interval={1000} mask={true}
                                springConfig={{ stiffness: 50, damping: 8 }} >
                                <span>Sports</span>
                                <span>Science</span>
                                <span>Health</span>
                                <span>Business</span>
                                <span>Technology</span>
                                <span>Entertainment</span>
                            </TextLoop>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
