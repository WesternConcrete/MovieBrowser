import React from 'react';
import { ImageBackground, Image, View, StyleSheet, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Movie extends React.Component {
	state = {
		id:  this.props.navigation.getParam('id'),
        title: this.props.navigation.getParam('title'),
        year: this.props.navigation.getParam('year'),
        runtime: this.props.navigation.getParam('runtime'),
        genres: this.props.navigation.getParam('genres'),
        director: this.props.navigation.getParam('director'),
        actors: this.props.navigation.getParam('actors'),
        plot:this.props.navigation.getParam('plot'),
        url: this.props.navigation.getParam('url'), 
	}

	static navigationOptions = ({ navigation }) => {
	    return (
	    	{
	    		headerTitle: '',
	    		headerTintColor: '#fff',
	    		headerTransparent: true,
	    		headerLeft: () => (
	    			<TouchableOpacity
			          onPress={() => navigation.goBack()}
			   		  style={{paddingLeft: 10}}
			       	>
			       		<Ionicons
				          name="chevron-back-outline"
				          size={48}
				          color="#fff"
				        />
		       		</TouchableOpacity>
    			),
    			headerTitleStyle: {
			      fontWeight: 'bold',
			      paddingTop: 8,
			      fontSize: 30
			    },
	    	}
	    )
	 }


	render() {
		return(
			<SafeAreaView style={styles.container}>
				<ImageBackground source={{uri: this.props.navigation.getParam("url")}} style={styles.backgroundImage} imageStyle={{opacity:0.2}}>
					<ScrollView>
						<View style={{paddingTop: 45, alignItems: 'center'}}>
							 <Text style={styles.titleText}>{this.props.navigation.getParam('title')}</Text>
							 <Image source={{uri: this.props.navigation.getParam("url")}} style={styles.image}/>
							 <Text style={styles.subtext}>{this.props.navigation.getParam("year")}        {this.props.navigation.getParam('runtime')} minutes</Text>
							 <TouchableOpacity style={styles.playButton}>
							 	<Ionicons name="play" size={24} color="#000"/><Text style={styles.playText}> Play</Text>
							 </TouchableOpacity>
							 <View style={styles.plotView}>
							 	<Text style={styles.plotText}>{this.props.navigation.getParam('plot')}</Text>
							 	<View style={{paddingVertical:3}}/>
							 	<Text style={styles.castText}>Cast: {this.props.navigation.getParam('actors')}</Text>
							 	<Text style={styles.castText}>Director: {this.props.navigation.getParam('director')}</Text>
								<View style={{paddingVertical:20}}/>
							 </View>
						</View>
						
						
					</ScrollView>
				</ImageBackground>
			</SafeAreaView>


		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
  	fontSize: 28,
  	marginHorizontal: 20,
    fontWeight: "bold",
    color:"#fff",
    textAlign: "center"
  },
  subtext: {
  	fontSize: 16, 
  	fontWeight: "bold",
  	color: "#fff",
  	marginTop: 6
  },
  plotView: {
  	marginHorizontal: 18,
  },
  plotText: {
  	fontSize: 14, 
  	color: "#fff",
  	marginTop: 10,
  },
  image: {
  	width: 200, 
  	height: 300,
  	borderRadius: 5,
    overflow: 'hidden',
    marginTop: 17,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  playButton: {
  	backgroundColor: "#fff",
  	borderRadius: 10,
  	height: 35,
  	width: '90%',
  	justifyContent: 'center',
  	alignItems: 'center',
  	marginTop: 15,
  	flexDirection: 'row',
  },
  playText: {
  	color: "#000",
  	fontWeight: 'bold',
  	fontSize: 20
  },
  castText: {
  	color: "#fff",
  	opacity: .4,
  	fontSize: 12
  }
}
)