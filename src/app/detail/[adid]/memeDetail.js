'use client'
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Draggable from "react-draggable";
import { exportComponentAsJPEG } from "react-component-export-image";

function MemeDetail(props) {

    const { response, adid } = props
    const [text1, setText1] = useState();
    const [text2, setText2] = useState();
    const [api, setApi] = useState([])
    // const searchParams = useSearchParams();
    // const memeurl = searchParams.get('url');
    const memeRef = useRef();









    const exportMemeAsJPEG = () => {
        exportComponentAsJPEG(memeRef, {
            fileName: 'memeFileName'
        })
    }

    console.log(response, 'memeshere');

    return (
        <div className="bg-inherit">
            <h1 className="font-bold mb-4 text-3xl mt-5 text-center">{response?.name}</h1><br />

            <div ref={memeRef} className="flex justify-center">
                <img src={response?.url} className="w-1/3 rounded shadow-lg" /><br />

                <Draggable>
                    <p className="font-bold text-lg cursor-pointer">{text1}</p>
                </Draggable>

                <Draggable>
                    <p className="font-bold text-lg cursor-pointer">{text2}</p>
                </Draggable>
            </div>

            <div className="flex flex-flow gap-4 mt-10 justify-center">

                <input className="basis-1/4 border-2 rounded border-black p-2" placeholder="Enter first text" onChange={e => setText1(e.target.value)} /><br />
                <input className="basis-1/4  border-2 rounded border-black p-2" placeholder="Enter second text" onChange={e => setText2(e.target.value)} /><br />

            </div>
            <div className="flex justify-center">
                <button className="w-40 border-2 rounded border-black mt-10 p-1 font-bold transition duration-700 ease-in-out delay-150 mb-10" onClick={exportMemeAsJPEG}>Save</button>
            </div>
        </div>
    )
}

export default MemeDetail;