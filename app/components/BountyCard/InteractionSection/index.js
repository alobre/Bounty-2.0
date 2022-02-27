import React, {useState, useRef, useCallback} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import colors from 'app/global/variables/colors';
import Handshake from 'app/assets/fonts/handshake';
import RBSheet from 'react-native-raw-bottom-sheet';
import CommentSection from 'app/Screens/CommentSection';
import SendOfferModal from '../../SendOfferModal';

const InteractionSection = ({navigation, bountyDetails}) => {
  const uri =
    'https://bilder.berchtesgadener-land.com/workspace/pixxio/tt.php?w=1600&q=80&dataPath=/pixxiodata/systems/bgl&src=/fileArchiv/tb/TbCqc1wa4Y2wVbKDSf__1535620105_5427100.jpg';
  const [interactions, setInteraction] = useState(bountyDetails.interactions);
  const [visible, setVisible] = useState(false);
  const [openSendOfferModal, setOpenSendOfferModal] = useState(false);
  const toggle = () => {
    refRBSheet.current.open();
  };
  const refRBSheet = useRef();
  // const showComments = () => {
  //   navigation.navigate('CommentSection', {bountyDetails: bountyDetails});
  // };
  const modalCallback = useCallback(visible => {
    setOpenSendOfferModal(visible)
  }, [])
  const { width, height } = Dimensions.get('window');
  return (
    <View style={styles.InteractionSection}>
      <TouchableOpacity onPress={toggle} style={styles.comments}>
        <Icon name="comment-discussion" size={30} color={colors.black}></Icon>
        <View style={styles.imageWrapper}>
          {interactions.map((user, index) => {
            if (index < 4) {
              return (
                <Image
                  style={[
                    styles.image,
                    {zIndex: -index},
                    index > 0 && styles.imagesBehindFirst,
                  ]}
                  key={user.uid + user.time + user.date + user.comment_id}
                  source={{uri: uri}}
                />
              );
            }
          })}
        </View>
        <Text style={styles.interactionsLength}>{interactions.length}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setOpenSendOfferModal(!openSendOfferModal); console.log(openSendOfferModal)}} style={styles.handshakeIconButton}>
        <Handshake size="30" />
      </TouchableOpacity>
      <SendOfferModal visible={openSendOfferModal} modalCallback={modalCallback} bountyDetails={bountyDetails}/>
      {/* BOTTOM SHEET */}

      <RBSheet
        // style={styles.bottomSheet}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={height}
        dragFromTopOnly={true}
        openDuration={400}
        customStyles={{
          wrapper: {
            // backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: colors.grey,
          },
          container:{
            // borderTopEndRadius: 20,
            // borderTopStartRadius: 20,
            // borderWidth:1,
            // borderColor: colors.tagGrey,
            // borderTopWidth: 1
          }

        }}>
        <CommentSection params={bountyDetails} />
        {/* <Text>Alobre</Text> */}
      </RBSheet>
    </View>
  );
};
export default InteractionSection;
