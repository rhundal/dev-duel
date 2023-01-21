import '../App.css';
import DuelComponent from '../components/DuelComponent';
import { duelUsers } from '../services/userService';
import { useState } from 'react';


const Duel = () => {

    const [fetchedUsers, setUser] = useState(duelUsers());        // set default user

    return (

        <>
            <DuelComponent props={fetchedUsers} />

        </>
    );
}

export default Duel;