import React from 'react';
import { connect } from 'react-redux';
import { CardColumns } from "react-bootstrap";

class FilterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedColors: []
        }
    }

    componentDidMount(){
        this.setState({ searchedColors: this.state.colors })
    }

    searchColors = (event) => {
        let inputVal = event.target.value;
        let colorsArr = this.props.colors?.filter(color => {
            let colorName = color.name.toLowerCase();
            let word = inputVal.toLowerCase().trim();
            if (colorName.includes(word)) {
                return color
            }
        });
        this.setState({ searchedColors: colorsArr });
    }

    getColorCards = () => {
        let colorsArr = this.state.searchedColors ? this.state.searchedColors : this.props.colors;
        let colorCards = colorsArr?.map(color => {
            return (
                <div className="card h-5" key={color.hex}>
                    <div className="card text-white text-center p-3 mb-0" style={{backgroundColor: `${color.hex}`}}>
                        <p>{color.hex}</p>
                    </div>
                </div>
            )
        });
        return colorCards;
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Search Color</span>
                </nav>
                <div className="row text-center mt-5 mb-5">
                    <input className="form-control mr-sm-2 offset-3 col-6"
                        type="search" placeholder="Search colors by name" aria-label="Search"
                        onChange={this.searchColors}
                    />
                </div>
                <div className="container">
                    <CardColumns>
                        {this.getColorCards()}
                    </CardColumns>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        colors: state.colors
    }
}

export default connect(mapStateToProps)(FilterPage);