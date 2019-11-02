import React from 'react';

const MovieTabs = props => {
    const { sort_by } = props;
    return (
        <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={`nav-link ${
              sort_by === "popularity.desc" ? "active" : ""
            }`}
            // className='nav-link active'
            // className={getClassLink("popularity.desc")}
            // onClick={handleClick("popularity.desc")}
          >
            Popularity desc
          </div>
        </li>
        <li className="nav-item">
          <div
          
            // className={getClassLink("revenue.desc")}
            // onClick={handleClick("revenue.desc")}
            // className='nav-link'
            className={`nav-link ${
                sort_by === "revenue.desc" ? "active" : ""
              }`}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div
            // className={getClassLink("vote_average.desc")}
            // onClick={handleClick("vote_average.desc")}
            // onClick={event => {
            //   updateSortBy("vote_average.desc");
            // }}
            // className='nav-link'
            className={`nav-link ${
                sort_by === "vote_average.desc" ? "active" : ""
              }`}
          >
            Vote avetage desc
          </div>
        </li>
      </ul>
    )
}

export default MovieTabs;