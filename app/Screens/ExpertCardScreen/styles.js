import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');

const cardHeight = height * 0.2;
const cardWidth = width * 0.4;

const imgDimension = width 

const styles = StyleSheet.create({
    parent:{
        backgroundColor: colors.white
    },
    images:{
        height: imgDimension,
        width: imgDimension,
        alignSelf: 'center',
        resizeMode:'cover',
    },
    title:{
        color: colors.black,
        fontSize: fonts.expertCardTitleFontSize
    },
    userTitleWrap:{
        marginHorizontal: width * 0.05
    }
})
export default styles;