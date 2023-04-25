import { AddTodo } from "./AddTodo";
import { TodoLists } from "./TodoLists";
import { TodoHeader } from "./TodoHeader";

export function TodoContent() {
  return (
    <main className="content">
      <TodoHeader />

      <AddTodo />

      <TodoLists />
    </main>
  );
}
