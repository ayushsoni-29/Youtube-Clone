import { HeaderHeightContext } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import VideoListItem from "../components/VideoListItem";
import videos from "../assets/data/videos.json";

const HomeScreen = () => {
    return (
        <View>
            <FlatList
                data={videos}
                renderItem={({item}) => <VideoListItem video={item} />}
            />
            <StatusBar style="light" hidden = {true} /> 
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({})
