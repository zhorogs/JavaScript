export default function TabButton({ children, onClick }) {

    function handleClick() {

    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}