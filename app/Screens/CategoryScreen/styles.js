import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');
const paddingHorizontal = width * 0.05
const marginBottom = height * 0.01

const styles = StyleSheet.create({
    parent:{
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    title:{
        color: colors.black,
        fontSize: fonts.categoryScreenTitleFontSize,
        paddingHorizontal,
        marginBottom: marginBottom
    },
    flatList: {
        height: height
        // alignItems: 'center'
    },
    expertCard:{

    }
})
export default styles;