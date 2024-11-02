function TodoCard(props){
    const {children} = props
    return (
        
        <li className="todoItem">
            {children}
            <div className="actionsContainer">
                <button onClick={() => {
                    props.handleEditTodos(props.index)
                }}>
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    props.handleDeleteTodos(props.index)
                }}>
                    <i class="fa-solid fa-trash"></i>
                </button>
                
                
            </div>
        </li>
    )
}
export default TodoCard;