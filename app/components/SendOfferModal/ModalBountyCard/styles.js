import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');
const paddingHorizontal = width * 0.05
const paddingVertical = height * 0.01

const picDimensions = height * 0.08

const borderRadius = width * 0.05;

const styles = StyleSheet.create({
    bountyCard:{
        // width: width,
        backgroundColor: colors.white,
        paddingHorizontal,
        paddingVertical,
        borderWidth: 1,
        borderRadius: borderRadius,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    profilePic:{
        width: picDimensions,
        height: picDimensions,
        borderRadius: picDimensions,
        borderColor: colors.black,
        borderWidth: 2,
    },
    titleWrap:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:{
        color: colors.black,
        fontSize: fonts.modalBountyCardTitleFontSize,
    },
    description:{
        fontSize: fonts.modalBountyCardDescriptionFontSize,
        color: colors.black,
    },
    profileWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    usernameAndRating:{
        marginLeft: 5,
        flexDirection: 'row'
    },
    locationParent:{
        // alignItems: 'flex-end'
    },  
    username: {
        color: colors.usernameBlue,
        fontSize: fonts.modalUsernameFontSize
    },
    rating: {
        color: colors.neutralGreen
    },
    ratingWrapper:{
        flexDirection: 'row'
    },
    ratingLength:{
        marginLeft: 3
    },
    tagLocationWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    tags:{
    },
    location:{
        // alignSelf: 'flex-end',
    },
    profileBountyWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bounty:{

    },
    upperIcons:{
        flexDirection: 'row',
        marginTop: 5
    },
    nameStarWrapper:{
        flexDirection: 'row'
    },
    starIcon:{
        alignSelf: 'center',
        marginLeft: 3,
    }
})
export default styles;