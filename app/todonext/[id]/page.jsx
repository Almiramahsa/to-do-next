async function getTodo(id) {
  const data = await prisma.todo.findUnique({ where: { id: +id } });
  return data;
}

export default async function DynamicPage({ params }) {
  const { id } = params;
  const todo = await getTodo(id);

  return (
    <div className="text-slate-100 p-4 md:w-[50vw] lg:w-[30vw]">
      <div key={todo.id} className="bg-gray-800 p-4 rounded-md mx-4 mt-6">
        <div className="space-y-4">
          <h1 className="text-xl my-2">{todo.todo}</h1>
          <p className="text-lg">{todo.date}</p>
          <p className="text-lg">time: {todo.time}</p>
        </div>
      </div>
    </div>
  );
}
