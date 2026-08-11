import { forwardRef, useImperativeHandle, useRef } from 'react';

const FancyInput = forwardRef((_, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusAndClear: () => {
      inputRef.current.focus();
      inputRef.current.value = "";
    }
  }));

  return <input ref={inputRef} type="text" placeholder="Type here..." />;
});

export default function Index() {
    const childRef = useRef(null);

    const handleClick = () => {
        childRef.current.focusAndClear();
    }

    return (
        <>
            <FancyInput ref={childRef} />
            <button onClick={handleClick}>Focus and Clear</button>
        </>
    )
}

