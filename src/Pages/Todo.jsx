import { useRef } from "react";
import { connect } from "react-redux"
import { TODO_ACTION_TYPES } from "../actions/todos.actions";

function Todo({ todos = [], saveTodo = () => {} }) {
const taskRef = useRef(null);

 function onSave(e) {
    e.preventDefault();

    const task = taskRef.current.value;

    if(task) {
        saveTodo(TODO_ACTION_TYPES.SAVE_TODO, task);
    } else {
        alert("There is no task");
    }

 }

  return (
    <div>
        <div>
            <input ref={taskRef}  placeholder="Enter your task"  />
            <button onClick={onSave}>Save</button>
        </div>
        <div>
            <ul>
               {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
        </div>
    </div>
  )
}

const mapStateToProps = (state = {}) => {
  return {
      todos: state.todos.data || [],
  };  
};

const mapDispatchToProps = (dispatcher) => {
  return {
      saveTodo: (type, payload) => dispatcher({type, payload})
  };
};

Todo.propTypes = {
    todos: Array,
    saveTodo: Function,
};

export default  connect(mapStateToProps, mapDispatchToProps)(Todo);
