import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import axios from 'axios';

// const instance = axios.create({});

function SessionsScreen({ navigation, route }) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await axios
        .get(
          `https://dumorefitness.himalayantechies.com/sessions/view/${route.params.id}.json`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          setSessions(res.data.exercises);
        });
    }
    fetchData();
  }, [route.params.id]);

  const renderFunction = (item) => (
    <TouchableOpacity onPress={() => {
      Linking.openURL( 'https://www.youtube.com/watch?v=' + item.video.video_link );
    }}>
      <ListItem key={item.video.id} bottomDivider>
          <Avatar
            source={{
              uri:
                `https://img.youtube.com/vi/${item.video.video_link}/hqdefault.jpg`,
            }}
          style={styles.avatar}/>
        <ListItem.Content>
          <ListItem.Title>{item.video.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron/>
      </ListItem>
    </TouchableOpacity>
  );
  return (
    <View style={styles.homeScreen}>
      <View style={styles.homeScreenContainer}>
        {sessions.length == 0 ? <View style={{display:"flex", justifyContent: "center", alignItems: "center"}}><Text>Nothing to show</Text></View> : sessions.map((item, i) => renderFunction(item))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
  },
  homeScreenContainer: {},
  avatar: {height: 60, width: 60, marginRight: 20}

});

export default SessionsScreen;
