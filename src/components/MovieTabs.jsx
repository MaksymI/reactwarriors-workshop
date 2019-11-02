import React from "react";
import classNames from 'classnames';

class MovieTabs extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { sort_by, updateSortBy } = this.props;
    const handleClick = value => () => updateSortBy(value);
    // const getClassLink = value => `nav-link ${sort_by === value ? "active" : ""}`;
    const tabClass = value => classNames({
        'nav-link': true,
        'active': sort_by === value
    });
    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            // className={getClassLink("popularity.desc")}
            onClick={handleClick("popularity.desc")}
            className={tabClass("popularity.desc")}
          >
            Popularity desc
          </div>
        </li>
        <li className="nav-item">
          <div
            // className={getClassLink("revenue.desc")}
            onClick={handleClick("revenue.desc")}
            className={tabClass("revenue.desc")}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div
            // className={getClassLink("vote_average.desc")}
            onClick={handleClick("vote_average.desc")}
            className={tabClass("vote_average.desc")}
          >
            Vote avetage desc
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;
