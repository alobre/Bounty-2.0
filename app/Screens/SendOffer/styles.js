import { StyleSheet, Dimensions } from 'react-native';
import colors from 'app/global/variables/colors';
import fonts from 'app/global/variables/fonts';

const { width, height } = Dimensions.get('window');

const modalPadding = width * 0.05;

const borderRadius = width * 0.05;

const styles = StyleSheet.create({
    sendOfferParent:{
        height: '100%',
        backgroundColor: colors.white,
        paddingHorizontal: modalPadding,
        paddingVertical: modalPadding,
    },
    modalTitle:{
        fontSize: fonts.modalTitleFontSize,
        color: colors.black,
        marginBottom: height * 0.02
    },
    bountyCard:{
        marginTop: height * 0.05
    },
    textInputWrapper:{
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: borderRadius,
        marginTop: height * 0.02
    },
    bountyInput:{
        fontSize: fonts.bountyInputFontSize,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
    },
    submitButton:{
        padding: 10,
        backgroundColor: colors.limeGreen,
        borderBottomEndRadius: borderRadius,
        borderBottomStartRadius: borderRadius,
        alignItems: 'center',
    },
    submitButtonText:{
        fontSize: fonts.submitButtonFontSize,
        color: colors.black
    }
})
export default styles;