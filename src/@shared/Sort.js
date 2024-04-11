import { Container, Row, Col, Dropdown } from 'react-bootstrap';
const Sort = () => {
    return(
        <Dropdown>
        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>
    
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Relevance</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Price: Low to High</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Price: High to Low</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )

}
export default Sort;