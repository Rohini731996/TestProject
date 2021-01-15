const React = require('react-native');
const { Dimensions, StyleSheet, StatusBar } = React;

module.exports = StyleSheet.create({
    searchResultsContainer: {
        flex: 9,
        width: '100%',
        marginTop: 10,
    },
    item: {
        backgroundColor: 'lightgray',
        width: '100%',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        flexDirection:'row'
    },
    title: {
        fontSize: 32,
    },
    imageView: {
        width: 50,
        height: 50,
        margin: 7,
        borderRadius: 7

    },

    textView1: {
        width: '80%',
        textAlignVertical: 'center',
        marginTop: 10,
        color: '#000'

    },
    textView2: {
        width: '80%',
        textAlignVertical: 'center',
        color: '#000',
        marginBottom:10
    }
})