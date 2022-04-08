import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');
const paddingHorizontal = width * 0.05

const styles = StyleSheet.create({
   title: {
       color: colors.black,
       fontSize: fonts.expertSliderTitleFontSize,
    //    paddingHorizontal
   },
   titleIconWrap:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       paddingHorizontal
   }
})
export default styles;