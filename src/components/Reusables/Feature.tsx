import checkIcon from '../../assets/Check-icon.png';

export default function Feature({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2">
            <div className='w-6'><img className='w-full' src={checkIcon} alt="" /></div>
            <p>{text}</p>
        </div>
    )
}
