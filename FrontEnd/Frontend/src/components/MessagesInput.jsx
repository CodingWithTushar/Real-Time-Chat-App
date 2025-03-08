import React, { useRef, useState } from 'react'

const MessagesInput = () => {


    const [text, settext] = useState("")
    const [imagePreview, setimagePreview] = useState(null)
    const fileInputRef = useRef(null)
  return (
    <div>MessagesInput</div>
  )
}

export default MessagesInput