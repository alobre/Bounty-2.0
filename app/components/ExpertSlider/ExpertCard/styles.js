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
        borderWidth: 1,
        borderColor: colors.borderGrey,
        marginBottom: height * 0.015,
        marginHorizontal: width*0.005,
        paddingHorizontal: width*0.01,
        justifyContent: 'space-between'
    },
    images:{
        height: imgDimension,
        width: imgDimension * 0.95,
        alignSelf: 'center'
    },
    title:{
        color: colors.black,
        fontSize: fonts.expertCardTitleFontSize
    },
    priceRange: {
        color: colors.neutralGreen,
        fontSize: fonts.expertCardPriceRangeFontSize,
        alignSelf: 'center',
        justifyContent: 'flex-end'
    },
    priceRangeParent:{
        paddingBottom: height*0.005
    }
})
export default styles;