export default function TabButton({ children, onClick }) {

    function handleClick() {
        console.log("hello world")
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}