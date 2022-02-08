import { StyleSheet, Dimensions } from 'react-native';
import fonts from '../../global/variables/fonts';
import colors from '../../global/variables/colors';

const { width, height } = Dimensions.get('window');
const paddingHorizontal = width * 0.05
const paddingVertical = height * 0.01

const picDimensions = height * 0.08

const styles = StyleSheet.create({
    bountyCard:{
        width: width,
        backgroundColor: colors.white,
        paddingHorizontal,
        paddingVertical,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    },
    profilePic:{
        width: picDimensions,
        height: picDimensions,
        borderRadius: picDimensions,
        borderColor: colors.black,
        borderWidth: 2,
    },
    title:{
        color: colors.black,
        fontSize: fonts.bountyCardTitleFontSize,
    },
    description:{
        fontSize: fonts.bountyCardDescriptionFontSize,
        color: colors.black,
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