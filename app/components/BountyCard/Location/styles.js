import { StyleSheet, Dimensions } from 'react-native';
import fonts from '../../../global/variables/fonts';
import colors from '../../../global/variables/colors';

const styles = StyleSheet.create({
    locationParent:{
        flexDirection: 'row'
    },
    city:{
        color: colors.usernameBlue
    },
    zip:{
        color: colors.usernameBlue
    }
});
export default styles;