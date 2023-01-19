import '../../src/App.css';


const InspectResuleComponent = () => {

    return (
        <>
            <div className='inspectComp'>
                <form action="/">

                    <table className='styleTable'>
                        <tbody>

                            <tr>
                                <td>
                                    <input type="text" id="userName0" name="username" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button id='styleBtnInspect'>Inspect</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            </div>

        </>
    );

};

export default InspectResuleComponent;