//This goes over form set up using a madlibs like model

import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import stylesFn from "./style";
import { useUpdateFields } from "../../components/hooks";

const MadLibs = () => {
  const styles = stylesFn();
  const [adjective, setAdjective] = useState('');
  const [verb, setVerb] = useState('');
  const [storyReady, setStoryReady] = useState(false);
  const onSubmit = () => {
    setStoryReady(true)
    console.log('submit click')
  }


  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.topThirdBox}>
            <TextInput
              style={styles.textField}
              key={"adjective"}
              placeholder="adjective"
              value={adjective}
              onChangeText={(text) => setAdjective(text)}
            />
            <TextInput
              style={styles.textField}
              key={"verb"}
              placeholder="verb"
              value={verb}
              onChangeText={(text) => setVerb(text)}
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
          <View>
            {storyReady && (
              <View style={styles.storyText}>
                <Text style={styles.textBox}>
                  {`Our ${adjective} priority is to satisfy the customer through early and continuous delivery of valuable software.`}
                </Text>

                <Text style={styles.textBox}>
                  {`Welcome changing requirements, even late in development. Agile processes harness change for  the customer's competitive advantage.`}
                </Text>

                <Text style={styles.textBox}>
                  {`${verb} working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.`}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MadLibs;
