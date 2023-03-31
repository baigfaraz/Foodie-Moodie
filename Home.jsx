import { useEffect, useState } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image, FlatList, ScrollView } from 'react-native';
import app from './firebase';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Home({ navigation }) {

  const [category, setCategory] = useState();
  const [popularFoods, setPopularFoods] = useState();
  const [bestSeller, setBestSeller] = useState();

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'allOptions');
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      setCategory(data.foodCategory);
      setPopularFoods(data.popularFoods);
      setBestSeller(data.bestSellers);

    })
  }, [])

  const handleHeartColor = (item, place) => {
    const db = getDatabase(app)
    const dbRef = ref(db, `allOptions/` + place + `/${item.key}`)

    let color = "grey"
    if (item.heartColor == "grey")
      color = "red"
    update(dbRef, {  
      heartColor: color,
    })
  }
  const handleStarColor = (item, place) => {
    const db = getDatabase(app)
    const dbRef = ref(db, `allOptions/` + place + `/${item.key}`)

    let color = "grey"
    if (item.starColor == "grey")
      color = "yellow"
    update(dbRef, {
      starColor: color,
    })
  }

  let getDetail = (item) => {
    const db = getDatabase(app)
    // const Image = ref(db, `allOptions/` + place + `/${item.key}`)
    global.Itemdetail = item
    navigation.navigate('Detail')
  }

  return (

    <View style={styles.container}>

      <Icon name="apps" size={22} style={styles.headerLogo} />
      <Text style={styles.text1}>Hello Muhammad Faraz Baig!</Text>
      <Text style={styles.text2}>Choose your favorite food</Text>

      <View style={styles.foodCategory}>
        <TouchableOpacity style={styles.searchBar}
          onPress={() => { navigation.navigate('Search') }}
        >
          <Text style={{ fontSize: 15, fontWeight: '400' }}>Search Your Favourite Food</Text>
          <Icon name="search-sharp" size={25} style={styles.searcIcon} />
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

        <View style={{ height: 80 }}>
          <FlatList
            data={category}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({ item }) =>

              <View style={styles.items}>
                <TouchableOpacity>
                  <View style={styles.contain1}>
                    <Image source={{ uri: item.img }} style={styles.foodCategoryImage} />
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

        <View style={{ height: 240 }}>
          <FlatList
            data={popularFoods}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({ item }) =>

              <View style={styles.items}>
                <TouchableOpacity
                  onPress={() => { getDetail(item) }}
                >
                  <View style={styles.contain2}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: 140 }}>
                      <TouchableOpacity onPress={() => { handleStarColor(item, `popularFoods`) }}>
                        <Icon name={item.starIcon} size={20} color={item.starColor} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => { handleHeartColor(item, `popularFoods`) }}>
                        <Icon name={item.heartIcon} size={20} color={item.heartColor} />
                      </TouchableOpacity>
                    </View>
                    <Image source={{ uri: item.img }} style={styles.popularfoodImage} />
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

        <View style={{ height: 135 }}>
          <FlatList
            data={bestSeller}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({ item }) =>

              <View style={styles.items}>
                <TouchableOpacity onPress={() => { getDetail(item) }}>
                  <View style={styles.contain3}>
                    <Image source={{ uri: item.img }} style={styles.bestsellerImage} />
                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, marginLeft: 11 }}>{item.title}</Text>
                      <Text style={{ fontSize: 16, fontWeight: '500', margin: 5, marginLeft: 11 }}>{item.price}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: 100 }}>
                      <TouchableOpacity onPress={() => { handleStarColor(item, `bestSellers`) }}>
                        <Icon name={item.starIcon} size={20} color={item.starColor} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => { handleHeartColor(item, `bestSellers`) }}>
                        <Icon name={item.heartIcon} size={20} color={item.heartColor} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
      </ScrollView >

      <View style={styles.navigationbar}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Home') }}
        >
          <Icon name='home' size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate('favourite') }}
        >
          <Icon name='heart-sharp' size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate('CartScreen') }}
        >
          <Icon name='cart' size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Profile') }}
        >
          <Icon name='cog' size={30} />
        </TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  headerLogo: {
    height: 40,
    marginLeft: 17,
    alignItems: 'center',
    marginTop: 40,
    color: 'red',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 17,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 7,
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
  searchBar: {
    height: 40,
    marginTop: 10,
    marginBottom: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: 'white',
    backgroundColor: 'white',
    width: 270,
    marginLeft: 17,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searcIcon: {
    width: 30,
    height: 30,
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
    alignItems: 'center',
    justifyContent: "space-around"
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
