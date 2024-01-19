import { Button } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import {
  Image,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
  Text,
  TextInput,
  StyleSheet,
} from "react-native"
import { searchFlight } from "app/services/api/airlabs/api"
import useSearchFlight from "app/services/api/airlabs/searchFlightHook"
import set from "date-fns/fp/set/index"

interface FlightScreenProps extends AppStackScreenProps<"Flight"> {}

export const FlightScreen: FC<FlightScreenProps> = observer(function FlightScreen(_props) {
  const { searchValue, setSearchValue, loading, data, error } = useSearchFlight()

  const [input, setInput ] = useState("")

  console.log(data)

  const handleSearchInput: (text: string) => void = (text) => {
    setSearchValue(text)
  }

  return (
    <View style={[styles.screenWidth, { flex: 1 }, styles.colCenter]}>
      <Text>HELLO WORLD</Text>
      <TextInput
        value={input}
        onChangeText={(text) => setInput(text)}
        placeholder="Enter  ICAO or IATA code-name"
      />
      <Button onPress={() => handleSearchInput(input)}>Search</Button>
    </View>
  )
})

const styles = StyleSheet.create({
  screenWidth: {
    width: "100%",
    height: "100%",
  },
  colCenter: {},
})
