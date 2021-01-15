import React, { Component } from 'react';
import { FlatList, SafeAreaView, Text, Image, View } from 'react-native';

const styles = require('./Styles/SearchResultsStyles');

const renderItem = ({ item }) => (
    <View style={styles.item}>

        <Image source={{ uri: item.artworkUrl60 }} style={styles.imageView} />

        <View style={{ flexDirection: 'column' }}>
            <Text style={styles.textView1} >{item.trackName}</Text>
            <Text style={styles.textView2}>{item.artistName}</Text>
        </View>

    </View>
);
//collectionName

export default class SearchResults extends Component {

    keyExtractor = (item, index) => `${index}`
    render() {
        return (
            <View style={styles.searchResultsContainer}>
                <FlatList
                    data={this.props.DATA}
                    renderItem={renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        )
    }
}