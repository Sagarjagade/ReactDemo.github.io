import React, { useState } from 'react';

const Contact = () => 
{
    const [state,setData] = useState({
        fullname:'',
        Phone:'',
        EmailAddress:'',
        Message:''
    });

    const InputEvent = (event) =>
    {
        const {name,value} = event.target;
        setData((preval ) => {
            return {
                ...preval,
                [name]: value,

            }
        })
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${state.fullname}. My Mobile number is ${state.Phone} And email is ${state.EmailAddress} and sub text is ${state.Message}`);
    };

    return(
        <>
        <div className="my-3">
                <h1 className="text-center">Our Contact</h1>
        </div>

        <div className="container contact-div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input type="text" className="form-control" name="fullname" value={state.fullname} onChange={InputEvent} id="exampleFormControlInput2"  />
                        </div>

                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone</label>
                        <input type="text" className="form-control" name="Phone" value={state.Phone} onChange={InputEvent} id="exampleFormControlInput3"  />
                        </div>

                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                        <input type="email" className="form-control" name="EmailAddress" value={state.EmailAddress} onChange={InputEvent} id="exampleFormControlInput1" />
                        </div>

                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea className="form-control"  name="Message" rows="3" value={state.Message} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-3">
                            <button className="btn btn-outline-primary">Submit Form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
           
        </>
    );
}

export default Contact;