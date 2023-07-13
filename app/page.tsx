import styles from './page.module.css'
import Lynks from "@/app/backing/Lynks";

export default function Home() {
  return (
    <main className={styles.lynkPage}>
      <h1>All lynks and then some </h1>
      <Lynks userFilter={null}/>
    </main>
  )
}
