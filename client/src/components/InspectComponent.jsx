import '../../src/App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { inspectUser } from '../services/userService';
import InspectResultComponent from './InspectResultComponent';

const InspectComponent = ({ props }) => {

    //  let [userName, setUserName] = useState(props.username); // setting value passed in

    // const [user, setUser] = useState(props.children);

    //  const [userName, setUserName] = useState(props[0]);

    const [user, setUser] = useState({ props });
    //  let enteredUser = document.getElementById("userName0");
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
                                    value={userName} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {/* onClick={(e) => setUserName(userName === "" ? userName = "rhundal" : e.target.value)}  */}
                                <button onClick={() => handleLookupUserName()} id='styleBtnInspect'> Inspect
                                    {/* <Link
                                            to={{
                                                pathname: "/inspectresult",
                                                state: {

                                                    username: user.username,
                                                    name: user.name,
                                                    location: user.location,
                                                    bio: user.bio,
                                                    // ['avatar-url']: user.data['avatar-url'],
                                                    titles: [
                                                        user.titles
                                                    ],
                                                    // ['favorite-language']: user.data['favorite-language'],
                                                    // ['public-repos']: user.data['public-repos'],
                                                    // ['total-stars']: user.data['total-stars'],
                                                    // ['highest-starred']: user.data['highest-starred'],
                                                    // ['perfect-repos']: user.data['perfect-repos'],
                                                    followers: user.followers,
                                                    following: user.following
                                                }
                                            }}
                                        > Inspect</Link> */}
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