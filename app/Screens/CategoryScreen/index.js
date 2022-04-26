import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import ExpertCard from 'app/components/ExpertSlider/ExpertCard'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const CategoryScreen = ({navigation, route}) => {
    const [category_data, setCategotyData] = useState([])
    const { width, height } = Dimensions.get('window');
    const tabBarHeight = useBottomTabBarHeight();
    console.log(height - tabBarHeight)
    useEffect(()=>{
        setCategotyData([
            {
                user:{
                    profilePic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.acsngroup.eu%2Fwp-content%2Fuploads%2F2020%2F02%2Fedv-design-logo-farbe.png&f=1&nofb=1',
                    username: 'EDV Design',
                    uid: 'asdg345fsd',
                    rating: [5,3,5,5,5,4,5, 5, 5, 5, 4, 4, 5, 3, 5, 5, 5, 5]
                },
                title: 'Experte für Logo Design',
                priceRange: [5, 45, '€'],
                images:['https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98655496/original/d5cd3d49adc5b2b3bb2b6f72292889722f695850/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/98655496/original/a0302183b452b8dff5832e63b715c2d776eaf063/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg'],
                expertCardId: 'sda123'
            },
            {
                user:{
                    profilePic: 'https://this-person-does-not-exist.com/img/avatar-b83ba8e6523c0835dd4e685736030ad2.jpg',
                    username: 'MatzeTatze',
                    uid: 'xvcj3245',
                    rating: [5,5,5,5,5,5,5,5,5,5,5,5,5]
                },
                title: 'Medientechnik Absolvent',
                priceRange: [15, 60, '€'],
                images:['https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98655496/original/d5cd3d49adc5b2b3bb2b6f72292889722f695850/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/98655496/original/a0302183b452b8dff5832e63b715c2d776eaf063/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg'],
                expertCardId: 'cxh787'
            },
            {
                user:{
                    profilePic: 'https://this-person-does-not-exist.com/img/avatar-f750a85e7de99554a0e73a5fb5ed4a5d.jpg',
                    username: 'Peter Fuchs',
                    uid: 'iiop23933',
                    rating: [3,3,3,4,4,5,4,3,5,4]
                },
                title: 'Hobby Designer',
                priceRange: [20, '€'],
                images:['https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98655496/original/d5cd3d49adc5b2b3bb2b6f72292889722f695850/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/98655496/original/a0302183b452b8dff5832e63b715c2d776eaf063/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg'],
                expertCardId: 'yxx451'
            },
            {
                user:{
                    profilePic: 'https://this-person-does-not-exist.com/img/avatar-fd7c54e0b437604bdce8f5078eda68bd.jpg',
                    username: 'Marie Isabell',
                    uid: 'dda4563a',
                    rating: [5,5,3,4,5]
                },
                title: 'Grafik Design Student',
                priceRange: [10, 30, '€'],
                images:['https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98655496/original/d5cd3d49adc5b2b3bb2b6f72292889722f695850/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/98655496/original/a0302183b452b8dff5832e63b715c2d776eaf063/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg'],
                expertCardId: 'hjku34'
            },
            {
                user:{
                    profilePic: 'https://this-person-does-not-exist.com/img/avatar-f78de3df4d1b0b34278137439ed503b0.jpg',
                    username: 'Fritz Phantom',
                    uid: 'bjz783423',
                    rating: [1,2,3,2,3,4,1]
                },
                title: 'Hobby Designer',
                priceRange: [5, 15, '€'],
                images:['https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98655496/original/d5cd3d49adc5b2b3bb2b6f72292889722f695850/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/98655496/original/a0302183b452b8dff5832e63b715c2d776eaf063/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg'],
                expertCardId: 'lloe234'
            },
            {
                user:{
                    profilePic: 'https://this-person-does-not-exist.com/img/avatar-964e094f0884f4e57adda4be8089589c.jpg',
                    username: 'Linda Beck',
                    uid: 'ckku3456',
                    rating: [1,2,3,2,3,4,1]
                },
                title: 'Hobby Designer',
                priceRange: [5, 15, '€'],
                images:['https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98655496/original/d5cd3d49adc5b2b3bb2b6f72292889722f695850/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/98655496/original/a0302183b452b8dff5832e63b715c2d776eaf063/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg'],
                expertCardId: 'aop7561'
            }
        ]); //fetch from server here
    }, [route.params.category_id])
    const renderItem = ({item}) =>(
        <ExpertCard marginHorizontal={width*0.01} images={item.images} priceRange={item.priceRange} title={item.title} user={item.user} navigation={navigation}/>
    )
    
    return(
        <View style={styles.parent}>
            <Text style={styles.title}>{route.params.title}</Text>
            <FlatList
                data={category_data}
                renderItem={renderItem}
                keyExtractor={(item)=> item.expertCardId}
                style={styles.flatList}
                numColumns={2}
                contentContainerStyle={{
                    // height: height*0.8,
                    alignItems:'center',
                    justifyContent: 'space-between',
                }}
            />
            {/* Temporary Fix so Flatlist doesn't go behind BottomNavBar */}
            <View style={{height: tabBarHeight*2}}></View>
        </View>
    )
}
export default CategoryScreen;