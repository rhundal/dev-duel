import '../App.css';
import InspectComponent from '../components/InspectComponent';
import { useState } from 'react';
import { inspectUser } from '../services/userService';

const Inspect = () => {


    const [user, setUser] = useState(inspectUser());        // set default user

    return (

        <>

            {/* <h2> Printing - {user.length} </h2> */}

            <InspectComponent props={user} />

        </>
    );
}

export default Inspect;