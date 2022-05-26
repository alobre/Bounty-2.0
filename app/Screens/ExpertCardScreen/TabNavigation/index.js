import React, {useState} from 'react';
import {View, Text, ScrollView, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const TabNavigation = ({dataArray}) => {
  const FirstRoute = () => (
    <View style={{flex: 1, backgroundColor: '#ff4081', height:'100%'}}>
      <Text>Alo</Text>
    </View>
  );

  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}}>
      <Text>Bre</Text>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);
  return (
    <ScrollView>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </ScrollView>
  );
};
export default TabNavigation;
