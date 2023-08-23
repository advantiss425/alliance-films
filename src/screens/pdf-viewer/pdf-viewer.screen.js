import React, { useState } from 'react';
import { Image, SafeAreaView, View, TouchableOpacity, Text, Platform } from 'react-native';
import Share from "react-native-share";
import PDF from "react-native-pdf";

import styles, { width as screenWidth } from './pdf-viewer.style';

const PDFViewerScreen: () => React$Node = (props) => {
    const { route } = props;
    const [filePath, setFilePath] = useState("");

    const onShare = () => {
        if (filePath !== "") {
            Share.open({
                url: Platform.OS === "ios" ? filePath : `file://${filePath}`,
            }).catch(e => {

            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={props.navigation.goBack}
                    >
                        <Image source={require('@images/icn_whiteback.png')} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{route.params.title}</Text>
                    <TouchableOpacity
                        style={styles.shareButton}
                        onPress={onShare}
                    >
                        <Image source={require('@images/share.png')} style={styles.shareIcon} />
                    </TouchableOpacity>
                </View>
                <PDF 
                    source={{uri:`bundle-assets://${route.params.name}.pdf` }}
                    style={styles.pdf}
                    onLoadComplete={(number, path, size) => {
                        setFilePath(path);
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default PDFViewerScreen;