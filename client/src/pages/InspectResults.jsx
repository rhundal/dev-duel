import '../App.css';
import InspectResultComponent from '../components/InspectResultComponent';
import { useState } from 'react';

const InspectResults = ({ props }) => {

    const { fetchedUser } = useState({ props });


    return (

        <InspectResultComponent props={fetchedUser} />
    );
}

export default InspectResults;