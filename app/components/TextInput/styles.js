import { StyleSheet, Dimensions } from 'react-native';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
   textInputParent:{
    
   },
   textInput:{
       width: width * 0.9,
       paddingLeft: 15
   }
})
export default styles;