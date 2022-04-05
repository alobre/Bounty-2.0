import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');
const paddingVertical = height * 0.01

const styles = StyleSheet.create({
    parent: {
        backgroundColor: colors.white,
        paddingVertical
    }
})
export default styles;