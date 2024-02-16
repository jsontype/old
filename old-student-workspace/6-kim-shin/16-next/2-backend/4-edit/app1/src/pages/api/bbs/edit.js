import { ObjectId } from "mongodb"
import { connectDB } from "@/app/api/connectDB"

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목은 필수입니다.")
    }
    try {
      const newData = {
        title: req.body.title,
        content: req.body.content,
      }
      const db = (await connectDB).db("db1")
      await db
        .collection("bbs1")
        .updateOne({ _id: new ObjectId(req.body._id) }, { $set: newData })
      return res.redirect(302, "/bbs")
    } catch (error) {
      console.log(error)
    }
  }
}
