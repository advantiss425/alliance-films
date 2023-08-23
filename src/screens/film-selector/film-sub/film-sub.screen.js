import React, { useState } from 'react';
import { Image, TouchableOpacity, FlatList, Text, View, Modal, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles, { width as screenWidth } from './film-sub.style';

const references = require("../cross-reference.json");

const FilmSubScreen: () => React$Node = (props) => {

    const parentItem = props.route.params.item;
    const [selectedItem, setSelectedItem] = useState('');
    const [showModal, setShowModal] = useState(false);

    const _renderItem = ({item, index}) => {console.log(item);
        return (
            <TouchableOpacity style={styles.itemContainer}
                onPress={() => {
                    setShowModal(true);
                    setSelectedItem(item)
                }}
            >
                <Text style={styles.itemTitle}>{`${index + 1}. ${item}`}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => props.navigation.goBack()}
                >
                <Image source={require('@images/icn_whiteback.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>{parentItem}</Text>
            </View>
            <FlatList
                style={styles.container}
                data={Object.keys(references[parentItem])}
                keyExtractor={(item, index) => `index${index}`}
                renderItem={_renderItem}
            />

            <Modal
                animationType={"fade"}
                transparent={true}
                visible={showModal}
            >
                <View style={styles.centeredView}>
                    <TouchableOpacity onPress={() => setShowModal(false)}
                        style={styles.backdrop}
                    />
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>{selectedItem}</Text>

                        <View style={styles.modalItemContainer}>
                            <LinearGradient
                                colors={["#05176B", "#5397D8"]}
                                start={{x: 0, y: 0}}
                                end={{x: 0, y: 1}}>
                                <Text style={styles.modalText1}>{"Recommended Product"}</Text>
                                <Text style={styles.modalText2}>{selectedItem && references[parentItem][selectedItem].recommend}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        setShowModal(false);
                                        Linking.openURL(`https://alliancestretch.com/product/${references[parentItem][selectedItem].url1}`)
                                    }}
                                >
                                    <Text style={styles.modalText3}>{"View product »"}</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            <View style={{backgroundColor: "black", height: 1}} />
                            <LinearGradient
                                colors={["#05176B", "#5397D8"]}
                                start={{x: 0, y: 0}}
                                end={{x: 0, y: 1}}>
                                <Text style={styles.modalText1}>{"Cost Savings"}</Text>
                                <Text style={styles.modalText2}>{selectedItem && references[parentItem][selectedItem].saving}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        setShowModal(false);
                                        Linking.openURL(`https://alliancestretch.com/product/${references[parentItem][selectedItem].url2}`)
                                    }}
                                >
                                    <Text style={styles.modalText3}>{"View product »"}</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default FilmSubScreen;