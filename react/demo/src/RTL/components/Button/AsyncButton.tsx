import { useEffect, useState } from "react";

export default function AsyncButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {show && <button>Click me</button>}
    </>
  );
}