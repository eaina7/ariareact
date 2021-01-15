import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function Todolist() {
    let [todolist, setToDoList] = useState([
        {
          id: uuidv4(),
          text: "first todo",
          done: false
        },
        {
           id: uuidv4(),
           text: "second todo",
           done: false
        }
       
      ]);

      let deleteHandler = (id) => {

        let newToDoList = todolist.filter((item) => item.id !== id);
       
          setToDoList(newToDoList);
        
        };
      let completeHandler = () => {
          setToDoList(todolist.map(item =>{
            if (item.id === todolist.id) {
              return {
                ...item,done:!item.done,
              };
            }
            return item;
          })
            
            );
        };   
        
    return (
        <div>
           <h1>-------------------------FIRST PART-------------------------</h1> 
           <ul>
      {todolist.map((item) => (
        <ul key={item.id}> {item.text} {item.done}
        
  
          <button type="button" onClick={() => deleteHandler(item.id)}>
            Delete
          </button>
          <li className = {`todo-item ${item.done ? "completed" : ""}`} >
      <button onClick= {completeHandler} className= "complete-btn">Complete 
          

      </button>
      </li>
          </ul>
      ))}
      </ul>      
      
    </div>
        
        
    );
      };


export default Todolist

