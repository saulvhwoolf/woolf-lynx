import styles from './page.module.css'
import LynkList from "@/app/backing/LynkList";

export default function Home() {
  return (
    <main className={styles.lynkPage}>
      <h1>Our Lynx Page</h1>
      <LynkList userFilter={null}/>
    </main>
  )
}
