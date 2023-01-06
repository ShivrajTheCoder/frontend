import axios from 'axios';
import React, { useState } from 'react'
import ReactSelect from 'react-select'
import { BASE_URL } from '../../../BASE_URL';

export default function AddProfessionScreen() {
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [description, setDescription] = useState("");
    const [stream, setStream] = useState("");
    const [sucess,setSucess]=useState(false);
    const [failure,setFailure]=useState(false);

    const handleSubmit=(e)=>{
        setFailure(false);
        setSucess(false);
        e.preventDefault();
        console.log(name,imgUrl,description,stream)
        const nameReg=/^[A-Z][a-zA-Z\s]{3,29}$/;
        if(nameReg.test(name) && stream){
            // console.log("passes")
            const data={
                name,
                img_url:imgUrl,
                description,
                stream
            };
            console.log(data);
            axios.post(`${BASE_URL}/admin/addprofession`,data)
            .then(response=>{
                console.log(response);
                if(response.status===201){
                    setSucess(true);
                }
                else{
                    setFailure(true);
                }
            })
            .catch(error=>{
                console.log(error);
                setFailure(true);
            })
        }
        else{
            console.log("fails")
            setFailure(true);
        }
    }
    return (
        <section className='mx-32'>
            <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center '>
                <div className='flex'>
                    <div className='w-full mx-20 mr-auto'>
                        <label htmlFor="name">Name</label>
                        <input onChange={e=>setName(e.target.value)} className='h-10 w-full  border border-black' type="text" name="name" id="name" />
                    </div>
                    <div className='w-full mx-20 mr-auto'>
                        <label htmlFor="img_url">Image Link</label>
                        <input onChange={e=>setImgUrl(e.target.value)} className='h-10 w-full  border border-black' type="text" name="img_url" id="img_url" />
                    </div>
                </div>
                <div className='flex'>
                    
                    <div className='w-full mx-20 mr-auto'>

                        <label htmlFor="description">Stream</label>
                        <ReactSelect value={stream.value} onChange={e=>setStream(e.value)} className='border-black' options={[
                            { value: 'science', label: 'Science' },
                            { value: 'commerce', label: 'Commerce' },
                            { value: 'arts', label: 'Arts' }
                        ]} placeholder="Select Car Brands" />
                    </div>
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <input onChange={e=>setDescription(e.target.value)} className='h-10 w-full  border border-black' type="text" name="description" id="description" />
                </div>
               
                <button className='px-3 py-2'>Add Profession</button>
            </form>
            <div>
                {
                    sucess && <div>Profession Created</div>
                }
                {
                    failure && <div>Failed To Add</div>
                }
            </div>
        </section>
    )
}
