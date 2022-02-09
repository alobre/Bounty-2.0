import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import colors from '../../../global/variables/colors';

const InteractionSection = ({interactions}) =>{
    const uri = 'https://bilder.berchtesgadener-land.com/workspace/pixxio/tt.php?w=1600&q=80&dataPath=/pixxiodata/systems/bgl&src=/fileArchiv/tb/TbCqc1wa4Y2wVbKDSf__1535620105_5427100.jpg'
    return(
        <View style={styles.InteractionSection}>
            <Icon name='comment-discussion' size={30} color={colors.black}></Icon>
            <View style={styles.imageWrapper}>
                {interactions.map((user, index) => {
                    if(index < 4){
                        return(<Image style={[styles.image, {zIndex: -index}, index > 0 && styles.imagesBehindFirst]} key={user.username} source={{uri: uri}}/>)
                    }
                }
                )}
            </View>
            <Text style={styles.interactionsLength}>{interactions.length}</Text>
        </View>
    )
}
export default InteractionSection;