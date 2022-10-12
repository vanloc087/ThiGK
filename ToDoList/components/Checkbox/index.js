import React, {useState} from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';

function CheckboxCustom(props) {
  const [checked, setChecked] = useState(false);

  const onSelect = (item) => {
    props.parentCallback(item);
  };
  return (
    <Checkbox 
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked); onSelect(props.item);
      }}/>
  )
}

export default CheckboxCustom;
