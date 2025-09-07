import { connectDB } from "@/app/api/connectDB"

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목은 필수입니다.")
    }
    try {
      const db = (await connectDB).db("db1")
      await db.collection("bbs1").insertOne(req.body)
      return res.redirect(302, "/bbs")
    } catch (error) {
      console.log(error)
    }
  }
}
