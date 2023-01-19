import '../../src/App.css';
import { Link } from 'react-router-dom';


const InspectComponent = () => {

    return (
        <>
            <div className='inspectComp'>
                <form action="/">

                    <table className='styleTable'>
                        <tbody>

                            <tr>
                                <td>
                                    <input type="text" id="userName0" name="username0" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button id='styleBtnInspect'><Link className='styleLink' to='/inspectresult'> Inspect </Link></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            </div>

        </>
    );

};

export default InspectComponent;