export default function Add({ params }) {
  const { a, b } = params;
  const sum = parseInt(a) + parseInt(b);
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Add</h1>
      <p className="text-xl">
        {a} + {b} = {sum}
      </p>
    </div>
  );
}
