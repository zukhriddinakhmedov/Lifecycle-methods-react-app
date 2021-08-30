import { Component } from "react"
import { Card } from 'react-bootstrap'

class MovieDetail extends Component {

    state = {
        //here we can store the data coming from the fetch
        MovieDetails: null
    }

    fetchMovieData = async () => {
        try {
            let response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=" + this.props.selectedMovie)
            console.log(response)
            if (response.ok) {
                let data = await response.json()
                console.log(data.Search[0])
                this.setState({
                    movieDetails: data.Search[0]
                })
            } else {
                console.log('something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    }

    async componentDidMount(previousProps, previousState) {
        //beahves in the same exact way as render
        //fires itself again every time there is a change in the state or in the props of this component
        //here we can do the fetch
        this.fetchMovieData()

    }

    componentDidUpdate() {
        console.log('componmentDidUpdate happened')
        this.fetchMovieData()
    }

    render() {
        return (
            <div className="mt-3">
                <p>Movie selected: {this.props.selectedMovie}</p>
                {
                    this.state.movieDetails && (

                        //I am entering
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={this.state.movieDetails.Poster} />
                                <Card.Body>
                                    <Card.Title>{this.state.movieDetails.Year}</Card.Title>
                                    <Card.Text>
                                        {this.state.movieDetails.imbID}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>

        )
    }
}

export default MovieDetail