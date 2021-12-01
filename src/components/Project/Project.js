import { Card, Image } from 'antd';
import React from 'react';
import { useParams } from 'react-router';
import useData from '../../hooks/useData';

const Project = () => {
    const { prId } = useParams();
    const { Data } = useData();

    return (
        <div>
            {
                Data.map(dt => (
                    dt.id === parseInt(prId) && <div key={dt.id}>
                        <Image
                            width={200}
                            src={dt.img1}
                        />
                        <Image
                            width={200}
                            src={dt.img2}
                        />
                        <Image
                            width={200}
                            src={dt.img3}
                        />
                        <Card title={dt.title} style={{ width: '100%' }}>
                            <p>• {dt.point1}</p>
                            <p>• {dt.point2}</p>
                            <p>• {dt.point3}</p>
                            <p>Live Site Link: {dt.live}</p>
                            <p>GitHub Client Link: {dt.client}</p>
                            {dt?.server && <p>GitHub Server Link: {dt?.server}</p>}
                        </Card>
                    </div>
                ))
            }
        </div>
    );
};

export default Project;