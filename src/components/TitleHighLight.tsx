const TitleHighLight = ({title, backgroundColor, borderColor}: {title ?: string, backgroundColor?: string, borderColor: string}) =>{
    console.log(title)
    return (
        <div className={`border-b-2 ${borderColor} block`}>
            <h2 className={`${backgroundColor} inline-block px-2 py-1 text-white text-sm`}>{title ?? "Tin"}</h2>
        </div>
    )
}
export default TitleHighLight