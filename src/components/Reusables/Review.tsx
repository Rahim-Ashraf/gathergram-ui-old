import star from '../../assets/Star.png'

interface reviewer {
    bgUrl: string,
    name: string,
    title: string,
    agency: string,
}

export default function review({ bgUrl, name, title, agency }: reviewer) {
    return (
        <div className={`p-3 text-white bg-[url('${bgUrl}')] bg-cover h-80 flex justify-center items-end`}>
            <div className='backdrop-blur border border-gray-200 p-3 w-full bg-[#4c412b20]'>
                <div className='flex gap-1 items-center'>
                    <div className='w-4'><img src={star} alt="" /></div>
                    <div className='w-4'><img src={star} alt="" /></div>
                    <div className='w-4'><img src={star} alt="" /></div>
                    <div className='w-4'><img src={star} alt="" /></div>
                    <div className='w-4'><img src={star} alt="" /></div>
                </div>
                <h4 className='text-xl font-bold'>{name}</h4>
                <h6 className='font-bold'>{title}</h6>
                <h6>{agency}</h6>
            </div>
        </div>
    )
}
