import { useRouter } from "next/router"
import { useState } from "react";
import styles from "../styles/Toolbar.module.css"


export const Toolbar = () => {
    const router = useRouter();
    const [activePage, setActivePage] = useState("");

    const pageClicked = (page) => {
        if (page === "about"){
             router.push('/aboutme') 
        }else if (page === "feed") {
            router.push('/feed/1')  
        }else {
            router.push('/')
        }
    }


    return (
        <div className={styles.main}>
            <div  className={styles.logo}>
            <img onClick={() => pageClicked("home")}
                src="/favicon/logo2.png"
                alt="Picture of the author"
            />
            </div>

            <div onClick={() =>  pageClicked("feed")}>Feed</div>
            <div onClick={() => pageClicked("about")}>About</div>
        </div>
    )

};