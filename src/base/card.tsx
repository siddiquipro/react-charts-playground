type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Card(props: Props) {
  return (
    <div className="bg-white rounded shadow-sm">
      <header className="px-4 py-2 border-b border-gray-200">
        <h2 className="text-xl font-bold  "> {props.title} </h2>
      </header>

      <div className="px-4 py-2 w-full">{props.children}</div>
    </div>
  );
}
