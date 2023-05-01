'use client';

import Input from './Input';
import { useRouter } from 'next/navigation';
export default function FormTodo() {
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: formData.get('todo'),
        date: formData.get('date'),
        time: formData.get('time'),
      }),
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
    e.target.reset();
    router.push('/todonext');
  }

  return (
    <div className="grid grid-cols-1 place-items-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 space-y-4 p-4 w-[80vw] md:w-[40vw]">
        <div className="flex flex-col gap-4">
          <label className="text-slate-100 font-serif">Todo</label>
          <Input type="text" name="todo" placeholder="add your task" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-slate-100 font-serif">Date</label>
          <Input type="date" name="date" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-slate-100 font-serif">Time</label>
          <Input type="time" name="time" />
        </div>
        <div className="text-end">
          <button type="submit" className="bg-sky-200 text-black px-6 py-2 rounded-md hover:bg-sky-800 hover:font-semibold hover:text-white">
            {' '}
            Add{' '}
          </button>
        </div>
      </form>
    </div>
  );
}
