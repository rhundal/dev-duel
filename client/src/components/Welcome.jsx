//import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../src/App.css';
import { Link } from 'react-router-dom';

const Welcome = () => {

    return (
        <>
            <div className='Welcome'>
                <div className='welcomeTitle'>
                    <div className='adjustMarginTitle'> Welcome to Dev-Duel</div>
                </div>
                <div className='welcomeButtonsDiv'>
                    <nav>

                        <table>
                            <tbody>
                                <tr>

                                    <td>
                                        <button className='buttonInspect'> <Link className='styleLink' to='/inspect'> Inspect </Link></button>
                                    </td>
                                    <td> <h1 className='middleBar'> | </h1> </td>
                                    <td>
                                        <button className='buttonDuel'><Link className='styleLink' to='/duel'> Duel </Link></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </nav>

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