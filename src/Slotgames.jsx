import React from 'react';


const Slot = (propo) => {
   // console.log(propo);
    let {x,y,z} = propo;

    if(x===y && y===z)
    {
        return(
            <>
                <div className="">
                    {x} {y} {z}
                    <h1>This is matching.</h1>
                </div>
            </>
        );
    }
    else
    {
        return(
            <>
                <div className="">
                    {x} {y} {z}
                    <h1>This is Not matching.</h1>
                </div>
            </>
        );
    }
}

export default Slot;