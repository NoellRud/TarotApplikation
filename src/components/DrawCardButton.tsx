import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DrawCardButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <LinearGradient
        colors={["#77530a", "#ffd277", "#77530a", "#77530a", "#ffd277", "#77530a"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.buttonOuter}
      >
        <View style={styles.buttonInner}>
          <Text style={styles.buttonText}>Draw Card</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonOuter: {
    width: 160,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonInner: {
    width: "97%",
    height: "90%",
    borderRadius: 8,
    backgroundColor: "rgba(0, 0, 0, 0.842)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffd277",
    fontSize: 18,
  },
});