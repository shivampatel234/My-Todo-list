"use client"
import React,{useState} from 'react'
import Navbar from '@/components/Navbar';



const page = () => {
  // const [marks, setmark]= useState("Vikas");
  // const [user, setuser]= useState("shivam");

  const [title,settitle] = useState("");
  const [des,setdes] = useState("");
  const [maintask, setmaintask] = useState([])

  const submitHander = (e)=>{
    e.preventDefault()
   setmaintask([...maintask,{title,des}])
    settitle("")
    setdes("")
    console.log(maintask)
  }

  let btn = ((i)=>{
    let copyTask = [...maintask]
    copyTask.splice(i,1)
    setmaintask(copyTask)
    
   
  
  })
  
 
  let redertask = <h2>No Task Available</h2>;
  if(maintask.length>0){
      redertask = maintask.map((t,i) =>{
        return(
          <li>
          <div className='flex justify-between mb-5'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-semibold'>{t.des}</h6>
            <button onClick={()=>{
              btn(i)
            }} className='bg-red-400 text-white px-3 py-2 mt-2 rounded font-bold'>Delete</button>
          </div>


          </li>
         
        )
        
      })

    }
return (
    <>
    {/* <div className="bg-[#171d32] h-auto w-full overflow-hidden"></div>
     <h1 className='font-bold text-xl'>Your Name {marks},Your LastName is {Smarks}</h1>
     <button onClick={()=>{
      setmark('vikas')
      setSmark('pandey')
     }}>Click Me</button> */}
     {/* <Navbar user={user} /> */}
     {/* <h1>Hello My Name is {user}</h1>
     <button onClick={()=>{
      setuser("Vikas")
     }}>Click Me</button> */}
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'> Shivam Todo List</h1>
    <form onSubmit={submitHander}>
      <input 
      type="text"
      className='text-2xl border-zinc-800 border-4 m-8 px-4 py2'
      placeholder='Enter Task Here'

      value={title}
      onChange={(e)=>{
        settitle(e.target.value)

      }
      }
      
      />

     <input 
      type="text"
      className='text-2xl border-zinc-800 border-4 m-8 px-4 py2'
      placeholder='Enter Description Here'
      
      value={des}
      onChange={(e)=>{
        setdes(e.target.value)

      }
    }
      
      />

      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-8'>Add Task</button>
      </form> 

      <div className='p-8 bg-slate-200'>
        <ul>
          {redertask}
        </ul>
        </div>                                  
    

    
    
    </>

   
  )
}

export default page


 




  

