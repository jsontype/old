import React from "react"

export default async function Write() {
  return (
    <div>
      <form action="/api/bbs/write" method="POST">
        <input type="text" name="title" placeholder="제목" />
        <input type="text" name="content" placeholder="글내용" />
        <button type="submit">전송</button>
      </form>
    </div>
  )
}
