import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import MovieDetail from './components/MovieDetail';



class App extends Component {
  state = {
    movieTitle: 'Batman Begins'
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


export default App;
