import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchArea}>
          <Text>search</Text>
        </View>
        <View style={styles.listArea}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchArea: {
    padding: 16,
    backgroundColor: "green",
  },
  listArea: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
