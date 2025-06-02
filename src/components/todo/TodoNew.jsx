const TodoNew = (props) => {
    console.log("props check: ", props);
    const { addNewTodo } = props;
    // addNewTodo()
    const handleClick = () => {
        alert("click me")
    }
    const handleOnChange = (name) => {
        console.log(">>>> check handleOnChange", name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    );
}
export default TodoNew;