import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');

const cardHeight = height * 0.2;
const cardWidth = width * 0.4;

const imgDimension = width * 0.45

const styles = StyleSheet.create({
    parent:{
        width: imgDimension,
        backgroundColor: colors.white,
        marginLeft: width * 0.01,
    },
    images:{
        height: imgDimension,
        width: imgDimension,
    },
    title:{
        color: colors.black,
        fontSize: fonts.expertCardTitleFontSize
    },
    priceRange: {
        color: colors.neutralGreen,
        fontSize: fonts.expertCardPriceRangeFontSize,
        alignSelf: 'center'
    }
})
export default styles;