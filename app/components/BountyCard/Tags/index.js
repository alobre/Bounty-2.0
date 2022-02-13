import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import colors from 'app/global/variables/colors';

const Tag = ({label, isActive}) =>{
    return(
        <TouchableOpacity style={[styles.tagParent, isActive && {
            borderColor: colors.neonGreen,
          }]}>
            <Text style={[styles.tagLabel]}>{label}</Text>
        </TouchableOpacity>
    )
}

const Tags = ({tags}) =>{
    return(
    tags ? (
        <View style={styles.tags}>
            {
                ((tags) ? true : false) &&
                tags.map((tag) => <Tag label={tag} isActive={tag.isActive} key={tag}></Tag>)
            }
        </View>
    ) : 
    (<View></View>)
    )
}
export default Tags;