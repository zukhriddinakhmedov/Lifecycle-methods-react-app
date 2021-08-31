import { Component } from "react"
import { Card } from 'react-bootstrap'

class MovieDetail extends Component {

    timer = null

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

    componentDidMount() {
        this.fetchMovieData()
        this.timer = setInterval(() => {
            console.log('time is flying')
        }, 1000)
    }



    componentDidUpdate(previousProps, previousState) {
        console.log('componmentDidUpdate happened')
        if (previousProps.selectedMovie !== this.props.selectedMovie) {
            this.fetchMovieData()
        }
    }

    componentWillUnmount() {
        console.log('deleted!')
        clearInterval(this.timer)
    }

    render() {
        return (
            <div className="mt-3">
                <p>Movie selected: {this.props.selectedMovie}</p>
                {
                    this.state.movieDetails && (

                        //I am entering this portion of the JSX just when the fetch is completed
                        //so just when movieDetails in the state is not full anymore
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={this.state.movieDetails.Poster} />
                                <Card.Body>
                                    <Card.Title>{this.state.movieDetails.Year}</Card.Title>
                                    <Card.Text>
                                        {this.state.movieDetails.imdbID}
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