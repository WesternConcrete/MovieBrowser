import React from 'react';
import { Button, Image, View, StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import data from "./tester"

export default class Browse extends React.Component {
	static navigationOptions = ({ navigation }) => {
	    return (
	    	{
	    		headerTransparent: true,
	    		headerTitle: "",
	    	}
	    )
	 }


	render() {
		return (
			<SafeAreaView style={styles.container}>

				<View>
					<FlatList
						data={data}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => 
							
							<View style={styles.category}>
								<View>
									<Text style={styles.genreText}>{item.genre}</Text>
								</View>
								<FlatList
									data={item.data}
									keyExtractor={(item, index) => index.toString()}
									horizontal={true}

									renderItem={({ item }) => 

										<TouchableOpacity style={{paddingRight: 30, paddingTop: 10}} onPress={() => this.props.navigation.navigate("Movie", item)}>
											<Image source={{uri: item.url}} style={{width: 120, height: 180, borderRadius: 4}}/>
										</TouchableOpacity>
									}
								/>
							</View>
						}
					/>
				</View>
				<View style={{position: 'absolute', top: 10, right: 10}}>
					<TouchableOpacity
		        onPress={() => this.props.navigation.navigate('Search')}
		   		  style = {{paddingRight: 10, paddingTop: 18}}
		       	>
		       		<Ionicons
			          name="search"
			          size={40}
			          color="#fff"
			        />
		       	</TouchableOpacity>
				</View>
			</SafeAreaView>

		)
	}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  genreText: {
  	fontSize: 20,
    fontWeight: "bold",
    color:"#fff"
  },
  text: {
  	fontSize: 10,
    color:"#fff"
  },
  category: {
  	padding: 20
  }
});
