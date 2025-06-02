const TodoData = (props) => {
    //props la mot object
    const { name, age, data } = props;
    console.log(">>> check props:", props)

    return (
        <div className='todo-data'>
            <div>My name is {props.name}</div>
            <div >Learning React</div>
            <div>Watching Youtobe</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>

    );
}
export default TodoData;