import { useRouter } from "next/router"
import styles from "../styles/Toolbar.module.css"


export const Toolbar = () => {
    const router = useRouter();

    return (
        <div className={styles.main}>
            <div>
            <img className={styles.logo} onClick={() => router.push('/')}
                src="/favicon/logo.png"
                alt="Picture of the author"
            />
            </div>

            <div onClick={() => router.push('/feed/1')}>Feed</div>
            <div onClick={() => router.push('/aboutme')}>About</div>
        </div>
    )

};