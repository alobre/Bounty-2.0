import React, {useState, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import colors from 'app/global/variables/colors';
import Handshake from 'app/assets/fonts/handshake';
import RBSheet from 'react-native-raw-bottom-sheet';
import CommentSection from 'app/Screens/CommentSection';

const InteractionSection = ({navigation, bountyDetails}) => {
  const uri =
    'https://bilder.berchtesgadener-land.com/workspace/pixxio/tt.php?w=1600&q=80&dataPath=/pixxiodata/systems/bgl&src=/fileArchiv/tb/TbCqc1wa4Y2wVbKDSf__1535620105_5427100.jpg';
  const [interactions, setInteraction] = useState(bountyDetails.interactions);
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    refRBSheet.current.open();
  };
  const refRBSheet = useRef();
  const showComments = () => {
    navigation.navigate('CommentSection', {bountyDetails: bountyDetails});
  };
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
      <View style={styles.handshakeIconButton}>
        <Handshake size="30" />
      </View>
      {/* BOTTOM SHEET */}

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={height}
        dragFromTopOnly={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <CommentSection params={bountyDetails} />
        {/* <Text>Alobre</Text> */}
      </RBSheet>
    </View>
  );
};
export default InteractionSection;
