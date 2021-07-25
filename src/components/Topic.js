import React from 'react'

const Topic = ({topic}) => {
    return (
        <div className="topic">
            <h1>{{
                    '28': "Action",
                    "35": "Comedy",
                    "18": "Drama",
                    "1": "Popular",
                    "2": "Search"
                }[topic]}       
            </h1>
        </div>
    )
}

export default Topic
