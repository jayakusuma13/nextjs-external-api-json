import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Layout({children, home}){
    return (
        <div className={utilStyles.container}>
            {home?(<><h1>Helo</h1><img src='./images/Profile.jpg' className={utilStyles.borderCircle} height={108} width={108}></img></>):(<><h1>Hi</h1><img src='./images/secondProfile.png' className={utilStyles.borderCircle}></img></>)}
            {children}
            {home?(<></>):(<><a href='/'>Go Back</a></>)}
        </div>
        )
}