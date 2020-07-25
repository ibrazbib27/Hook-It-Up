import React, { Component } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

class ReturnFilms extends Component {
  constructor() {
    super();
    this.state = {
      end: false,
      films: [],
    };
  }
  componentDidMount() {
    let arr = [];
    let urls = [];
    if (`${this.props.movie.films}`.includes(","))
      urls = `${this.props.movie.films}`.split(",");
    else urls[0] = `${this.props.movie.films}`;
    urls.map((url) =>
      fetch(url)
        .then((res) => res.json())
        .then((obj) => {
          arr.push(obj);
          this.setState({
            films: arr,
          });
        })
    );
  }

  render() {
    const films = this.state.films.map((film) => (
      <li>
        <Link
          to={{
            pathname: `/films/${film.id}`,
            state: {
              bool: true,
            },
          }}
        >
          {film.title}
        </Link>
      </li>
    ));

    return (
      <>
        <Col xs={2}>
          <b>Film(s):</b>
        </Col>{" "}
        <Col xs={10}>
          <ul style={{ listStyleType: "none" }}>{films}</ul>
        </Col>
      </>
    );
  }
}
export default ReturnFilms;
