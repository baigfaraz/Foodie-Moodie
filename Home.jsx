import { useEffect } from 'react';
import { useState, TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image, FlatList, ScrollView } from 'react-native';

const DATA = [
  {
    key: 0,
    title: 'Burger',
    source: require('./assets/burger.jpg'),
  },
  {
    key: 2,
    title: 'Kabab',
    source: require('./assets/kabab.jpg'),
  },
  {
    key: 3,
    title: 'Chicken',
    source: require('./assets/chicken.jpg'),
  },
];
const DATA2 = [
  {
    key: 0,
    title: 'Burger',
    source: require('./assets/burger.jpg'),
    price: '15$',
  },
  {
    key: 2,
    title: 'Kabab',
    source: require('./assets/kabab.jpg'),
    price: '10$',
  },
  {
    key: 3,
    title: 'Chicken',
    source: require('./assets/chicken.jpg'),
    price: '25$',
  },
];
const DATA3 = [
  {
    key: 0,
    title: 'Chicken',
    source: require('./assets/chicken.jpg'),
    price: '25$',
  },

];

export default function Home({ navigation }) {


// const [myburgers , setBurgers] = useState([])

//   const getPopularBurgers = async () => {
//     try {
//       const response = await fetch('https://d0c47e82-0664-463e-89b1-cc3db4564af3.mock.pstmn.io');
//       const json = await response.json();
//       setData(json.movies);
//     } catch (error) {
//       console.error(error);
//     } finally {
//     }
//   };

//   useEffect(()=>{
//     getPopularBurgers();
//   } , [])


  return (

    <View style={styles.container}>

      <Text style={styles.text1}>Hello Muhammad Faraz Baig!</Text>
      <Text style={styles.text2}>Choose your favorite food</Text>

      <View style={styles.foodCategory}>
        <TextInput
          style={styles.input}
          placeholder='Search Your Favourite Food'
          keyboardType='default' />

        <TouchableOpacity style={styles.button2}>
          <Image source={require('./assets/search.png')} style={styles.searcIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.foodCategory}>
          <Text style={styles.category}>Food Category</Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate('FoodCategory') }}
          >
            <Text style={styles.category}>See All</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={DATA}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({ item }) =>

              <View style={styles.items}>
                <TouchableOpacity>
                  <View style={styles.contain1}>
                    <Image source={item.source} style={styles.foodCategoryImage} />
                    <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, marginLeft: 11 }}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>

            }
          />
        </View>

        <View style={styles.foodCategory}>
          <Text style={styles.category}>Popular Food</Text>
          <TouchableOpacity>
            <Text style={styles.category}>See All</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={DATA2}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({ item }) =>

              <View style={styles.items}>
                <TouchableOpacity>
                  <View style={styles.contain2}>
                    <Image source={item.source} style={styles.popularfoodImage} />
                    <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, marginLeft: 11 }}>{item.title}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', margin: 5, marginLeft: 11 }}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>

            }
          />
        </View>

        <View>
          <Text style={styles.category}>Best Seller</Text>
        </View>

        <View>
          <FlatList
            data={DATA3}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({ item }) =>

              <View style={styles.items}>
                <TouchableOpacity>
                  <View style={{ display: 'flex', flexDirection: 'row', }}>
                    <View style={styles.contain3}>
                      <Image source={item.source} style={styles.bestsellerImage} />
                      <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16, }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, marginLeft: 11 }}>{item.title}</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500', margin: 5, marginLeft: 11 }}>{item.price}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

            }
          />
        </View>
      </ScrollView>

      <View style={styles.navigationbar}>
        <TouchableOpacity>
          <Image source={require('./assets/home.png')} style={{ height: 28, width: 28 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/fav.png')} style={{ height: 28, width: 28 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/cart.png')} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/profile.png')} style={{ height: 28, width: 28 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 44,
    marginLeft: 17,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 19,
    marginBottom: 10,
    marginLeft: 17,
  },
  category: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 5,
    marginLeft: 17,
    marginRight: 17,
  },
  foodCategory: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button1: {
    height: 40,
    margin: 18,
    paddingRight: 170,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    width: 250,
  },
  button2: {
    height: 40,
    margin: 15,
    borderRadius: 8,
    backgroundColor: 'white',
    width: 50,
  },
  input: {
    height: 40,
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: 'white',
    backgroundColor: 'white',
    width: 270,
    marginLeft: 17,
  },
  searcIcon: {
    width: 30,
    height: 30,
    margin: 8,
  },
  items: {
    marginTop: 10,
    marginLeft: 6,
    marginBottom: 10,
    padding: 10,
  },
  contain1: {
    height: 45,
    width: 140,
    padding: 2,
    borderRadius: 8,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  foodCategoryImage: {
    width: 50,
    height: 40,
  },
  contain2: {
    height: 200,
    width: 140,
    padding: 2,
    borderRadius: 8,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popularfoodImage: {
    width: 130,
    height: 90,
  },
  bestsellerImage: {
    width: 90,
    height: 70,
  },
  contain3: {
    height: 100,
    width: 300,
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  navigationbar: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 25,
  }
});
