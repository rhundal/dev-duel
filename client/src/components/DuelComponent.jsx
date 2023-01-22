import '../../src/App.css';
import { Link } from 'react-router-dom';
import DuelResultComponent from './DuelResultComponent';
import { inspectUser, duelUsers } from '../services/userService';
import { Children, useEffect, useState } from 'react';


const DuelComponent = ({ props }) => {

    const [users, setUsers] = useState({ props });

    const [searched, setSearched] = useState(false);

    const [userName1, setUserName1] = useState(props.user1);
    const [userName2, setUserName2] = useState(props.user2);

    let foundUsers;

    const handleLookupUserNames = async () => {


        setSearched(false);

        foundUsers = await duelUsers(userName1, userName2);


        setUsers(foundUsers);

        setSearched(true);
    };



    return (
        <>

            <div className='duelComp'>

                <table className='styleTable'>
                    <tbody>

                        <tr>
                            <td>
                                <input type="text" id="userN1" name="userN1"
                                    onChange={(e) => setUserName1(e.target.value)}
                                />

                            </td>
                            <td>

                                <input type="text" id="userN2" name="userN2"
                                    onChange={(e) => setUserName2(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>

                                <button onClick={() => handleLookupUserNames()} id='styleBtnInspect'> Duel </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2> {userName1} {userName2} </h2>
            </div>


            <br />
            <br />

            {searched ? <DuelResultComponent userProp={users} /> : null
            }


        </>
    );

};

export default DuelComponent;