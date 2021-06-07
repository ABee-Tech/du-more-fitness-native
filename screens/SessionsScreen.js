import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
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
          `https://dumorefitness.himalayantechies.com/programs/view/${route.params.id}.json`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          setSessions(res.data.program.sessions);
        });
    }
    fetchData();
  }, [route.params.id]);

  const renderFunction = (item) => (
    <TouchableOpacity onPress={() => navigation.push('Exercises', {id: item.id, name: item.name})}>
      <ListItem key={item.id} bottomDivider>
          <Avatar
            source={{
              uri:
                'https://dumorefitness.himalayantechies.com/files/' +
                item.imageUrl,
            }}
          style={styles.avatar}/>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
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
