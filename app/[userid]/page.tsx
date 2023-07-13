import styles from '../page.module.css'

import Lynks from "@/app/backing/Lynks";


type Props = {
    params : { userid : string}
}

export default async function GetUserPage(props : Props) {
    return (
        <main className={styles.lynkPage}>
            <h1>{props.params.userid}'s lynks</h1>
            <Lynks userFilter={props.params.userid}/>

        </main>
    )
}


