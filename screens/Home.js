import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/bg_image.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>satélite potoco</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("eeiScreen");
            }}
          >
            <Text style={styles.buttonText}></Text>
            <Image
              source={require("../assets/iss_icon.png")}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("meteorDinosarus");
            }}
          >
            <Text style={styles.buttonText}></Text>
            <Image
              source={require("../assets/meteor_icon.png")}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </ImageBackground>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  iconImage: {
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: -35,
    top: -1,
  },
  titleBar: { flex: 0.15, justifyContent: "center", alignItems: "center" },
  titleText: { fontSize: 40, fontWeight: "bold", color: "white" },
  button: {
    width: 280,
    height: 280,
    marginTop: 50,
    backgroundColor: "white",
    borderRadius: 10000,
    alignSelf: "center",
  },
});
