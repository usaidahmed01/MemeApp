import MemeDetail from "./memeDetail"

export default async function detailPage(props) {
    const {adid} = props.params

    // console.log(props.params , 'props');

    const res = await fetch("https://api.imgflip.com/get_memes");
    const response = await res.json();
    // console.log(response , 'api');

    const findMeme =  item => (item.id === adid ) 
         
    const apiarr = response?.data.memes
    const singlememe = apiarr.find(findMeme)

    // setApi(singlememe)
    
//    console.log(singlememe , 'meme');


    return(
        <MemeDetail response = {singlememe} adid = {adid} />

    )
    
}