import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>hai polapan this is service detail pages{serviceId}...</h2>
        </div>
    );
};

export default ServiceDetail;