import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import useData from '../../hooks/useData';
import { Button, Card } from 'antd';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Projects = () => {
    const { Data } = useData();
    console.log(Data);
    return (
        <div>
            <Title level={2}>My Projects</Title>
            <div>
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },

                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },

                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },

                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }

                    }}
                    autoplay={true}
                    pagination={{
                        "clickable": true
                    }}
                >  {Data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={item.imgthumb} style={{ maxHeight: '500px' }} />}
                        >
                            <Link to={`/home/projects/${item.id}`}><Button type="primary" block>Details</Button></Link>
                        </Card>

                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;