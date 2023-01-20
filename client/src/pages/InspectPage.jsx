import '../App.css';
import InspectComponent from '../components/InspectComponent';
import { useState } from 'react';
import { inspectUser } from '../services/userService';

// display or call inspectcomponenetresult here 

// testing userParmams below
import { useParams } from 'react-router-dom';


const Inspect = () => {


    const [user, setUser] = useState(inspectUser());        // set default user

    //const { userName } = useParams(user.uesrname);

    return (

        <InspectComponent props={user} />
    );
}

export default Inspect;