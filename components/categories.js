import { useRouter } from "next/router"
import styles from  "../styles/Categories.module.css"

export const Categories = () => {
    const router = useRouter();

    return (
        <>
            <div className={styles}>
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <a className="navbar-brand" href="#">Categories</a>
                    <span className="dropdown-toggle"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item navshit">
                            <a className="nav-link" onClick={() => router.push('/business/1')}>Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => router.push('/entertainment/1')}>Entertainment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => router.push('/general/1')}>General</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"onClick={() => router.push('/Health/1')}>Health</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => router.push('/science/1')}>Science</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => router.push('/sports/1')}>Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => router.push('/technology/1')}>Technology</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </>

    )
}

