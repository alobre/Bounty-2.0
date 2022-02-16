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
            rating: [5,3,5,5,5,4,5]
        },
        tags: ['Einkauf', 'Hilfe'],
        bounty: {
            price: 5,
            currency: '€'
        },
        interactions:[
            {
                profilePic: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
                username: 'Miriam Beck',
                rating: [3,4,5,5,4,5,5,5,4,5,3,5,5],
                comment: 'Bis wann benötigst du die Ware?'
            },
            {
                profilePic: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
                username: 'Paul Lorenz',
                rating: [5,5],
                comment: 'Ist es egal ob Billa, Spar oder Hofer?'
            },
            {
                profilePic: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
                username: 'Ronald Weiss',
                rating: [3,4,5,5,4,5,5,5,4,5,3,5,5],
                comment: 'Bis wann benötigst du die Ware?'
            },
            {
                profilePic: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
                username: 'Lisa Markov',
                rating: [5,5],
                comment: 'Ist es egal ob Billa, Spar oder Hofer?'
            },
            {
                profilePic: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
                username: 'Sarah Schmid',
                rating: [3,4,5,5,4,5,5,5,4,5,3,5,5],
                comment: 'Bis wann benötigst du die Ware?'
            },
            {
                profilePic: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
                username: 'Daniel Ludwig',
                rating: [5,5],
                comment: 'Ist es egal ob Billa, Spar oder Hofer?'
            }
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
