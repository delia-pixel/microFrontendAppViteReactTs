export default function ButtonLangage({ title }: { title: string }) {
  return (
    <button
      type="button"
      className="flex justify-center items-center w-12 h-10 rounded-md bg-black text-white opacity-80 text-xl"
    >
      {title}
    </button>
  );
}
