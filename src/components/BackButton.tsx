export default function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="px-8 py-3 shadow-md transition duration-300 hover:-translate-y-1 dark:bg-blue-500"
      onClick={onClick}
    >
      &larr; Back
    </button>
  );
}
