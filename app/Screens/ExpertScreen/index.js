import React from 'react'
import { View, ScrollView, Text, FlatList } from 'react-native'
import ExpertSlider from 'app/components/ExpertSlider'
import styles from './styles'

const ExpertScreen = ({navigation}) => {
    const grafikExperts = [
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
            priceRange: [5, 20, '€'],
            images:['https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98655496/original/d5cd3d49adc5b2b3bb2b6f72292889722f695850/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/98655496/original/a0302183b452b8dff5832e63b715c2d776eaf063/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg'],
            expertCardId: 'yxx451'
        }
    ]
    const data = [
        {
            title:'Grafik & Design',
            category_id: 'grapicdesign'
        }, 
        {
            title: 'Fotographie',
            category_id: 'photography'
        }, 
        {
            title: 'Handwerk',
            category_id: 'handicraft'
        }
    ]
    const renderItem = ({item}) =>(
        <ExpertSlider title={item.title} category_id={item.category_id} experts={grafikExperts} navigation={navigation}/>
    )
    return(
        <FlatList
            style={styles.parent}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item)=> item.category_id}
        />
    )
}
export default ExpertScreen;