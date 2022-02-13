import { StyleSheet, Dimensions } from 'react-native';
import colors from 'app/global/variables/colors';

const styles = StyleSheet.create({
    tagParent:{
        borderRadius: 100,
        borderColor: colors.tagGrey,
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginRight: 5,
    },
    greenBorder:{
        borderColor: 'green'
    },
    tagLabel:{
        color: colors.black
    },
    tags:{
        flexDirection: 'row',
        marginVertical: 5,
    }
});
export default styles;