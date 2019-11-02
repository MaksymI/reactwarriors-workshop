import React from "react";
import classNames from 'classnames';
import { FILTERS } from '../constants/filters'

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
            onClick={handleClick(FILTERS.popularity)}
            className={tabClass(FILTERS.popularity)}
          >
            Popularity desc
          </div>
        </li>
        <li className="nav-item">
          <div
            // className={getClassLink("revenue.desc")}
            onClick={handleClick(FILTERS.revenue)}
            className={tabClass(FILTERS.revenue)}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div
            // className={getClassLink("vote_average.desc")}
            onClick={handleClick(FILTERS.vote_average)}
            className={tabClass(FILTERS.vote_average)}
          >
            Vote avetage desc
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;
