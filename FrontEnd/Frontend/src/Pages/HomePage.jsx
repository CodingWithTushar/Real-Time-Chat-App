import React from 'react'
import { useChat } from '../hooks/useChat'

const HomePage = () => {
 const {users , messages , userId} =  useChat()
  return (
    <div className='h-screen grid grid-cols-3'>
      <div className='flex items-center grid-cols-1 bg-red-500'>
        <SideBar/> 
        {!selectedUser ? <NoChatSelected/> : <Chat/>}
      </div>
      <div className='col-span-2 bg-blue-500'>

      </div>

    </div>
  )
}

export default HomePage