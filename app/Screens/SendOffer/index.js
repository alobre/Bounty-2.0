import React, {useState, useEffect} from 'react'
import { View, Text, Modal, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import SendOfferBountyCard from './SendOfferBountyCard'

const SendOffer = ({navigation, route}) =>{
    const bountyDetails = route.params.bountyDetails;
    const defaultModalTitle = 'Du kannst behilflich sein? Sage warum genau du für den Auftrag geeignet bist!'

    const currentBounty = bountyDetails.bounty;
    const [wantedBounty, setWantedBounty] = useState(currentBounty)
    const [message, setMessage] = useState(null);

    const submit = () => {
        console.log({message, wantedBounty})
    }
    const setInitialBounty = () =>{
        if(wantedBounty == '') setWantedBounty(currentBounty);
    }
    return(
        <ScrollView style={styles.sendOfferParent}>
            <View>
                <Text style={styles.modalTitle}>{bountyDetails.modalTitle || defaultModalTitle}</Text>
            </View>
            <View>
                <SendOfferBountyCard {...bountyDetails}/>
            </View>
            <View style={styles.textInputWrapper}>
                <TextInput 
                keyboardType="numeric"
                placeholder={currentBounty.toString()} 
                value={wantedBounty.toString()}
                onChangeText={setWantedBounty}
                style={styles.bountyInput}
                onEndEditing={setInitialBounty}
                />
                <TextInput 
                placeholder='Nachricht...'
                onChangeText={setMessage}
                multiline
                numberOfLines={3}
                style={styles.messageInput}
                />
                <TouchableOpacity onPress={submit} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Absenden</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default SendOffer;