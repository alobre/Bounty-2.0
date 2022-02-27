import React, {useState, useEffect} from 'react'
import { View, Text, Modal, TextInput } from 'react-native'
import styles from './styles'
import ModalBountyCard from './ModalBountyCard'

const SendOfferModal = ({visible, modalCallback, bountyDetails, modalTitle}) =>{
    const [modalVisible, setModalVisible] = useState(visible)
    useEffect(()=>{
        setModalVisible(visible);
    }, [visible])
    const defaultModalTitle = 'Du kannst behilflich sein? Sage warum genau du für den Auftrag geeignet bist!'

    const currentBounty = bountyDetails.bounty;
    const [wantedBounty, setWantedBounty] = useState(currentBounty)
    const [message, setMessage] = useState(null);
    return(
        <Modal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            console.log('close')
            setModalVisible(false);
            modalCallback(false)
        }}
        avoidKeyboard={false}
        >
            <View style={styles.parent}>
                <View style={styles.modalContent}>
                    <View>
                        <Text style={styles.modalTitle}>{modalTitle || defaultModalTitle}</Text>
                    </View>
                    <ModalBountyCard {...bountyDetails}/>
                    <View style={styles.textInputWrapper}>
                        <TextInput 
                        keyboardType="numeric"
                        // placeholder={currentBounty.toString()} 
                        value={wantedBounty.toString()}
                        onChangeText={setWantedBounty}
                        style={styles.bountyInput}
                        />
                        <TextInput 
                        // placeholder={currentBounty.toString()} 
                        placeholder='Nachricht...'
                        onChangeText={setMessage}
                        multiline
                        numberOfLines={3}
                        style={styles.messageInput}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default SendOfferModal;