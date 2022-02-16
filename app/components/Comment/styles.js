import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');

const picDimensions = height * 0.08

const styles = StyleSheet.create({
    comment:{
        backgroundColor: colors.white,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderBottomColor: colors.borderGrey,
        borderBottomWidth: 1,
    },
    textParent:{

    },
    text:{
        fontSize: fonts.commentTextFontSize,
        color: colors.black
    },
    profilePic:{
        width: picDimensions,
        height: picDimensions,
        borderRadius: picDimensions,
        borderColor: colors.black,
        borderWidth: 2,
    },
    profileWrapper:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    usernameAndRating:{
        marginLeft: 5
    }, 
    username: {
        color: colors.usernameBlue,
        fontSize: fonts.usernameFontSize
    },
    rating: {
        color: colors.neutralGreen
    },
    ratingWrapper:{
        flexDirection: 'row'
    },
    ratingLength:{
        marginLeft: 3
    }
})
export default styles;