export const GifItem = ({title,url}) => {

    return (
        <div className="card">
            <img src={ url } alt={ title } className="item-image" />
            <p className="item-title">{ title }</p>            
        </div>
    )
}
