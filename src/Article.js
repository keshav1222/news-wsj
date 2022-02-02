import React from 'react'
import './article.css'

function Article({data}) {
    return (
        <div className="contai">
            <div className="card">
                <div className="content">
                <img className="img" src={data.urlToImage} alt='news'/>
                
                <strong><h2 className="text"><a className="url" href={data.url}>{data.title}</a></h2></strong>
                <p className="author">{data.author}</p>
                <p className="para">{data.description}</p>
                <small className="smt"><p className="small">{data.publishedAt}</p></small>

                </div>
            </div>
            
           
            
            
            
        </div>
        
    )
}

export default Article