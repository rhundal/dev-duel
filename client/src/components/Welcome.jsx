//import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../src/App.css';


const Welcome = () => {

    return (
        <>
            <div className='Welcome'>
                <div className='welcomeTitle'>
                    <div className='adjustMarginTitle'> Welcome to Dev-Duel</div>
                </div>
                <div className='welcomeButtonsDiv'>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <button className='buttonInspect'>Inspect</button>
                                </td>
                                <td> <p className='middleBar'> | </p></td>
                                <td>
                                    <button className='buttonDuel'>Duel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </>
        // <Container>

        //     <Row className="justify-content-md-center">

        //         <Col md={{ span: 6, offset: 3 }}>
        //             <h2> Welcome to Dev-Duel</h2>
        //         </Col>

        //     </Row>
        //     <Row className="justify-content-md-center">
        //         <Col xs={6} md={4}>
        //             <Button variant="light">Inspect</Button>
        //         </Col>
        //         <Col xs={6} md={4}>
        //             <Button variant="light">Duel</Button>
        //         </Col>
        //     </Row>

        // </Container>

    );
}

export default Welcome;