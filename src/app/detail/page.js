'use client'
import { useState, createRef } from "react";
import { useSearchParams } from "next/navigation";
import Draggable from "react-draggable";
import { exportComponentAsJPEG } from "react-component-export-image";

function MemeDatail() {

    const searchParams = useSearchParams();
    const memeurl = searchParams.get('url');

    const [text1, setText1] = useState();
    const [text2, setText2] = useState();

    const memeRef = createRef();

    const exportMemeAsJPEG = () => {
        exportComponentAsJPEG(memeRef, {
            fileName: 'memeFileName'
        })
    }


    return (
        <div className="items-center">
            <h1 className="font-bold mb-4 text-3xl">Meme Details</h1><br/>

            <div className="memeDiv" ref={memeRef}>
                    <img src={memeurl} width={300} /><br />

                <Draggable>
                    <h4>{text1}</h4>
                </Draggable>

                <Draggable>
                    <h4>{text2}</h4>
                </Draggable>
            </div>

            <input className="input1" placeholder="enter first text" onChange={e => setText1(e.target.value)} /><br />
            <input className="input2" placeholder="enter second text" onChange={e => setText2(e.target.value)} /><br />

            <button className="saveBtn" onClick={exportMemeAsJPEG}>Save</button>
        </div>
    )
}

export default MemeDatail;