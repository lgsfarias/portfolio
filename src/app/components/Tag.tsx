type TagProps = {
  name: string;
  selected?: boolean;
  onClick?: () => void;
};

export default function Tag({ name, selected = false, onClick }: TagProps) {
  return (
    <div
      className={`flex items-center justify-center p-2 rounded-xl cursor-pointer fon-bold ${
        selected
          ? 'bg-indigo-900 text-white border-2 border-indigo-900'
          : 'bg-transparent border-2 border-white text-white'
      }`}
      onClick={onClick}
    >
      {name}
    </div>
  );
}
