import React, { useState } from 'react'
import { X } from 'lucide-react'


const App = () => {
  const [tittle, setTittle] = useState('')
  const [content, setContent] = useState('')

  const [task, settask] = useState([])
  
 const submit = (e) => {
  e.preventDefault()
  
  // Prevent empty notes
  if (!tittle.trim() || !content.trim()) {
    alert('Please fill in both title and content!')
    return
  }
  
  const newTask = [...task];    
  newTask.push({tittle, content})
  settask(newTask)
  
  console.log(task)
  
  setTittle('')
  setContent('')
}

const deleteTask = (index) => {
  const newTask = [...task];
  newTask.splice(index, 1);
  settask(newTask);
}
 
  return (
    <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 min-h-screen'>
      <form onSubmit={(e) => submit(e) } className='flex flex-col gap-6 lg:gap-10 p-5 lg:w-1/3'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>App Notes</h1>
        <input className='border-black rounded border-2 p-3 w-full'
         type="text" placeholder='tittle of note'
         value={tittle}
         onChange={(e)=>{
          setTittle(e.target.value)
         }}
         />
        <textarea className='border-black rounded border-2 px-5 py-2 h-32 md:h-40 lg:h-50 w-full' type="text" placeholder='content of note' 
        value={content} 
        onChange={(e)=>{ setContent(e.target.value) 

        }} />
        <button className='bg-blue-300 hover:bg-blue-400 transition-colors rounded border-2 p-3 w-full'>Add Notes</button>
      </form>
      <div className='border-t-2 lg:border-t-0 lg:border-l-2 border-black p-5 lg:flex-1'>
        <h1 className='mb-5 text-3xl md:text-4xl lg:text-5xl font-bold'>Recent Notes</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {task.map((item, index) => {
            return (
              <div id="r" key={index} className='relative h-40 md:h-48 lg:h-50 rounded-2xl bg-amber-900 p-5 text-white'>
                <button className='absolute top-3 right-3 hover:opacity-70 transition-opacity' onClick={() => deleteTask(index)}>
                  <X />
                </button>
                <h1 className='text-xl font-bold mb-3'>{item.tittle}</h1>
                <p>{item.content}</p>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default App
