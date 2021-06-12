import React, { useRef } from 'react';
import { 
    Image, 
    Text, 
    View, 
    SafeAreaView, 
    ScrollView,
    FlatList,
    Pressable } 
from 'react-native';
import {BottomSheetModalProvider,BottomSheetModal,} from "@gorhom/bottom-sheet";
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import VideoListItem from '../../components/VideoListItem';
import VideoPlayer from '../../components/VideoPlayer';
import VideoComments from '../../components/VideoComments';
import VideoComment from '../../components/VideoComment';

import video from '../../assets/data/video.json';
import videos from '../../assets/data/videos.json';
import comments from '../../assets/data/comments.json';
import { color } from 'react-native-reanimated';

const VideoScreen = () => {

const commentsSheetRef = useRef<BottomSheetModal>(null);    

    //   let viewsString = video.views.toString();
    //   if (video.views > 1_000_000) {
    //     viewsString = (video.views / 1_000_000).toFixed(1) + "m";
    //   } else if (video.views > 1_000) {
    //     viewsString = (video.views / 1_000).toFixed(1) + "k";
    //   }

const openComments = () => {
    commentsSheetRef.current?.present();
}    

    return (
        <View style={{backgroundColor: "#141414", flex:1}}>
            {/* Video Player */}
            <VideoPlayer videoURI={video.videoUrl}  thumbnailURI={video.thumbnail} />
            
            <View style={{ flex:1 }}>
                {/* Video info */}
                <View style={styles.videoInfoContainer}>
                    <Text style={styles.tags}>{video.tags}</Text>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.subtitle}>{video.user.name} {video.views} {video.createdAt}</Text>
                </View>

                {/* Action List */}
                <View style={styles.actionListContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <View style={styles.actionListItem}>
                        <AntDesign name="like1" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.likes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <AntDesign name="dislike2" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <AntDesign name="export" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.likes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <AntDesign name="download" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.likes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <AntDesign name="download" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.likes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <AntDesign name="download" size={30} color="lightgrey" />
                        <Text style={styles.actionText}>{video.likes}</Text>
                    </View>

                </ScrollView>
                </View>
                {/* User info */}
                <View style={{ flexDirection:'row', alignItems:"center", padding:10, borderColor: '#3d3d3d', borderTopWidth:0.5, borderBottomWidth:0.5 }}>
                    <Image style={styles.avatar} source={{uri: video.user.image}} />

                    <View style={{marginHorizontal:10, flex:1}}>
                        <Text style={{ color: "white", fontSize:18, fontWeight: 'bold'}}>{video.user.name}</Text>
                        <Text style={{ color: "lightgrey", fontSize:18 }}>{video.user.subscribers} subsribers</Text>
                    </View>

                    <Text style={{ color: "red", fontSize:18, fontWeight:'bold', padding:10,}}>Subscribe</Text>
                </View>

                {/* Comments */}
                <Pressable onPress={openComments} style={{padding:10, marginVertical:10}}>
                    <Text style={{color: "white"}}>Comments 333</Text>
                    <VideoComment comment={comments[0]} />
                </Pressable>

                {/* All Comments */}
                <BottomSheetModal 
                  ref={commentsSheetRef} 
                  snapPoints={['70%']} 
                  index={0}
                  backgroundComponent={({ style }) => (
                    <View style={[style, { backgroundColor: "#4d4d4d" }]} />
                  )}
                  
                >
                    <VideoComments />
                </BottomSheetModal>
            </View>

        </View>
    )
};

const VideoScreenWithRecommendation = () => {
    return (
        <SafeAreaView style={{backgroundColor: "#141414", flex:1}}>
            <BottomSheetModalProvider>
              <FlatList
                data={videos}
                renderItem={({item}) => <VideoListItem video={item} />}
                ListHeaderComponent={VideoScreen}
              />
            </BottomSheetModalProvider>
        </SafeAreaView>    
    )
}

export default VideoScreenWithRecommendation;


