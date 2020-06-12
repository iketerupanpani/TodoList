import React, { useState, useEffect } from 'react'; 

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        // eslint-disable-next-line
        const result = props.getData?.(props.language).then(response => setBookData(response));
    },[props])
    return (
        <div>
            <ul>
                {
                    bookData === null
                    ? <p>now loading...</p>
                    :bookData.data.items.map
                    ((x, index) =>
                    <p key={index}>
                        <b>{x.volumeInfo.title}</b>
                        &emsp;
                            <span style={{color: '#007700'}}>{x.volumeInfo.authors}</span>
                        &ensp;
                            {x.volumeInfo.publishedDate}<br></br>

                        {/* 三項演算子でvueのundefinedを処理 */}
                        {x.volumeInfo.imageLinks === undefined
                            ? <a href={x.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                            <img src='/No_picture_available.png' alt={x.volumeInfo.title} width="120" height="150" border="1px solid"></img>
                            </a>
                            : <a href={x.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                            <img src={x.volumeInfo.imageLinks.thumbnail} alt={x.volumeInfo.title}></img>
                            </a>
                        }
                    </p>
                    )
                }
            </ul>
        </div>
    )
}

export default Booklist;