import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Pengaturan aplikasi akan ditaruh di sini.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#06080B",
    paddingTop: 48,
    paddingHorizontal: 14,
  },
  title: {
    color: "#F4F7FC",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    color: "#9CA5B4",
    fontSize: 13,
  },
});
