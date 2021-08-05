import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Description } from "./components";
import { Listing as ListingModel } from "./components/Listing";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
    width,
    height: width
  },
  thumbnailOverlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 16
  }
});

interface ListingProps {
  navigation: any,
  route: any,
}

const Listing = ({ navigation, route }: ListingProps) => {
  const listing: ListingModel = route.params.listing;

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1
        }}
      >
        <View>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={listing.picture}
          />
          <SafeAreaView style={styles.thumbnailOverlay}>
            <Icon.Button
              name="x"
              backgroundColor="transparent"
              underlayColor="transparent"
              onPress={() => navigation.goBack()}
            />
          </SafeAreaView>
        </View>
        <Description />
      </View>
    </View>
  );
};

export default Listing;
