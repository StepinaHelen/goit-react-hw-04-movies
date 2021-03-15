import React, { Component } from 'react';
import api from '../../api';

class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const { MovieId } = this.props.match.params;
    const cast = await api.fetchCast(MovieId);
    this.setState({ cast: cast });
  }

  render() {
    const { cast } = this.state;
    return (
      <div>
        {cast.length > 0 && (
          <ul className="row row-cols-3 row-cols-md-4 row-cols-lg-5">
            {cast.map(item => (
              <li key={item.id} className="col mb-4">
                {item.profile_path ? (
                  <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                    alt={item.original_name}
                  />
                ) : (
                  <img
                    className="card-img-top"
                    src="https://i.pinimg.com/474x/35/0c/9a/350c9aed2bef453f0a0ca46c45457d0d.jpg"
                    alt={item.original_name}
                  />
                )}

                <p>{item.original_name}</p>
                <p>Character: {item.character}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Cast;
