import React from 'react';
import { ITodoItemProps } from '../../interfaces/ITodoItemProps';
import styles from './Todos.module.css';

const TodoItem = React.memo((props: ITodoItemProps) => {
  const {
    todo,
    index,
    animationsEnabled,
    setShowConfetti,
    dispatch,
    formatTodoText,
  } = props;

  return (
    <li className={styles.todo}>
      <section className={styles.author}>
        <span
          title={todo.user.name}
          aria-label={`Created by ${todo.user.name}`}
        >
          <div>{todo.user.icon}</div>
          <div>{todo.user.name}</div>
        </span>
      </section>
      <span>{formatTodoText(todo.text, index)}</span>

      <div className={styles.actionsContainer}>
        <button
          aria-label={todo.done ? 'Mark as todo' : 'Mark as done'}
          onClick={() => {
            const nextDoneState = !todo.done;

            if (nextDoneState && animationsEnabled) {
              setShowConfetti(true);
            }

            dispatch({
              type: 'update',
              todo: {
                ...todo,
                done: nextDoneState,
              },
            });
          }}
        >
          {todo.done ? '✅' : '⚪️'}
        </button>
        <button
          aria-label='Delete task'
          onClick={() => {
            dispatch({
              type: 'delete',
              id: todo.id,
            });
          }}
        >
          🗑️
        </button>
      </div>
    </li>
  );
})

export default TodoItem;

