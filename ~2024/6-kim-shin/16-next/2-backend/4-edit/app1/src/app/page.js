import styles from "./page.module.css"
import { connectDB } from "@/app/api/connectDB"

export default async function Home() {
  const db = (await connectDB).db("db1")
  const result = db.collection("bbs1").find().toArray()

  console.log(result)

  return (
    <>
      <div className={styles.red}>Hello World</div>
    </>
  )
}
