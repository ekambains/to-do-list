import TodoCard from "./TodoCard";

function TodoList(props){
    return(
        <ul className="main">
            {props.todos.map((todo,todoIndex) => {
                return(
                   
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
export default TodoList;