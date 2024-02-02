import AddButton from "./components/todo-add-button";
import TodoItem from "./components/todo-item";
import TodoTitle from "./components/todo-title";

export default function Home() {
  return (
    <div className="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
      <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
        <TodoTitle />
        <TodoItem />
        <AddButton />
      </div>
    </div>
  );
}
