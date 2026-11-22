import type { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
};

function isOverdue(dueDate: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(`${dueDate}T00:00:00`) < today;
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <li>
      <strong>{todo.title}</strong>
      <span> {todo.completed ? "(完了)" : "(未完了)"}</span>
      {todo.dueDate && (
        <span style={{ color: isOverdue(todo.dueDate) ? "red" : undefined }}>
          {" "}期限: {todo.dueDate}
        </span>
      )}
    </li>
  );
}
