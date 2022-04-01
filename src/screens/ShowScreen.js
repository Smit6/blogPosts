import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Context } from '../context/BlogContext';

import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <View style={styles.edit}>
                <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                    <FontAwesome name="pencil" size={35} color="black" />
                </TouchableOpacity>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    edit: {
        paddingRight: 15,
    }
});

export default ShowScreen;
