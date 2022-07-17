import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurants-info";

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchArea}>
          <Searchbar />
        </View>
        <View style={styles.listArea}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchArea: {
    padding: 16,
    backgroundColor: "white",
  },
  listArea: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
