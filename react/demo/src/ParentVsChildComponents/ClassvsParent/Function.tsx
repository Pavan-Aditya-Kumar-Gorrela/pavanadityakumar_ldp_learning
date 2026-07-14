function Parent() {
  return <Child name="Aditya" />;
}

type ChildProps = {
  name: string;
};

function Child({ name }: ChildProps) {
  return <h1>{name}</h1>;
}

export default Parent;