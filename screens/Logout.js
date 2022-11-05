import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

export default function Logout({ navigation }) {
    return (
        <View style={styles.container}>
        
        <Button title="Logout" onPress={() => navigation.navigate('Login')} />
            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center'
    }
})
