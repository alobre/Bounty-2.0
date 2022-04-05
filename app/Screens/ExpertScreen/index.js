import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import ExpertSlider from 'app/components/ExpertSlider'
import styles from './styles'

const ExpertScreen = ({navigation}) => {
    const grafikExperts = [
        {
            user:{
                profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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
                profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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
                profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                username: 'Peter Fuchs',
                uid: 'iiop23933',
                rating: [5,5,5,5,5,5,5,5,5,5,5,5,5]
            },
            title: 'Hobby Designer',
            priceRange: [5, 20, '€'],
            images:['https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98655496/original/d5cd3d49adc5b2b3bb2b6f72292889722f695850/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/98655496/original/a0302183b452b8dff5832e63b715c2d776eaf063/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg'],
            expertCardId: 'yxx451'
        }
    ]
    return(
        <View>
            <ExpertSlider title='Grafik & Design' experts={grafikExperts} navigation={navigation}/>
        </View>
    )
}
export default ExpertScreen;