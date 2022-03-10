import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    keyboardView:{
        flex: 1,
    },
    parent:{
        flexDirection: 'row',
    },  
    input: {
        flexGrow: 10,
    },
    sendButton:{
    }
})
export default styles;