import React, {useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Tab, TabView } from '@rneui/themed';


const TabNavigation = ({dataArray}) =>{
    const [index, setIndex] = useState(0);
    return(
        <ScrollView>
            <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
                backgroundColor: 'white',
                height: 3,
            }}
            variant="primary"
            >
                {
                dataArray.map(element => {
                    return(
                    <Tab.Item
                        title={element.price + element.currency}
                        titleStyle={{ fontSize: 16 }}
                        // icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                        key={element.price}
                    />
                    )
                })
                }
                {/* <Tab.Item
                    title="Recent"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    title="favorite"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    title="cart"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
                /> */}
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
                {
                    dataArray.map(element =>{
                        return(
                        <TabView.Item key={element.info} style={{ backgroundColor: 'red', width: '100%', height: 1000 }}>
                            <Text>{element.info}</Text>
                        </TabView.Item>
                        )
                    })
                }
            </TabView>
        </ScrollView>
    )
}
export default TabNavigation