import React, { Component } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FilmsFilter from "./Films/FilmsFilter";
import PeopleFilter from "./People/PeopleFilter";

class RenderPage extends Component {
  constructor() {
    super();
    this.state = {
      render: false,
      cardDetails: [],
    };
    this.sortUp = this.sortUp.bind(this);
    this.sortDown = this.sortDown.bind(this);
  }
  componentDidMount() {
    const { getInfo } = this.props.location.state;
    let arr = [];
    let endpoint = `${this.props.location.pathname}`;
    fetch(`https://ghibliapi.herokuapp.com${endpoint}`)
      .then((res) => res.json())
      .then((obj) => {
        obj.forEach((val) => {
          arr.push(val);
        });
        this.setState({
          cardDetails: arr,
          render: getInfo,
        });
      });
  }
  sortUp(val) {
    let arr = this.state.cardDetails;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let val1, val2;

        try {
          switch (val) {
            case "rating":
              val1 = parseInt(arr[i].rt_score);
              val2 = parseInt(arr[j].rt_score);
              break;
            case "release":
              val1 = parseInt(arr[i].release_date);
              val2 = parseInt(arr[j].release_date);
              break;
            case "length":
              val1 = arr[i].films.length;
              val2 = arr[j].films.length;
              break;
            case "title":
              val1 = arr[i].title.toLowerCase();
              val2 = arr[j].title.toLowerCase();
              break;
            case "name":
              val1 = arr[i].name.toLowerCase();
              val2 = arr[j].name.toLowerCase();
              break;
            default:
              break;
          }
        } catch (err) {
          console.log(err);
        }
        if (val1 < val2) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    this.setState({
      cardDetails: arr,
    });
  }
  sortDown(val) {
    let arr = this.state.cardDetails;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let val1, val2;
        try {
          switch (val) {
            case "rating":
              val1 = parseInt(arr[i].rt_score);
              val2 = parseInt(arr[j].rt_score);
              break;
            case "release":
              val1 = parseInt(arr[i].release_date);
              val2 = parseInt(arr[j].release_date);
              break;
            case "length":
              val1 = arr[i].films.length;
              val2 = arr[j].films.length;
              break;
            case "title":
              val1 = arr[i].title.toLowerCase();
              val2 = arr[j].title.toLowerCase();
              break;
            case "name":
              val1 = arr[i].name.toLowerCase();
              val2 = arr[j].name.toLowerCase();
              break;
            default:
              break;
          }
        } catch (err) {
          console.log(err);
        }

        if (val1 > val2) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    this.setState({
      cardDetails: arr,
    });
  }

  render() {
    const information = this.state.cardDetails.map((info) => (
      <Col
        key={info.id}
        id={info.id}
        xs={10}
        md={8}
        className="text-center border-secondary border-top  py-5 mx-auto"
      >
        {this.state.render ? (
          <Link
            to={{
              key: "films",
              pathname: `/films/${info.id}`,
              state: { bool: true },
            }}
            className="h3 text-dark"
          >
            {info.title}
          </Link>
        ) : (
          <Link
            to={{
              key: "people",
              pathname: `/people/${info.id}`,
              state: { bool: false },
            }}
            className="h3 text-dark"
          >
            {" "}
            {info.name}
          </Link>
        )}

        <br />
        <br />
        <p className=" text-muted small">
          {this.state.render
            ? `${info.release_date} | ${info.rt_score}%`
            : `${info.films.length} film(s)`}
        </p>
      </Col>
    ));

    return (
      <Row>
        <Col xs={12} className="">
          <Row>
            <Col xs={12} md={4} lg={3} className=""></Col>
            <Col
              xs={12}
              md={4}
              lg={6}
              style={{ fontFamily: "cursive" }}
              className="text-center display-3 h1 mb-md-5 mb-2"
            >
              {this.state.render ? "Films" : "People"}
            </Col>
            <Col
              xs={12}
              md={4}
              lg={3}
              className="mt-lg-3 mt-md-4 mt-0 mb-3 mb-md-0"
            >
              {this.state.render ? (
                <FilmsFilter
                  styles={"text-md-right text-center "}
                  up={this.sortUp}
                  down={this.sortDown}
                />
              ) : (
                <PeopleFilter
                  styles={"text-md-right text-center "}
                  up={this.sortUp}
                  down={this.sortDown}
                />
              )}
            </Col>
          </Row>
        </Col>
        {information}
      </Row>
    );
  }
}
export default RenderPage;
