import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    profilePicParent:{
        alignItems: 'center',
        paddingTop: height * 0.05,
        backgroundColor: colors.white
    },
    username:{
        fontSize: fonts.profileScreenUsernameFontSize,
        color: colors.black
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
})
export default styles;