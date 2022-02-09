import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../global/variables/colors';
import fonts from '../../../global/variables/fonts';

const { width, height } = Dimensions.get('window');

const picDimensions = height * 0.04

const styles = StyleSheet.create({
    InteractionSection:{
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
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
    }
})
export default styles;