import React from 'react';
import Quiz from './Quiz';

export default function Home(props) {

    return(
    <div className='h-screen bg-slate-100 grid place-items-center'>
        <div className=''>
            <div className='space-y-3 text-center font-serif'>
                <h1 className='text-4xl font-bold text-sky-900 m-4'>Quizzical</h1>
                <p className='text-lg font-normal text-sky-900'>Some description if needed</p>
                <div className=''>
                <button className='border-4 rounded-xl px-14 py-2 bg-indigo-900 text-white hover:bg-blue-600'onClick={props.handleClick}>Start quiz</button>
                </div>
            </div>    

        </div>
    </div>
    )
}