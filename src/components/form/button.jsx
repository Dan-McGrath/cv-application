
export default function Button({className='btn-edit', text="Edit", onClick}) {
    return <button className={className} onClick={onClick}>{text}</button>
}