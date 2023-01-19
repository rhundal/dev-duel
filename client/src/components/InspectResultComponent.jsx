import '../../src/App.css';
import InspectComponent from './InspectComponent';

const InspectResuleComponent = () => {

    return (
        <>

            <InspectComponent />

            <br />
            <br />

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
                                                <label for="username0"> Username</label>

                                            </td>
                                            <td>
                                                <input type="text" id="username0" name="username0" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="name"> name</label>

                                            </td>
                                            <td>
                                                <input type="text" id="name" name="name" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="location"> location </label>

                                            </td>
                                            <td>
                                                <input type="text" id="location" name="location" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="titles"> titles </label>

                                            </td>
                                            <td>
                                                <input type="text" id="titles" name="titles" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="favLanguage"> fav language </label>

                                            </td>
                                            <td>
                                                <input type="text" id="favLanguage" name="favLanguage" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="totalStars"> total stars </label>

                                            </td>
                                            <td>
                                                <input type="text" id="totalStars" name="totalStars" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="highestStarCount"> hihgest start count </label>

                                            </td>
                                            <td>
                                                <input type="text" id="highestStarCount" name="highestStarCount" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="publicRepos"> public repos </label>

                                            </td>
                                            <td>
                                                <input type="text" id="publicRepos" name="publicRepos" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="perfectRepos"> perfect repos </label>

                                            </td>
                                            <td>
                                                <input type="text" id="perfectRepos" name="perfectRepos" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="followers"> followers </label>

                                            </td>
                                            <td>
                                                <input type="text" id="followers" name="followers" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="following"> following </label>

                                            </td>
                                            <td>
                                                <input type="text" id="following" name="following" />

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

export default InspectResuleComponent;