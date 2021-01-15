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
      let completeHandler = (id) => {
          setToDoList(todolist.map(item =>{
            if (item.id === id) {
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
        <div className={item.done? "completed" : ""} key={item.id}> {item.text} {item.done}
        
  
          <button type="button" onClick={() => deleteHandler(item.id)}>
            Delete
          </button>
            <button onClick= {() => completeHandler(item.id)} className= "complete-btn">Complete 
          
          

      </button>
          </div>
      ))}
      </ul>      
      
    </div>
        
        
    );
      };


export default Todolist

