import '../../src/App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { inspectUser } from '../services/userService';
import InspectResultComponent from './InspectResultComponent';


const InspectComponent = ({ props }) => {


    const [user, setUser] = useState({ props });

    const [searched, setSearched] = useState(false);

    const [userName, setUserName] = useState(props.username);


    const handleLookupUserName = async () => {
        setSearched(false);
        let foundUser = await inspectUser(userName);           // look up passed in user

        setUser(foundUser);
        setSearched(true);

    };

    return (
        <>
            <div className='inspectComp'>

                <table className='styleTable'>
                    <tbody>

                        <tr>
                            <td>
                                <input type="text" id="userName0" name="username0"
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => handleLookupUserName()} id='styleBtnInspect'> Inspect

                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2> {userName}</h2>
            </div>

            <br />
            <br />
            {searched ? <InspectResultComponent userProps={user} /> : null}
        </>
    );

};

export default InspectComponent;