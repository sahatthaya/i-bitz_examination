import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapLibreGL from '@maplibre/maplibre-react-native';


MapLibreGL.setAccessToken(null);

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        flex: 1,
        alignSelf: 'stretch',
    },
});


const Map = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <MapLibreGL.MapView
                style={styles.map}
                logoEnabled={false}
                styleURL="https://cloud.vallarismaps.com/core/api/styles/1.0-beta/styles/644b8844dd1b612ec5c94c76?api_key=Jh4sp23vzxBolJBRPjaImQKbERGjJzLP6RBktA7scMJLYw3GIt6MvbkUulPQeFmK"
            />
        </View>
    )
}

export default Map
