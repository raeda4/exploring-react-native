import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import stylesFn from "./style";
import { useUpdateFields } from "../../components/hooks";

const MadLibs = ({ disabled = false, onSubmit }) => {
  const styles = stylesFn();
  const { fields, setFormField } = useUpdateFields()
  const [value, onChangeText] = React.useState('Dog');

  console.log(setFormField)

  const {
    common_name,
    adjective,
    } = fields

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.topThirdBox}>
          <TextInput
            key={'adjective'}
            placeholder="adjective"
            value={adjective}
            onChangeText={v => setFormField('scientific_name', v)}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity 
            style={styles.storyButton}
            onPress={onSubmit}
          >
            <Text>Generate Story</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.topThirdBox}>
          <Text>Test 34</Text>
        </View>
      </View>
    </View>
  );
}

export default MadLibs
