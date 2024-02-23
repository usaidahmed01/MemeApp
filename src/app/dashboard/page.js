import Link from "next/link";


async function Dashboard() {

    const res = await fetch("https://api.imgflip.com/get_memes");
    console.log(res);
    const response = await res.json();
    return (
        <div className="text-center inline">
            <h1 className="font-bold mb-14 text-3xl">Meme App</h1>
            <div>
                {response.data.memes.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link href={`/memeDetail?url=${item.url}`}>
                                <img src={item.url} width={250} height={250} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Dashboard;