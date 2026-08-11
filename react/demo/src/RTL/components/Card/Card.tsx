interface Props {
  title: string;
}

export default function Card({
  title,
}: Props) {
  return (
    <div>
      <h2>{title}</h2>

      <button>Edit</button>

      <button>Delete</button>
    </div>
  );
}