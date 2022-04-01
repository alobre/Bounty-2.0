import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import ExpertSlider from 'app/components/ExpertSlider'
import styles from './styles'

const ExpertScreen = () => {
    const grafikExperts = [
        {
            user:{
                profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                username: 'EDV Design',
                uid: 'asdg345fsd',
                rating: [5,3,5,5,5,4,5, 5, 5, 5, 4, 4, 5, 3, 5, 5, 5, 5]
            },
            title: 'Experte für Logo Design',
            fee: {
                price: 5,
                currency: '€'
            },
            images:['https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98655496/original/d5cd3d49adc5b2b3bb2b6f72292889722f695850/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/98655496/original/a0302183b452b8dff5832e63b715c2d776eaf063/create-a-sophisticated-clean-and-modern-brand-logo-mark.jpg'],
            expertCardId: 'sda123'
        }
    ]
    return(
        <View>
            <ExpertSlider title='Grafik & Design' experts={grafikExperts}/>
        </View>
    )
}
export default ExpertScreen;