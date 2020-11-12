import { Request, Response } from 'express';
import { ITodo } from '../../types/todo';
import Todo from "../../models/todo";

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try{
    const todos: ITodo[] =  await Todo.find();
    res.status(200).send({ todos });
  }catch(err){
    throw err;
  }

}

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try{
    //const body = req.body as Pick<ITodo, "name" | "status" | "description " >;
    const todo: ITodo = new Todo({ 
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
    });
    const newTodo: ITodo = await todo.save();
    const allTodos: ITodo[] = await Todo.find();
    res.status(201).json({message: "Todo added", todo: newTodo, todos: allTodos});
  }catch(err){
    throw err;
  }

}

const updateTodo = async (req: Request, res: Response):Promise<void> => {
  try{
    const {
      params: {id},
      body,
    } = req;
    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allTodos: ITodo[] = await Todo.find();
    res.status(200).json(
      {message: "Todo updated",
       todo: updateTodo,
       todos: allTodos,
      }
    );
  }catch(err){
    throw err;
  }

}


const deleteTodo = async (req: Request, res: Response):Promise<void> => {
  try{
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
      req.params.id
    );
    const allTodos: ITodo[] = Todo.find();
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    });
    
  }catch(err){
    throw err;
  }
}


export { getTodos, addTodo, updateTodo, deleteTodo };
