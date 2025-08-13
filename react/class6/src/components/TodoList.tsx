import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList(todo) {
    const listtodo = useSelector(()=)
  return (
    <ul className="todo-list">
      {/* Static examples — students will replace with mapped state */}
      <TodoItem text="Learn Redux basics" completed={false} />
      <TodoItem text="Write unit tests" completed={true} />
    </ul>
  );
}