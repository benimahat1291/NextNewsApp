import { useRouter } from "next/router"
import styles from "../styles/Toolbar.module.css"
import Image from "next/image"

export const Toolbar = () => {
    const router = useRouter();

    return (
        <div className={styles.main}>


            <img onClick={() => router.push('/')}
                src="/favicon/logo.png"
                alt="Picture of the author"

            />

            <div onClick={() => router.push('/feed/1')}>Feed</div>
            <div onClick={() => router.push('/aboutme')}>About</div>
        </div>
    )

};