import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    videoPlayer:{
        width: "100%",
        aspectRatio: 16/9,
    },
    videoInfoContainer: {
        margin: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: "500",
        marginVertical: 10,
    },
    tags:{
        color: '#0094e3',
        fontSize: 14,
        fontWeight: "500",
    },
    subtitle: {
        color: 'grey',
        fontSize: 14,
        fontWeight: "500",
    },
    actionListContainer:{
        marginVertical:10,
    },
    actionListItem:{
        justifyContent: "space-between",
        alignItems: "center",
        width: 70,
        height: 60,

    },
    actionText:{
        color:"white",

    },
    avatar:{
        width:50,
        height:50,
        borderRadius:25,
    },
});
export default styles;