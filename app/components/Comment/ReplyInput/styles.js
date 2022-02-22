import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');

const picDimensions = height * 0.08

const styles = StyleSheet.create({
    replyInputParent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
export default styles;