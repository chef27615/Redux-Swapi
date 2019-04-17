import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChar } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    console.log(this.props)
    this.props.getChar();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
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
  characters: state.characters,
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
