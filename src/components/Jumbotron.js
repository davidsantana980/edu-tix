export default function Jumbotron({title, content, Button}){
    return (
        <div className="col-md-12">
            <div className="h-100 p-5 bg-light border rounded-3">
                <h2>{title}</h2>
                <p className="fading">{content}</p>
                {Button}
            </div>
        </div>
    )
}