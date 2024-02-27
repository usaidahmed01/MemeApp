import Link from "next/link";


async function Dashboard() {

    const res = await fetch("https://api.imgflip.com/get_memes");
    // console.log(res , 'api');
    const response = await res.json();
    return (
        <div className="text-center ">
            <h1 className="font-sans hover:font-mono text-2xl font-bold mb-5">Meme App</h1>
            <div className="grid grid-cols-4 gap-4">
                {response.data.memes?.map((item, index) => {
                    // console.log(item , 'item');
                    return (
                        <div key={index}>
                            <Link href={`/detail/${item.id}`}>
                                <img src={item.url} className="w-96 h-96 rounded shadow-lg" />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Dashboard;