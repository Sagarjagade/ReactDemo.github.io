import React from 'react';
import Servicecarddata from './Servicecarddata';
import ServiceCard from './ServiceCard';
const serivce = () => 
{
    return(
        <>
            <div className="my-5">
                <h1 className='text-center'>Our Serivce</h1>
            </div>

            <div className="container-fluid mb-5 ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                                 {Servicecarddata.map( (val) => {
                                    return (
                                        <ServiceCard key={val.id} img={val.imgsrc}/>
                                    );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default serivce;