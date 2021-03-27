import { Toolbar } from "../components/toolbar";
import Layout from "../components/Layout"
import styles from "../styles/AboutMe.module.css"
import Typewriter from 'typewriter-effect';

import GitHubIcon from '@material-ui/icons/GitHub';
export const EOM = () => {
    return (
        <Layout>
            <div>
                <div className={styles.main}>
                    <div className={styles.aboutApp}>
                        <h1 className={styles.aboutHeader}><span>NEXT</span> NEWS</h1>
                        <p>Find the Latest News Articles from<span> NewsApi.Org</span> Built Using <span>React/Next.js</span> for <span>SSR/SEO</span> And a mobile friendly <span>Responsive UI</span> </p>

                    </div>


                    <div className={styles.aboutMe}>
                        <img src="https://avatars.githubusercontent.com/u/69019321?s=460&u=74a1a434940945b562698fca7175c461eb73d7c7&v=4" />
                        <div>
                            <div className={styles.header}>
                                <h1>Developer</h1>
                                <h3>Beni Mahat</h3>
                                <h5>
                                    <Typewriter options={{
                                        strings: ["Full Stack Web Apps", 'React/Next.js', "Node/Express.js", "Responisve UI Desgin"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                        onInit={(typewriter) => {
                                            typewriter.start();
                                        }}
                                    /></h5>
                            </div>
                            <div className={styles.buttons}>
                                <div><button  onClick={() => (window.location.href = "https://github.com/benimahat1291/NextNewsApp" )} type="button" className={styles.button}><span>View App Repo</span></button></div>
                                <div><button onClick={() => (window.location.href = "https://benimahat1291.github.io/portfolio2021/#/" )} type="button" className={styles.button}><span>View Profile</span></button></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Layout>
    )
};


export default EOM;