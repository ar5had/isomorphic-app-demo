import React from 'react';
import { Link } from 'react-router';
import athletes from '../data/athletes';

export default class AthletesMenu extends React.Component {
  render() {
    return (
      <nav className="atheletes-menu">
        {athletes.map(menuAthlete => {
          return (
            <Link key={menuAthlete.id} to={`/athelete/${menuAthlete.id}`} activeClassName="active">
              {menuAthlete.name}
            </Link>
          );
        })}
      </nav>
    );
  }
}
