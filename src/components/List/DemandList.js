import React, {Component} from 'react';
import { StyleSheet, Text , View ,ScrollView} from 'react-native';
import { List, ListItem } from 'react-native-elements'


const demands = [];

export default class DemandList extends Component {

componentWillMount(){
  this.fetchData();
}

fetchData  = async () => {
  const response = await fetch("https://kanfirebaseproject-f4c2c.firebaseio.com/request.json")
  .then(res => res.json())
  .then(parsedRes => {

    for (const key in parsedRes) {
        demands.push({
        demand: parsedRes[key].demand,
        names: parsedRes[key].names,
        phone: parsedRes[key].phone,
        type: parsedRes[key].type,
        unit: parsedRes[key].unit,
        id: key
      });
    }
    this.setState({
      usersDemands: demands
    });
  })
  .catch(err => console.log(err));
};

alertItemName = (demand) => {
      alert(demand.names)
   }

render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <List style={styles.list_container}>
            {demands.map( (demand, index) => (
              <ListItem
                style={styles.item_container}
                onPress={() => this.alertItemName(demand)}
                key={index}
                subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>5 months ago</Text>
                </View>
                }
                title={demand.type}
              />
            ))}
          </List>
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingText: {
    paddingLeft: 10,
    color: 'red'
  },
  list_container:{
    marginBottom: 20,
    alignItems: 'stretch',
    backgroundColor: '#b2ebf2',
    padding: 10,
    marginTop: 3,
  },
  item_container:{
    alignItems: 'stretch',
    backgroundColor: '#b2ebf2',
    padding: 10,
    marginTop: 3,
  },
  });
