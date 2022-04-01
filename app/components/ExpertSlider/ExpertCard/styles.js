import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');

const cardHeight = height * 0.2;
const cardWidth = width * 0.4;

const styles = StyleSheet.create({
    parent:{
        height: cardHeight,
        width: cardWidth,
        backgroundColor: colors.white,
    },
    images:{
        height: 50,
        width: 50,
    }
})
export default styles;