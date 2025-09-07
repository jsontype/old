import { ObjectId } from "mongodb"
import { connectDB } from "@/app/api/connectDB"

import React from "react"

export default async function page(props) {
  const db = (await connectDB).db("db1")
  const result = await db
    .collection("bbs1")
    .findOne({ _id: new ObjectId(props.params.id) })

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>제목: {result.title}</h4>
      <p>내용: {result.content}</p>
      <h5>작성자: {result.writer}</h5>
    </div>
  )
}
