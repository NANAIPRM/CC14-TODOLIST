import { TodoItem } from "./Todoitem";

export function TodoLists({ todos }) {
  return (
    <ul>
      {todos.map((todoObj) => (
        <TodoItem key={todoObj.id} todo={todoObj} />
      ))}
    </ul>
  );
}
