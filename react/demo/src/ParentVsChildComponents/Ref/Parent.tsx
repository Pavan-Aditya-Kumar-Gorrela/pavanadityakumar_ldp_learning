import { forwardRef } from "react";
import { useRef } from "react";

const Child = forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} placeholder="Type here" />;
});

const Parent = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
         <>
      <button
        onClick={() => inputRef.current?.focus()}
      >
        Focus Input
      </button>

      <Child ref={inputRef} />
    </>
    )
}

export default Parent;