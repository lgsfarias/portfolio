type TagProps = {
  name: string;
};

export default function TagFilter({ name }: TagProps) {
  return (
    <div className="flex items-center justify-center p-2 rounded-xl cursor-pointer font-bold text-indigo-900 border-2 border-indigo-900 whitespace-nowrap shadow-md">
      {name}
    </div>
  );
}

export function TagSkeleton() {
  return (
    <div className="h-10 w-20 min-w-[80px] rounded-md bg-gray-200 animate-pulse" />
  );
}
