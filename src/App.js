import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import MovieDetail from './components/MovieDetail';

//PLANS FOR TODAY:
//// the goal for today is to work with lifecycle methods!
// all the lifecycle methods in a React Components just work in a Class

// constructor
// componentDidMount
// render
// componentDidUpdate
// componentWillUnmount
// all of these just work on a Class Component

class App extends Component {

  state = {
    movieTitle: 'Batman Begins',
    showMoive: true,
  }

  render() {



    return (
      <div className="App mt-3">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h2>Movie Chooser</h2>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Example select</Form.Label>
                  <Form.Control as="select"
                    value={this.state.movieTitle}
                    onChange={(e) => {
                      this.setState({
                        movieTitle: e.target.value,
                      })
                    }}>
                    <option>Batman Begins</option>
                    <option>Man of Steel</option>
                    <option>Wonder Woman</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Button onClick={() => this.setState({ showMovie: !this.state.showMoive })}>SHOW MOVIE</Button>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <MovieDetail selectedMovie={this.state.movieTitle} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default App
