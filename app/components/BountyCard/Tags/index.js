import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Tag = ({label, isActive}) =>{
    return(
        <View style={styles.tagParent}>
            <Text style={styles.tagLabel}>{label}</Text>
        </View>
    )
}

const Tags = ({tags}) =>{
    return(
    tags ? (
        <View style={styles.tags}>
            {
                ((tags) ? true : false) &&
                tags.map((tag) => <Tag label={tag} key={tag}></Tag>)
            }
        </View>
    ) : 
    (<View></View>)
    )
}
export default Tags;