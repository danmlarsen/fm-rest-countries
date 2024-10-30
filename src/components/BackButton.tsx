export default function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="px-8 py-3 shadow-md" onClick={onClick}>
      &larr; Back
    </button>
  );
}
