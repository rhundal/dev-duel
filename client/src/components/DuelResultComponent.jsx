import '../../src/App.css';
import DuelComponent from './DuelComponent';
import { useState } from 'react';

const DuelResultComponent = ({ usersProps } = []) => {

    // const [user1, setUser1] = useState(usersProps[0]);
    // const [user2, setUser2] = useState(usersProps[1]);


    const user1 = useState(usersProps);
    const user2 = useState(usersProps);

    //const { user1, user2 } = usersProps;



    let imgUrl1 = user1['avatar_url'];
    let imgUrl2 = user2['avatar_url'];

    let setMsg = '';

    return (
        <>
            <h3> Display Error Status for user1: {user1.message} </h3>
            <h3> Display Error Status for user2: {user2.message} </h3>

            <div className='duelResultsDiv'>
                <table>
                    <tbody>
                        <tr>
                            <td className='spacingTd'>
                                <label htmlFor="winnerStatus"> Winner Status </label>

                            </td>
                            <td className='spacingTd'>
                                <label htmlFor="winnerStatus"> Winner Status </label>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='duelResultsDiv'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <table className='styleTableResult'>
                                    <tbody>
                                        <tr>
                                            <td className='tdStyle'>
                                                <div>

                                                    <p>
                                                        <img src={imgUrl1} alt='userImage' style={{ width: "250px", height: "200px" }} />
                                                    </p>

                                                    <p>
                                                        <label htmlFor='bio'> {user1.bio} </label>

                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='username1'> Username</label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='username1'> {user1.username} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='name'> name</label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='name'> {user1.name} </label>


                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='location'> location </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='location'> {user1.location} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='titles'> titles </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='titles'> {user1.titles} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='favLanguage'> fav language </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='favLanguage'> {user1['favorite-language']} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='totalStars'> total stars </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='totalStars'> {user1['total-stars']} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='highestStarCount'> hihgest start count </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='highestStarCount'> {user1['highest-starred']} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='publicRepos'> public repos </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='publicRepos'> {user1['public-repos']} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='perfectRepos'> perfect repos </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='perfectRepos'> {user1['perfect-repos']} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='followers'> followers </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='followers'> {user1.followers} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='following'> following </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='following'> {user1.following} </label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table className='styleTableResult'>
                                    <tbody>
                                        <tr>
                                            <td className='tdStyle'>
                                                <div>

                                                    <p>
                                                        <img src={imgUrl2} alt='userImage' style={{ width: "250px", height: "200px" }} />
                                                    </p>

                                                    <p>
                                                        <label htmlFor='bio'> {user2.bio} </label>

                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='username2'> Username</label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='username2'> {user2.username} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='name'> name</label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='name'> {user2.name} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='location'> location </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='location'> {user2.location} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='titles'> titles </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='titles'> {user2.titles} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='favLanguage'> fav language </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='favLanguage'> {user2['favorite-language']} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='totalStars'> total stars </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='totalStars'> {user2['total-stars']} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='highestStarCount'> hihgest start count </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='highestStarCount'> {user2['highest-starred']} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='publicRepos'> public repos </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='publicRepos'> {user2['public-repos']} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='perfectRepos'> perfect repos </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='perfectRepos'> {user2['perfect-repos']} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='followers'> followers </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='followers'> {user2.followers} </label>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor='following'> following </label>

                                                            </td>
                                                            <td>
                                                                <label htmlFor='following'> {user2.following} </label>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

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

export default DuelResultComponent;