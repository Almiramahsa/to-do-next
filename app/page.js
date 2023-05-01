import FormTodo from '@/components/FormTodo';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-slate-100 text-center text-xl mb-4 font-serif"> Form To Do </h1>
      <FormTodo />
    </main>
  );
}
