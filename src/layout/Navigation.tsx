import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <button><NavLink to='/'>Tasks</NavLink></button>
            <button><NavLink to='/users'>Users</NavLink></button>
            <button><NavLink to='/photos'>Photos</NavLink></button>
        </nav>
    )
}

export default Navigation