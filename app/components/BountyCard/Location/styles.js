import { StyleSheet, Dimensions } from 'react-native';
import colors from 'app/global/variables/colors';

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