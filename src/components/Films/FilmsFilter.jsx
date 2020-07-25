import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const FilmsFilter = (props) => {
  return (
    <DropdownButton
      className={props.styles}
      id="dropdown-basic-button"
      variant="outline-secondary"
      title="Filter Search"
    >
      <Dropdown.Item
        className="w-100"
        href="#"
        onClick={() => {
          props.up("rating");
        }}
      >
        Rating <FontAwesomeIcon className="ml-2" icon={faSortUp} />
      </Dropdown.Item>
      <Dropdown.Item
        className="w-100"
        href="#"
        onClick={() => {
          props.down("rating");
        }}
      >
        Rating <FontAwesomeIcon className="ml-2" icon={faSortDown} />
      </Dropdown.Item>
      <Dropdown.Item
        className="w-100"
        href="#"
        onClick={() => {
          props.up("release");
        }}
      >
        Release Date <FontAwesomeIcon className="ml-2" icon={faSortUp} />
      </Dropdown.Item>
      <Dropdown.Item
        className="w-100"
        href="#"
        onClick={() => {
          props.down("release");
        }}
      >
        Release Date <FontAwesomeIcon className="ml-2" icon={faSortDown} />
      </Dropdown.Item>
      <Dropdown.Item
        className="w-100"
        href="#"
        onClick={() => {
          props.down("title");
        }}
      >
        Title <FontAwesomeIcon className="ml-2" icon={faSortUp} />
      </Dropdown.Item>
      <Dropdown.Item
        className="w-100"
        href="#"
        onClick={() => {
          props.up("title");
        }}
      >
        Title <FontAwesomeIcon className="ml-2" icon={faSortDown} />
      </Dropdown.Item>
    </DropdownButton>
  );
};
export default FilmsFilter;
