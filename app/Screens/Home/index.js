import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import BountyCard from 'app/components/BountyCard';
export default Home = ({navigation}) =>{
    const Task = {
        title: 'Einkaufen gehen',
        description: `Ich benötige folgende Dinge:Bananen, Milch, Toastbrot, Butter, 200g Haussalami, Tiefkühlpizza (Salami), Schafkäse, Tomaten, Mozzerella.
        Bei Interesse bitte Schreiben!`,
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        tags: ['Einkauf', 'Hilfe'],
        bounty: {
            price: 5,
            currency: '€'
        },
        interactions:[
            {
                comment_id: '123:1',
                profilePic: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
                username: 'Miriam Beck',
                uid: 'gfdhf832',
                rating: [3,4,5,5,4,5,5,5,4,5,3,5,5],
                comment: 'Bis wann benötigst du die Ware?',
                time: '11:44',
                date: '16.02.2022'
            },
            {
                comment_id: '123:2',
                profilePic: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
                username: 'Paul Lorenz',
                uid: '324wsdg45',
                rating: [5,5],
                comment: 'Ist es egal ob Billa, Spar oder Hofer?',
                time: '12:32',
                date: '16.02.2022'
            },
            {
                comment_id: '123:1:1',
                profilePic: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
                username: 'Mark Mayer',
                uid: '213zg4trh7',
                rating: [5,3,5,5,5,4,5],
                comment: 'Bis heute 16:00',
                time: '12:54',
                date: '16.02.2022'
            },
            {
                comment_id: '123:2:1',
                profilePic: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
                username: 'Mark Mayer',
                uid: '213zg4trh7',
                rating: [5,3,5,5,5,4,5],
                comment: 'Ja ist egal',
                time: '12:54',
                date: '16.02.2022'
            },
        ]
    }
    return(
        <ScrollView>
            <BountyCard navigation={navigation} title={Task.title} description={Task.description} user={Task.user} tags={Task.tags} bounty={Task.bounty.price} currency={Task.bounty.currency} interactions={Task.interactions}/>
            <BountyCard navigation={navigation} title={Task.title} description={Task.description} user={Task.user} tags={Task.tags} bounty={Task.bounty.price} currency={Task.bounty.currency} interactions={Task.interactions}/>
            <BountyCard navigation={navigation} title={Task.title} description={Task.description} user={Task.user} tags={Task.tags} bounty={Task.bounty.price} currency={Task.bounty.currency} interactions={Task.interactions}/>
            <BountyCard navigation={navigation} title={Task.title} description={Task.description} user={Task.user} tags={Task.tags} bounty={Task.bounty.price} currency={Task.bounty.currency} interactions={Task.interactions}/>
            <BountyCard navigation={navigation} title='ALOBRE ALOBRE ALOBRE ALOBRE ALOBRE ALOBRE ALOBRE' description='alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre alobre ' user={Task.user} tags={Task.tags} bounty={Task.bounty.price} currency={Task.bounty.currency} interactions={Task.interactions}/>
        </ScrollView>
    )
}
