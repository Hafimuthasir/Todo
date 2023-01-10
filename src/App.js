import './App.css';
import {useState} from 'react'



function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')

  function deleteTodo(id){
    const deleteTodo=[...toDos].filter(obj2 => obj2.id !== id)
    setToDos(deleteTodo)
  }

 

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Enter your Tasks </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      
      <div className="todos">
        { toDos.map((value)=>{

       return ( <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
            console.log(e.target.checked)
            console.log(value)
            setToDos(toDos.filter(obj=>{
              if (obj.id===value.id){
                obj.status=e.target.checked
              }
              return obj
            }))
          }
            }
            value={value.status} type="checkbox" name="" id="" />
            <p>{value.text}</p>
            
          </div>
          <div className="right">
            <i onClick={()=> deleteTodo(value.id)} className="fas fa-times"></i>
          </div>
          </div>
          )

        })}
  <h1>Completed Task :</h1>

    {toDos.map((value)=>{
      if (value.status){
        return(<p style={{color:"green"}}>{value.text}</p>)
      }
      
      return null
    })}
      
        
      </div>
    </div>
  );
}

export default App;
