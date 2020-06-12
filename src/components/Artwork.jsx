import React, { useState, useEffect } from 'react';

const Artwork = props => {
    const [artData, setArtData] = useState(null);
    useEffect(() => {
        // eslint-disable-next-line
        const result = props.getData?.(props.language).then(response => setBookData(response));
    },[props])
    return (
        <div>
            <p>hello artworld!</p>        
            {/* <p>this is {JSON.stringify(artData)} list component</p>         */}
         </div>
    )
}

export default Artwork;
