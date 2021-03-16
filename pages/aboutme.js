import { Toolbar } from "../components/toolbar";
import styles from "../styles/AboutMe.module.css"
export const EOM = () => {
    return(
        <div className='page__container'>
            <Toolbar/>
            <div className={styles.main}>
                <h1>News App Developer</h1>
                <div className={styles.aboutMe}>
                    <h3>Beni Mahat</h3>
                    <h6>Full Stack Web Developer</h6>
                    <img src="https://avatars.githubusercontent.com/u/69019321?s=460&u=74a1a434940945b562698fca7175c461eb73d7c7&v=4"/>
                    <p>Full Stack Web Developer passionate about creating an ideal user experience with React. Aspiring to master all React libraries and technologies, I stay innovative by challenging myself to implement new technologies in every project. Recently received a Certificate in Web Development from Denver University. Excellent interpersonal communicator and a proactive collaborator valued on team-based projects and resourceful individually. Deadline driven, I establish measurable goals and resiliently work to achieve them. Currently I am seeking an environment where I can professionally utilize and grow my skills as a developer.</p>

                </div>
                
            </div>
        </div>
    )
};


export default EOM;