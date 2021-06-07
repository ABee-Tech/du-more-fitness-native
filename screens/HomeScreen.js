import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import axios from 'axios';


function HomeScreen({ navigation }) {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await axios
        .get('https://dumorefitness.himalayantechies.com/programs.json', {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setPrograms(res.data.programs);
        });
    }
    fetchData();
  }, []);

  const renderFunction = (item) => (
    <TouchableOpacity onPress={()=>navigation.push("Sessions", {id: item.id, name: item.name})}>
    <ListItem key={item.id} bottomDivider>
        <Avatar source={{uri: "https://dumorefitness.himalayantechies.com/files/"+item.imageUrl}} style={styles.avatar}/>
        <ListItem.Content>
        
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description ? item.description : "No description"}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron/>
      </ListItem>
    </TouchableOpacity>
  );
  return (
    <View style={styles.homeScreen}>
      <View style={styles.homeScreenContainer}>
        <ScrollView>

        {programs.length == 0 ? <View style={{display:"flex", justifyContent: "center", alignItems: "center"}}><Text>Nothing to show</Text></View> : programs.map((item, i)=>renderFunction(item))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
  },
  homeScreenContainer: {
  },
  avatar: {height: 60, width: 60, marginRight: 20}
});

export default HomeScreen;
