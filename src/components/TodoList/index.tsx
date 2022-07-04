import React, { ReactElement,FC, useCallback, useState, useEffect } from "react";
import TdList from "./List";
import TdInput from "./Input";
import { ITodo } from "./typings";

const TodoList:FC = ():ReactElement=>{

    const [todoList,setTodoList] = useState<ITodo[]>([]);

    useEffect(()=>{
        console.log(todoList)
    },[todoList])
    const addTodo = useCallback((todo:ITodo)=>{
        setTodoList(todoList => [...todoList,todo])
    },[])


    return (
        <div className="todo-list">
            <TdInput addTodo={addTodo} todoList={todoList}></TdInput>
            <TdList></TdList>
        </div>
    );
}

export default TodoList;