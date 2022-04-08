import React, {useState, useRef, useCallback, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import colors from 'app/global/variables/colors';
import Handshake from 'app/assets/fonts/handshake';
import RBSheet from 'react-native-raw-bottom-sheet';
import CommentSection from 'app/Screens/CommentSection';
import {useSelector, useDispatch} from 'react-redux'
import { setRBSheet } from '../../../redux/actions';

const InteractionSection = ({navigation, bountyDetails}) => {
  const uri =
    'https://bilder.berchtesgadener-land.com/workspace/pixxio/tt.php?w=1600&q=80&dataPath=/pixxiodata/systems/bgl&src=/fileArchiv/tb/TbCqc1wa4Y2wVbKDSf__1535620105_5427100.jpg';
  console.log({bountyDetails})
    const [interactions, setInteraction] = useState(bountyDetails.interactions);
  const refRBSheet = useRef();

  const {current} = useSelector(state => state.RBSheetReducer)
  const dispatch = useDispatch();

  const [openComments, setOpenComments] = useState(false)
  const open = () =>{
    setOpenComments(true)
    dispatch(setRBSheet(refRBSheet))
  }
  const close = () =>{
    setOpenComments(false)
    dispatch(setRBSheet(''))
  }

  useEffect(()=>{
    openComments ? refRBSheet.current.open() : refRBSheet.current.close();
  },[openComments])

  const { width, height } = Dimensions.get('window');
  
  return (
    <View style={styles.InteractionSection}>
      <TouchableOpacity onPress={open} style={styles.comments}>
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
                  source={{uri: user.profilePic}}
                />
              );
            }
          })}
        </View>
        <Text style={styles.interactionsLength}>{interactions.length}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        // setOpenSendOfferModal(!openSendOfferModal);
        navigation.navigate('SendOffer', {bountyDetails})
        }} style={styles.handshakeIconButton}>
        <Handshake size="30" />
      </TouchableOpacity>
      {/* BOTTOM SHEET */}

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={height}
        dragFromTopOnly={true}
        openDuration={400}
        onClose={close}
        customStyles={{
          wrapper: {
            // backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: colors.grey,
            marginBottom: 20
          },
          container:{
            // borderTopEndRadius: 20,
            // borderTopStartRadius: 20,
            // borderWidth:1,
            // borderColor: colors.tagGrey,
            // borderTopWidth: 1
          }

        }}>
        <CommentSection refRBSheet={refRBSheet} navigation={navigation} params={bountyDetails} />
      </RBSheet>
    </View>
  );
};
export default InteractionSection;
