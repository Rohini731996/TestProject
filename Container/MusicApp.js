import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import SearchResults from '../Components/SearchResults';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getMusicListAction } from '../Redux/Actions/SearchReducerAction';
const styles = require('./MusicAppStyle');



class MusicApp extends Component {


    textSearchButton = (searchedText) => {
        this.props.searchByText(searchedText, false)
    }

    render() {
        const { payload, isLoading } = this.props.musicListResp
        const { resultCount, results } = payload || {}
        return (
            <View style={styles.container}>
                <SearchBar textSearchButton={this.textSearchButton} />
                <SearchResults DATA={results} isLoading={isLoading} />
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    const { searchResults } = state
    return { musicListResp: searchResults }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchByText: (params, isLoading) => dispatch(getMusicListAction(params, isLoading))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicApp)