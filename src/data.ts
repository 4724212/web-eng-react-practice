import type { Todo } from "./types";

export const todos: Todo[] = [
  { id: 1, title: "Reactを学ぶ", completed: true },
  { id: 2, title: "Propsを確認する", completed: false, dueDate: "2026-11-01" },
  { id: 3, title: "Stateを更新する", completed: false, dueDate: "2026-12-31" },
];
