import React from "react";
import { Text, View, StyleSheet, TextInput, ScrollView ,Image} from "react-native";

const App = ()=>{

  return (
    <View style={{ height: '100%' }}>
      <View style={Style.container} >
              <Image  source={require('./images/helpling.png')} />
      </View>
      <View style={Style.cutomerNotification}>
          <View >
             <Image style={Style.avatar}  source={require('./images/avatar.png')} />
          </View>
          <View>
              <Text>Fondungallah Kondem</Text>
          </View>
          <View>
             <Image style={Style.avatar} source={require('./images/avatar.png')} />
          </View>
      </View>
        <View>
            <View><Text>My Earnings</Text></View>
            <View><Text>view history </Text></View>
        </View>
        <View>
             <View>
                <View>
                  <Text>Current earnings in August  </Text>
                  <Text>Updated: yesterday  </Text>
                </View>
                <View>
                  <Text>0.00$</Text>
                </View>
             </View>
             <View>
                 <View>
                   <Text>Estimating earnings this month </Text>
                   <Text> 41.70$ </Text>
                 </View>
                <View>
                  <Text>Estimating earnings this month </Text>
                  <Text> 41.70$ </Text>
                </View>
            </View>
        </View>
        <View>
           <View>
            <Image style={Style.avatar} source={require('./images/avatar.png')} />
            <Text>Home</Text>
           </View>
          <View>
            <Image style={Style.avatar} source={require('./images/avatar.png')} />
            <Text>Offers</Text>
          </View>
          <View>
            <Image style={Style.avatar} source={require('./images/avatar.png')} />
            <Text>Chat</Text>
          </View>
          <View>
            <Image style={Style.avatar} source={require('./images/avatar.png')} />
            <Text>Calendar</Text>
          </View>
          <View>
            <Image style={Style.avatar} source={require('./images/avatar.png')} />
            <Text>More</Text>
          </View>
        </View>
    
    </View>
  )
}
export default App; 

const Style = StyleSheet.create(
  {
  
    textColor:{
      color: "red"
    },
    container:{
      alignItems: 'center',
      marginTop:10
    }, row: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    cutomerNotification:{
      flexDirection:"row",
      justifyContent: "space-between"
     
    }
    ,
    avatar:{
      width: 60,
      height: 65    
    }
 
  }
)