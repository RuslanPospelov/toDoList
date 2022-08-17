import React from "react";

import { useToDoStore } from '../../data/store/useToDoStore'
import { InputPlus } from "../components/InputPlus/InputPlus";
import { InputTask } from "../components/InputTask/InputTask";

import styles from './index.module.scss';

export const App: React.FC = () => {
const [
  tasks,
  createTask,
  updateTask,
  removeTask
] = useToDoStore(state => [
  state.tasks,
  state.createTask,
  state.updateTask,
  state.removeTask,
])

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>Todo List</h1>
      <section className={styles.articleSection}>
        <InputPlus 
          onAdd={(title) => {
            if(title){
              createTask(title)
            }
          }}
        />
      </section>
      <section className={styles.articleSection}>
          {!tasks.length && (
            <p className={styles.articleText}>Записей ещё нет</p>
          )}
          {tasks.map((task) => (
            <InputTask
            key={task.id}
            id={task.id}
            title={task.title}
            onDone={removeTask}
            onEdit={updateTask}
            onRemove={removeTask}
            />
          ))}
      </section>
    </article>
  );
}
