import React from 'react'

const NewsItem = (props)=>{
        let {title, description, imageUrl, newsUrl, time, author, source} = props;

        return(
            <div>
                <div className="card">
                    <div>
                    <span className="badge  bg-danger"  style={{display:"flex", justifyContent: "flex-end", right: 0, position: "absolute"}}>{source}</span>
                    </div>

                    <img src={imageUrl ? imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0uP4P3G5y5xyO1NHCPHTCi3gb6cgRYU_2w&usqp=CAU"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}....
                        </h5>
                        <p className="card-text">{description}....</p>
                        <p className="card-text"><small className="text-danger">By {author} on {new Date(time).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem;