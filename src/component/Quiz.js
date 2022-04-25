import React, { useState} from "react";
import nanoid from 'nanoid';

export default function Quiz(props) {

    return (
        <div className='h-screen bg-slate-100 flex justify-center items-center'>
            <div>{props.question}</div>
        </div>
    )
}