import { StyleSheet, Dimensions } from 'react-native';
import fonts from 'app/global/variables/fonts';
import colors from 'app/global/variables/colors';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    profileBountyWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileWrapper:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    usernameAndRating:{
        marginLeft: 5
    }, 
    username: {
        color: colors.usernameBlue,
        fontSize: fonts.usernameFontSize
    },
    rating: {
        color: colors.neutralGreen
    },
    ratingWrapper:{
        flexDirection: 'row'
    },
    ratingLength:{
        marginLeft: 3
    },
    bounty:{
        
    }
})
export default styles;