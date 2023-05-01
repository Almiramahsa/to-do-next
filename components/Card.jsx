'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Card({ todoNext }) {
  const router = useRouter();

  async function delTodo(id) {
    const res = await fetch(`/api/todos/${id}`, { method: 'DELETE' });
    const data = await res.json();

    console.log(data);

    router.refresh();
  }
  return todoNext.map((todo) => (
    <div key={todo.id} className="bg-gray-800 p-4 relative rounded-md mx-4 mt-6">
      <button onClick={() => delTodo(todo.id)} className="absolute top-2 right-4 text-white font-bold rounded-full">
        x
      </button>
      <div className="space-y-4">
        <h1 className="text-xl my-2">{todo.todo}</h1>
        <p>{todo.date}</p>
      </div>
      <div className="mt-4">
        <Link className="bg-sky-200 text-black px-6 py-2 rounded-md hover:bg-sky-800 hover:font-semibold hover:text-white" href={`/todonext/${todo.id}`}>
          Detail
        </Link>
      </div>
    </div>
  ));
}
