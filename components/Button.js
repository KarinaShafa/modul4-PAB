import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Functional Component with props
const Button = (props) => { 
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}> 
  {/* element touchableOpacity memberikan feedback saat ditekan dan akan menjalankan
  nilai props ketika ditekan */}
      <Text style={styles.text}>{props.text}</Text> 
      {/* props.text digunakan untuk menampilkan text yang terdapat pada properti */}
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dddddd",
    padding: 15,
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Button;

