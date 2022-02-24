import { StyleSheet, Dimensions } from 'react-native';
import colors from 'app/global/variables/colors';
import fonts from 'app/global/variables/fonts';

const { width, height } = Dimensions.get('window');

const picDimensions = height * 0.04

const styles = StyleSheet.create({
    InteractionSection:{
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    comments:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width: picDimensions,
        height: picDimensions,
        borderRadius: picDimensions,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 1,
    },
    imageWrapper:{
        marginLeft: 5,
        flexDirection: 'row',
    },
    imagesBehindFirst:{
        marginLeft: -picDimensions*0.7,
    },
    interactionsLength:{
        marginLeft: 5,
        fontSize: fonts.interactionsLengthFontSize,
        color: colors.black
    },
    handshakeIcon:{

    },
    handshakeIconButton:{
        backgroundColor: colors.limeGreen,
        borderRadius: 50,
        padding: 5,
    },
    card: {
        backgroundColor: "#fff",
        height: height * 0.9,
        justifyContent: "center",
        alignItems: "center",
      }
})
export default styles;