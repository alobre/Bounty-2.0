import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    messagesParent:{
        backgroundColor: colors.white,
        height: '100%',
    }
})
export default styles;