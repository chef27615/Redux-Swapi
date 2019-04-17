import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';


import { CharacterList } from "../components";
import { getChar } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    console.log(this.props)
    this.props.getChar();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <Loader type="Audio" color="#333" height={80} width={80} />
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.fetching
})


export default connect(
    mapStateToProps
   /* mapStateToProps replaces null here */,
  {
    getChar
    /* action creators go here */
  }
)(CharacterListView);
