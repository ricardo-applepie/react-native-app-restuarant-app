import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View style={{height: '100%'}}>
      <View style={{height: '85%'}}>
        <View style={Style.container}>
          <Image source={require('./images/helpling.png')} />
        </View>

        <View style={Style.cutomerNotification}>
          <View>
            <Image
              style={Style.avatar}
              source={require('./images/avatar.png')}
            />
          </View>
          <View>
            <Text>Fondungallah Kondem mbancho !i</Text>
          </View>
          <View>
            <Image
              style={Style.avatar}
              source={require('./images/avatar.png')}
            />
          </View>
        </View>
        <View style={Style.row}>
          <View>
            <Text>My Earnings</Text>
          </View>
          <View>
            <Text>view history... </Text>
          </View>
        </View>
        <View>
          <View style={[Style.row]}>
            <View>
              <Text>Current earnings in August </Text>
              <Text>Updated: yesterday </Text>
            </View>
            <View>
              <Text>0.00$</Text>
            </View>
          </View>
          <View>
            <View style={Style.row}>
              <Text>Estimating earnings this month </Text>
              <Text> 41.70$ </Text>
            </View>
            <View style={Style.row}>
              <Text>Estimating earnings this month </Text>
              <Text> 41.70$ </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[Style.row, Style.homepageFooter]}>
        <View>
          <Icon name="home" size={50} color="900" />
          <Text style={{textAlign: 'center'}}>Home</Text>
        </View>
        <View>
          <Icon name="star" size={50} color="900" />
          <Text style={{textAlign: 'center'}}>Offers!</Text>
        </View>
        <View>
          <Image style={Style.avatar} source={require('./images/avatar.png')} />
          <Text style={{textAlign: 'center'}}>Chat</Text>
        </View>
        <View>
          <Image style={Style.avatar} source={require('./images/avatar.png')} />
          <Text style={{textAlign: 'center'}}>Calendar!</Text>
        </View>
        <View>
          <Image style={Style.avatar} source={require('./images/avatar.png')} />
          <Text style={{textAlign: 'center'}}>More!</Text>
        </View>
      </View>
    </View>
  );
};
export default App;

const Style = StyleSheet.create({
  textColor: {
    color: 'red',
  },
  container: {
    alignItems: 'center',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cutomerNotification: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 30,
  },
  avatar: {
    width: 60,
    height: 65,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  homepageFooter: {
    marginLeft: 10,
    marginRight: 10,
    height: '10%',
  },
});
