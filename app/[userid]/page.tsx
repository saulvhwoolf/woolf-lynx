import styles from '../page.module.css'

import LynkList from "@/app/backing/LynkList";


type Props = {
    params : { userid : string}
}

export default async function GetUserPage(props : Props) {
    return (
        <main className={styles.lynkPage}>
            <h1>{props.params.userid}'s lynx</h1>
            <LynkList userFilter={props.params.userid}/>
        </main>
    )
}


