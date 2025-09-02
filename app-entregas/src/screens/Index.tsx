import { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import IconUser from '../components/user/IconUser';
import IconHome from "../components/iconHome/IconHome";
import IconChatBox  from "../components/chat/ChatBox";
import IconList from "../components/list/IconList";

import User from './User/User';
import List from './List/List';
import { ChatBox } from './ChatBox/ChatBox';
import { Home } from './Home/Home';

import styles from './IndexStyles';

export default function Index() { 

    const [activeScreen, setActiveScreen] = useState<'Home' | 'user' | 'list' | 'chat'>('Home');

    const renderScreen = () => {
        switch (activeScreen) {
            case 'Home':
                return <Home />;
            case 'user':
                return <User />;
            case 'list':
                return <List />;
            case 'chat':
                return <ChatBox />;
            default:
                return null;
        }
    };

    return(
        <View style = {styles.index}>
             
            <Text style = {styles.titulo}>SpeedFast</Text>

                <ScrollView style = {styles.requests}>

                    {renderScreen()}

                </ScrollView>

                <View style = {styles.rodape}>

                    <Pressable onPress={() => setActiveScreen('user')}>
                        <IconUser/>
                    </Pressable>
                        
                    <Pressable onPress={() => setActiveScreen('Home')}>
                        <IconHome/>
                    </Pressable>

                    <Pressable onPress={() => {setActiveScreen('list')}}>
                        <IconList/>
                    </Pressable>
                        
                    <Pressable onPress={() => {setActiveScreen('chat')}}>
                        <IconChatBox/>
                    </Pressable>
                </View>

        </View>

    );
}