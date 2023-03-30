import { Dispatch, SetStateAction } from "react";
import { TodoAction } from "../components/Todos/Todos";
import { ITodo } from "./ITodo";

export interface ITodoItemProps {
    todo: ITodo;
    animationsEnabled: boolean;
    setShowConfetti: Dispatch<SetStateAction<boolean>>;
    dispatch: Dispatch<TodoAction>;
    index: number;
    formatTodoText: (text: string, index: number) => string
}
