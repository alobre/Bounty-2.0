import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    chatScreenHeaderParent:{
        flexDirection: 'row',
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingVertical: height * 0.005
    },
    profilePicUsernameWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: width * 0.02,
    },
    usernameParent:{
        
    },
    username:{
        fontSize: fonts.ChatScreenHeaderUsernameFontSize,
        color: colors.black,
        marginLeft: width * 0.02
    },
    threeVerticalDots:{
        marginRight: width * 0.02
    }
})
export default styles;