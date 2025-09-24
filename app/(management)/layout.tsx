import React from 'react'
import SideBar from '../components/side-bar_2'


function ToolLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex min-h-screen'>
      <SideBar/>
      <main className='flex-1 p-6 bg-gray-100'>
        {children}
      </main>
    </div>
  )
}

export default ToolLayout
