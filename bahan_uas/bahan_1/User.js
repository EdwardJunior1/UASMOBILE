import React from "react";
import { StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

const User = ({ data, handleClicked, handleDeleteUser }) => {

    return (
      <TouchableOpacity style={style.container} onPress={() => handleClicked(data)}>
        <Icon
            name='x'
            size={24}
            style={style.title}
            onPress={() => handleDeleteUser(data.id)}
        />
        <Text>{data.name}</Text>
        <Text>{data.gender}</Text>
        <Text>{data.email}</Text>
        <Text>{data.status}</Text>
      </TouchableOpacity>
    );
}

export default User;

const styles = StyleSheet.create({
    container: {
        height: 124,
        backgroundColor: 'white',
        display: 'flex',
        borderRadius: 8,
        marginBottom: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        position: 'absolute',
        top: 10,
        right: 10
    },
})