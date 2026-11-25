import type { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
};

export function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <li>
      <strong>{todo.title}</strong>
      <span> {todo.completed ? "(完了)" : "(未完了)"}</span>
      {todo.dueDate && (
        <span style={{ color: isOverdue(todo.dueDate) ? "red" : undefined }}>
          {" "}
          期限: {todo.dueDate}
        </span>
      )}
      <button type="button" onClick={() => onToggle(todo.id)}>
        {todo.completed ? "未完了に戻す" : "完了にする"}
      </button>
    </li>
  );
}
