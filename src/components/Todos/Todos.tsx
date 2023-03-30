import React, { useCallback, useContext, useReducer, useState, Suspense } from 'react';
import { ProfileContext } from '../../providers/ProfileProvider';
import { PartyContext } from '../../providers/PartyProvider';
import { generateRandomTodos } from '../../utils/utils';
import { ITodo } from '../../interfaces/ITodo';
import useWindowSize from '../../hooks/useWindowSize';
import TodoItem from './TodoItem';
import Loader from './Loader';
import styles from './Todos.module.css';

export type TodoAction =
  | { type: 'add' | 'update', todo: ITodo }
  | { type: 'delete', id: string };

const Confetti = React.lazy(() => import('./Confetti'));

const Todos = () => {
  const [todos, dispatch] = useReducer(todosReducer, generateRandomTodos(5));
  const [newTodoText, setNewTodoText] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const { currentUser } = useContext(ProfileContext);
  const { animationsEnabled } = useContext(PartyContext)
  const size = useWindowSize();

  const onAddNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      todo: {
        id: Date.now().toString(),
        done: false,
        text: newTodoText,
        user: currentUser,
      }
    });

    setNewTodoText('');
  };

  const formatTodoText = useCallback((text: string, index: number) => {
    return `${text.toLowerCase()} (${index + 1} of 500)`;
  }, [])

  return (
    <div className={styles.container}>
      <Suspense fallback={<Loader />}>
        <Confetti
          size={size}
          showConfetti={showConfetti}
          setShowConfetti={setShowConfetti}
        />
      </Suspense>

      <section className={styles.newTodoSection}>
        <form onSubmit={onAddNewTodo} className="form">
          <label htmlFor='newTodo'>
            <input
              type='text'
              id='newTodo'
              name='newTodo'
              value={newTodoText}
              onChange={(e) => {
                setNewTodoText(e.target.value);
              }}
              placeholder='What do you have to do today?'
            />

          </label>
          <button>submit</button>
        </form>
      </section>
      <ol className={styles.list}>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              dispatch={dispatch}
              formatTodoText={formatTodoText}
              setShowConfetti={setShowConfetti}
              animationsEnabled={animationsEnabled}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default Todos;

const todosReducer = (todos: ITodo[], action: TodoAction) => {
  switch (action.type) {
    case 'add': {
      return [
        ...todos,
        {
          id: action.todo.id,
          text: action.todo.text,
          done: action.todo.done,
          user: action.todo.user,
        },
      ];
    }
    case 'update': {
      return todos.map((t) => {
        if (t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    }
    case 'delete': {
      return todos.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action');
    }
  }
};
