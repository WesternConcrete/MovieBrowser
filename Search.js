import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class Search extends React.Component {
	static navigationOptions = ({ navigation }) => {
	    return {
	      headerTransparent: false,
	      headerTitle: '',
	      // headerLeft: () => (
	      //   <TouchableOpacity
	      //     onPress={() => navigation.goBack()}
	      //     style = {{paddingLeft: 10, paddingTop: 10}}
	      //  	>
	      //  		<Ionicons
		     //      name="chevron-back-outline"
		     //      size={40}
		     //      color="#fff"
		     //    />
	      //  	</TouchableOpacity>
	      // ),
			}
		}


	render() {
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView >
					<Text style={styles.text}>Search Page</Text>
				</ScrollView>
				<View style={{position: 'absolute', top: 10, left: 10}}>
						<TouchableOpacity
			        onPress={() => this.props.navigation.navigate("Browse")}
			   		  style = {{paddingLeft: 5, paddingTop: 15}}
			       	>
			       		<Ionicons
				          name="close-outline"
				          size={52}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
  	fontSize: 20,
    fontWeight: "bold",
    color:"#fff"
  }
});