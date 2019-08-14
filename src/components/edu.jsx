import React from 'react';

const Education = () => {
    return (
        <div className="container-fluid">
            <div className="card m-2">
                <p className="card-title text-center m-2">تحصیلات من</p>

                <div className="card-body">
                    <ul className="list-group-item-warning">
                        <li className="lead list-unstyled">
                            <span className="fa fa-graduation-cap" /> تحصیلات
                        </li>

                        <li>
                            دیپلم : دبیرستان علامه
                            
                        </li>
                        <li>
                            لیسانس: دانشگاه علم و فناوری مازندران
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;
