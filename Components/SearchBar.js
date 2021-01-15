import React, { Component, useState } from 'react';
import { TextInput, Button, View, TouchableOpacity, Image } from 'react-native';
const styles = require('./Styles/SearchBarStyles');

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchingText: ''
        }

    }


    render() {
        return (

            <View style={styles.searchBarContainer}>
                <TextInput
                    placeholder='Enter your search terms'
                    style={styles.textInputSearch}
                    value={this.state.searchingText}
                    onChangeText={text => this.setState({ searchingText: text })}
                />



                <TouchableOpacity
                    style={styles.textSearchButton}
                    onPress={() => this.props.textSearchButton(this.state.searchingText)}
                >
                    <Image source={require('../assets/search.png')} style={styles.imageView} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default SearchBar