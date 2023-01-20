import '../../src/App.css';
import InspectComponent from './InspectComponent';
import { useState } from 'react';

const InspectResultComponent = ({ userProps }) => {

    const [user, setUser] = useState(userProps);

    // const [

    //     username,
    //     name,
    //     location,
    //     bio,
    //     avatarUrl,
    //     titles,
    //     favLanguage,
    //     publicRepos,
    //     totalStars,
    //     highestStarred,
    //     perfectRepos,
    //     followers,
    //     following
    // ] = userProps;



    //const [dUser, setUser] = useState({ userProps });


    return (
        <>


            <div className='displayResult'>

                <table className='styleTableResult'>
                    <tbody>
                        <tr>
                            <td className='tdStyle'>
                                <div>

                                    <p> image </p>

                                    <p> git bio</p>
                                </div>
                            </td>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label htmlFor='username0'> Username</label>

                                            </td>
                                            <td>
                                                <input type="text" id="username0" name="username0" value={user.username} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='name'> name</label>

                                            </td>
                                            <td>
                                                <input type="text" id="name" name="name" value={user.name} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='location'> location </label>

                                            </td>
                                            <td>
                                                <input type="text" id="location" name="location" value={user.location} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='titles'> titles </label>

                                            </td>
                                            <td>
                                                <input type="text" id="titles" name="titles" value={user.titles} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='favLanguage'> fav language </label>

                                            </td>
                                            <td>
                                                <input type="text" id="favLanguage" name="favLanguage" value={("user.favorite-language")} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='totalStars'> total stars </label>

                                            </td>
                                            <td>
                                                <input type="text" id="totalStars" name="totalStars" value={("user.total-stars")} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='highestStarCount'> hihgest start count </label>

                                            </td>
                                            <td>
                                                {/* <input type="text" id="highestStarCount" name="highestStarCount" value={user.highestStarcount} /> */}

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='publicRepos'> public repos </label>

                                            </td>
                                            <td>
                                                {/* <input type="text" id="publicRepos" name="publicRepos" value={publicRepos} /> */}

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='perfectRepos'> perfect repos </label>

                                            </td>
                                            <td>
                                                {/* <input type="text" id="perfectRepos" name="perfectRepos" value={perfectRepos} /> */}

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='followers'> followers </label>

                                            </td>
                                            <td>
                                                <input type="text" id="followers" name="followers" value={user.followers} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='following'> following </label>

                                            </td>
                                            <td>
                                                <input type="text" id="following" name="following" value={user.following} />

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </>
    );

};

export default InspectResultComponent;

{/* 

 

*/}