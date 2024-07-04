export default function ButtonLangage({ title }: { title: string }) {
  return (
    <button
      type="button"
      className="flex justify-center items-center w-12 h-10 rounded-md bg-white opacity-15 text-xl"
    >
      {title}
    </button>
  );
}
