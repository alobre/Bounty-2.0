import { StyleSheet, Dimensions } from 'react-native';
import colors from 'app/global/variables/colors';
import fonts from 'app/global/variables/fonts';

const { width, height } = Dimensions.get('window');

const modalWidth = width * 0.8;
const modalHeight = height * 0.8;

const modalPadding = width * 0.05;

const borderRadius = width * 0.05;

const styles = StyleSheet.create({
    modal:{
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'blue',
        height: '100%',
        width: '100%'
    },
    parent: {
        // height: modalHeight,
        // width: modalWidth,
        height,
        width,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: colors.modalGreyBackground
    },
    modalContent:{
        // height: modalHeight,
        width: modalWidth,
        // alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: modalPadding,
        paddingVertical: modalPadding,
    },
    modalTitle:{
        fontSize: fonts.modalTitleFontSize,
        color: colors.black,
    },
    textInputWrapper:{
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: borderRadius,
    },
    bountyInput:{
        // width: '100%',
        // backgroundColor: 'red'
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
    }
})
export default styles;