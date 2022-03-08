import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');

const borderRadius = width * 0.05

const styles = StyleSheet.create({
    parent:{

    },
    messageBubble:{
        maxWidth: width * 0.6,
        paddingVertical: width * 0.02,
        paddingHorizontal: width * 0.04,
        marginBottom: width * 0.05,
        marginHorizontal: width * 0.02,
    },
    messageBubbleLeft:{
        backgroundColor: colors.messageBubbleGrey,
        alignSelf: 'flex-start',
        borderBottomRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
    },
    messageBubbleRight:{
        alignSelf: 'flex-end',
        backgroundColor: colors.messageBubbleBlue,
        borderBottomLeftRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
    },
    textMessage: {
        color: colors.black
    },
    nextMessageSameAuthor:{
        marginBottom: width * 0.01,
        borderRadius: borderRadius
    }
})
export default styles;