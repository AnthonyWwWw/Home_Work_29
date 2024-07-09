import { useSelector } from 'react-redux';

function Footer() {
    const tasks = useSelector((state) => state.tasks);

    return(
        <footer style={{position: "relative", left:0}}>Загальна кількість завдань: {tasks.length}</footer>
    )
}

export default Footer;