import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

function Item ({ nom,limite,post }) {
const nav = useNavigation(); 

return(
  <View style={styles.item}>
  <Text style={styles.title}>{nom}</Text >
  <Text style={styles.limite}>{post}</Text >
  <Text style={styles.limite}>{limite}</Text >
  
  </View>
)
 
}

const ItemList = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <Item nom={item.nom} limite={item.limite} post={item.post}   />}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
   //backgroundColor: 'blue',
    padding: 10,
  
    marginHorizontal: 5,
    borderRadius:20,
   // flexDirection:'row'
    
  },
  title: {
    fontSize: 20,
    color:"black",
    marginRight:50
  },
    limite: {
    fontSize: 15,
    color:"black",
    marginRight:50
  },
  button: {
    backgroundColor: '#0782F9',
    width: '20%',
   // padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10,
    //marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default ItemList;