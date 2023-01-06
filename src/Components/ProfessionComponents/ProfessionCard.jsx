import React from 'react'

export default function ProfessionCard(props) {
    const { profession } = props;
    return (
        <article className='flex p-2 border shadow-xl rounded-xl mx-4 my-10'>
            <img className='h-64 w-72 rounded-xl' src={profession.img_url} alt="" />
            <div className='flex flex-col m-2'>
                <h1 className='text-[#023047] my-2 text-xl font-bold'>{profession.name}</h1>
                <p className='text-lg my-2'>{profession.description}</p>
                <button  className='bg-[#fb8500] border w-fit  my-2 py-2  px-4 text-white mx-2 rounded-md'>{profession.stream}</button>
            </div>
        </article>
    )
}
