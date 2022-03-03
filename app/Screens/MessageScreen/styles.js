import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    conversationParent:{
        flexDirection: 'row',
        paddingVertical: height * 0.01,
        paddingHorizontal: width * 0.05,
        justifyContent: 'space-between',
        borderBottomColor: colors.tagGrey,
        borderBottomWidth: 1
    },
    profilePicMessageUsernameWrapper:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    messageUsernameWrapper:{
        marginLeft: width * 0.03
    },
    message:{
        color: colors.lightGrey
    },
    username:{
        fontSize: fonts.messageScreenFontSize,
        color: colors.black
    },
    time:{
        alignSelf: 'center'
    },
    safeAreaView:{
        backgroundColor: colors.white,
        height: '100%'
    }
})
export default styles;