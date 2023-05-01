import prisma from '@/lib/prisma';
import Card from '@/components/Card';
async function getTodoNext() {
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      todo: true,
      date: true,
    },
  });
  return data;
}

export default async function TodoNext() {
  const todoNext = await getTodoNext();

  return (
    <div className="p-4 text-slate-100 space-y-4">
      <h1 className=" text-center text-xl mb-4 font-serif"> To Do Next</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4">
        <Card todoNext={todoNext} />
      </div>
    </div>
  );
}
