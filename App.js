import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const data = [
  {
    id:0,
    title:"Milk",
  }, 
  {
    id:1,
    title:"Coffee",
  }, 
  {
    id:2,
    title:"Oranges"
  }, 
  {
    id:3,
    title:"Bread"
  }
];
const randomData = [
  {
    id:4,
    title:"Bakery"
  },
  {
    id:5,
    title:"Eggs"
  },
  {
    id:6,
    title:"Soups"
  },
  {
    id:7,
    title:"Cheese"
  },
  {
    id:8,
    title:"Cereals"
  },
  {
    id:9,
    title:"Sauces"
  },
  {
    id:10,
    title:"Seafood"
  },
  {
    id:11,
    title:"Canola oil"
  },
  {
    id:12,
    title:"Olives Oil"
  },
  {
    id:13,
    title:"Frozen vegetables"
  },
  {
    id:14,
    title:"Dried fruit"
  },
  {
    id:15,
    title:"Peanut butter"
  },
  {
    id:16,
    title:"Sparkling water"
  },
  {
    id:10,
    title:"Chips"
  },
]

export default function App() {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [updated, setUpdate] = useState(data);

  React.useEffect(() =>{
    console.log("initalized")
    setFilteredDataSource(data);
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = updated.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } 
    else {
      setFilteredDataSource(updated);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      <Text
        style={styles.itemStyle}
      >
        {item.title}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  function addElement(){
    var item = randomData[Math.floor(Math.random() * randomData.length)];
    setFilteredDataSource([...filteredDataSource, item]);
    setUpdate([...updated, item]);
  }

  console.log("Data : ");
  console.log(filteredDataSource);

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <View style={styles.searchBar}>
          <FontAwesome name="search" color="black" style={styles.iconStyle}/>
          <TextInput 
            style={styles.inputStyle} 
            placeholder='Search'
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
          />
        </View>
        <View style={{flex:1, alignSelf:'center'}}>
          <Button 
            title={<MaterialIcons name="add" size={30} color="white" />} 
            color="#0088DD"  
            onPress={addElement}
          />
        </View>
      </View>
      <View style={{ marginHorizontal:10, marginTop:20}}>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:20,
  },
  searchBar:{
    flex:6,
    flexDirection:'row',
    backgroundColor:"#F0EEEE",
    height:50,
    borderRadius:10,
    marginHorizontal:10,
  },
  inputStyle:{
    flex:1,
    fontSize:18,
    fontWeight:'bold',
  },
  iconStyle: {
    fontSize:25,
    alignSelf:'center',
    paddingHorizontal:10,
  },
  itemStyle: {
    padding: 10,
  },
});
