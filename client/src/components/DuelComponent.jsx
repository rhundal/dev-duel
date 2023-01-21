import '../../src/App.css';
import { Link } from 'react-router-dom';
import DuelResultComponent from './DuelResultComponent';
import { inspectUser, duelUsers } from '../services/userService';
import { useState } from 'react';


const DuelComponent = ({ props }) => {


    const [users, setUsers] = useState({ props });

    const [searchedUsers, setSearchedUsers] = useState(false);


    const user1 = useState(props);
    const user2 = useState(props);

    const [userName1, setUserName1] = useState(user1.username);
    const [userName2, setUserName2] = useState(user2.username);

    ///////////////////////////////////////////////////////////



    const handleLookupUserNames = async () => {

        setSearchedUsers(false);

        let foundUsers = await duelUsers(userName1, userName2);

        const { foundUser1, foundUser2 } = foundUsers;

        setUsers(foundUsers);
        setSearchedUsers(true);

    };

    return (
        <>
            <div className='duelComp'>

                <table className='styleTable'>
                    <tbody>

                        <tr>
                            <td>
                                <input type="text" id="userName1" name="userName1"
                                    onChange={(e) => setUserName1(e.target.value)}
                                />

                            </td>
                            <td>

                                <input type="text" id="userName2" name="userName2"
                                    onChange={(e) => setUserName2(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {/* <button id='styleBtnInspect'><Link className='styleLink' to='/duelresult'> Duel </Link></button> */}

                                <button onClick={() => handleLookupUserNames()} id='styleBtnInspect'> Duel </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2> {userName1} {userName2}</h2>
            </div>

            <br />
            <br />

            {searchedUsers ? <DuelResultComponent user={users} /> : null}
        </>
    );

};

export default DuelComponent;