import React, { Component } from 'react';
import api from '../../api';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { MovieId } = this.props.match.params;
    const results = await api.fetchReviews(MovieId);
    this.setState({ reviews: results });
  }

  render() {
    return (
      <div>
        {this.state.reviews.length > 0 ? (
          <ul>
            {this.state.reviews.map(item => (
              <li key={item.id}>
                <h2>{item.author}</h2>
                <p> {item.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>You don't have any reviews for this movie.</p>
        )}
      </div>
    );
  }
}

export default Reviews;
