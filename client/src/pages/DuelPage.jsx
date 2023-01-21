import '../App.css';
import DuelComponent from '../components/DuelComponent';
import { duelUsers } from '../services/userService';
import { useState } from 'react';


const Duel = () => {

    const [users, setUsers] = useState(duelUsers());        // set default user

    const { user1, user2 } = users;

    return (

        <DuelComponent>
            {user1} {user2}
        </DuelComponent>

    );
}

export default Duel;