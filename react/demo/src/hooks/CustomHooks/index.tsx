import { useToggle } from './useToggle/index';

export default function Index() {
    const {val, toggle} = useToggle();

    return (
        <>
        <button onClick={toggle}>
            {val ? 'ON' : 'OFF'}
        </button>`
        </>
    )
};