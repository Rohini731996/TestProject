import axios from 'axios';
import React, { Component } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import withProgressBar from './withProgressBar';
import styles from './ExampleComponentStyles'
const ScrollViewWithSpinner = withProgressBar(View);


const renderItem = ({ item }) => (
    <View style={styles.item}>

        <Image source={{ uri: item.artworkUrl60 }} style={styles.imageView} />

        <View style={{ flexDirection: 'column' }}>
            <Text style={styles.textView1} >{item.trackName}</Text>
            <Text style={styles.textView2}>{item.artistName}</Text>
        </View>

    </View>
);
export default class ExampleComponent extends Component {

    state = {
        isLoading: true,
        songList: [],
    }

    componentDidMount() {
        setTimeout(() => {
            this.getSongList()
        }, 5000);
    }

    getSongList = () => {
        axios.get("https://itunes.apple.com/search?term=Arjit").then(responseData => {

            console.log("data====================================" + JSON.stringify(responseData))
            this.setState({
                songList: responseData.data.results,
                isLoading: false,
            })
        }).catch((error) => {
            console.log("err====" + error)
        })
    }



    render() {
        const { isLoading } = this.state;
        return (
            <ScrollViewWithSpinner
                isLoading={isLoading}
            >
                <FlatList
                    data={this.state.songList}
                    renderItem={renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </ScrollViewWithSpinner>
        )
    }
}