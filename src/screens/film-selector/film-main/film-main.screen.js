import React from 'react';
import { Image, TouchableOpacity, FlatList, Text, View } from 'react-native';

import styles, { width as screenWidth } from './film-main.style';

const references = require("../cross-reference.json");

const FilmMainScreen: () => React$Node = (props) => {
    const _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity style={styles.itemContainer}
                onPress={() => {
                    props.navigation.navigate("FilmSelectorMainSub", { item: item });
                }}
            >
                <Text style={styles.itemTitle}>{`${index + 1}. ${item}`}</Text>
                <Image source={require('@images/right-arrow.png')} style={styles.itemIcon} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <FlatList
                style={{ flex: 1, backgroundColor: "white" }}
                data={Object.keys(references)}
                keyExtractor={(item, index) => `index${index}`}
                renderItem={_renderItem}
            />
        </View>
    );
};

export default FilmMainScreen;