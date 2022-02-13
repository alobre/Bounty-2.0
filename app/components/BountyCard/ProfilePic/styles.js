import { StyleSheet, Dimensions } from 'react-native';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');

const picDimensions = height * 0.07

const styles = StyleSheet.create({
    profilePicParent:{
        height: picDimensions + 5,
        width: picDimensions + 5,
        borderRadius: picDimensions,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePic:{
        width: picDimensions,
        height: picDimensions,
        borderRadius: picDimensions,
    }
})
export default styles;