import '../../src/App.css';
import { Link } from 'react-router-dom';


const DuelComponent = () => {

    return (
        <>
            <div className='duelComp'>
                <form action="/">

                    <table className='styleTable'>
                        <tbody>

                            <tr>
                                <td>
                                    <input type="text" id="userName1" name="username" />
                                </td>
                                <td>
                                    <input type="text" id="userName2" name="username2" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button id='styleBtnInspect'><Link className='styleLink' to='/duelresult'> Duel </Link></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            </div>

        </>
    );

};

export default DuelComponent;