import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Aside from "./Aside";
import PersonDesc from "./People/PersonDesc";

class Info extends Component {
  constructor() {
    super();
    this.state = {
      render: false,
      cardDetails: [],
    };
  }

  componentDidMount() {
    const { bool } = this.props.location.state;
    const {
      match: { params },
    } = this.props;
    let arr = [];
    let endpoint = "";
    if (bool === true) endpoint = "films";
    else endpoint = "people";
    fetch(`https://ghibliapi.herokuapp.com/${endpoint}/${params.id}`)
      .then((res) => res.json())
      .then((obj) => {
        arr[0] = obj;

        this.setState({
          cardDetails: arr,
          render: bool,
        });
      });
  }

  render() {
    const information = this.state.cardDetails.map((info) => (
      <Col key={info.id} xs={12} className="w-100">
        <Row className="w-100 p-3 mx-0">
          <Col xs={12} lg={7} md={6} className="order-2 order-md-1 m-0 ">
            <p className="font-italic">
              <b>{this.state.render ? `${info.title}- ` : `${info.name}- `}</b>
              {this.state.render ? (
                info.description
              ) : (
                <PersonDesc info={info} />
              )}
            </p>
          </Col>
          <Col
            xs={12}
            lg={5}
            md={6}
            className="order-1 order-md-2 mb-3 mb-lg-0"
          >
            <Aside render={this.state.render} info={info} />
          </Col>
        </Row>
      </Col>
    ));

    return <Row>{information}</Row>;
  }
}
export default Info;
