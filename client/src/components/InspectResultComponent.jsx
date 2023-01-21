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



    let imgUrl = user['avatar_url'];


    let setMsg = '';

    return (
        <>
            <h3> Display Error Status: {user.message} </h3>

            <div className='displayResult'>

                <table className='styleTableResult'>
                    <tbody>
                        <tr>
                            <td className='tdStyle'>
                                <div>

                                    <p>
                                        <img src={imgUrl} alt='userImage' style={{ width: "250px", height: "200px" }} />
                                    </p>

                                    <p>
                                        <label htmlFor='bio'> {user.bio} </label>

                                    </p>
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
                                                <label htmlFor='username0'> {user.username} </label>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='name'> name</label>

                                            </td>
                                            <td>
                                                <label htmlFor='name'> {user.name} </label>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='location'> location </label>

                                            </td>
                                            <td>
                                                <label htmlFor='location'> {user.location} </label>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='titles'> titles </label>

                                            </td>
                                            <td>
                                                <label htmlFor='titles'> {user.titles} </label>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='favLanguage'> fav language </label>

                                            </td>
                                            <td>
                                                <label htmlFor='favLanguage'> {user['favorite-language']} </label>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='totalStars'> total stars </label>

                                            </td>
                                            <td>
                                                <label htmlFor='totalStars'> {user['total-stars']} </label>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='highestStarCount'> hihgest start count </label>

                                            </td>
                                            <td>
                                                <label htmlFor='highestStarCount'> {user['highest-starred']} </label>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='publicRepos'> public repos </label>

                                            </td>
                                            <td>
                                                <label htmlFor='publicRepos'> {user['public-repos']} </label>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='perfectRepos'> perfect repos </label>

                                            </td>
                                            <td>
                                                <label htmlFor='perfectRepos'> {user['perfect-repos']} </label>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='followers'> followers </label>

                                            </td>
                                            <td>
                                                <label htmlFor='followers'> {user.followers} </label>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor='following'> following </label>

                                            </td>
                                            <td>
                                                <label htmlFor='following'> {user.following} </label>

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

