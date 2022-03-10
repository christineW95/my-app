/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { getMovieDetailsRequest } from "../services/APIs/MoviesAPIs";
import { API_KEY, config } from "../services/config";
import { useFetchMovieDetails } from "../store/fetchDataHook";
import colors from "../theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MovieDetails = ({ route, navigation }) => {
  const {
    movie: { id, poster, title, type, year },
  } = route.params;
  const {
    result: { data, loading },
    error,
  } = useFetchMovieDetails(id);
  const {
    imdbRating = "",
    Ratings = [],
    Actors = "",
    Writer = "",
    Released = "",
  } = data || {};
  const actors = Actors?.split(",") || [];
  const rating = Ratings[0]?.Value || "";
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Image
          source={{ uri: poster }}
          resizeMode="stretch"
          style={{ flex: 1, width: "90%", height: 300, borderRadius: 10 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 30,
            color: colors.darkgrey,
            fontWeight: "bold",
            paddingHorizontal: 20,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                color: colors.grey,
                fontWeight: "bold",
              }}
            >
              Imdb Rating
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.darkgrey,
                  fontWeight: "bold",
                }}
              >
                {imdbRating || ""}
              </Text>
              <MaterialCommunityIcons
                name="star"
                size={20}
                color={colors.yellow}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: colors.grey,
                fontWeight: "bold",
              }}
            >
              Rating
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.darkgrey,
                  fontWeight: "bold",
                }}
              >
                {rating || ""}
              </Text>
              <MaterialCommunityIcons
                name="star"
                size={20}
                color={colors.yellow}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.blue,
            flex: 1,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            paddingHorizontal: 20,
          }}
        >
          {actors.length > 0 ? (
            <>
              <Text
                style={{
                  fontSize: 25,
                  color: colors.white,
                  fontWeight: "bold",
                }}
              >
                Actors
              </Text>

              <View style={{ flexDirection: "row", flex: 1, flexWrap: "wrap" }}>
                {actors?.map((actor) => (
                  <Text
                    style={{
                      fontSize: 15,
                      color: colors.white,
                      fontWeight: "bold",
                      padding: 10,
                    }}
                  >
                    {actor + "  "}
                  </Text>
                ))}
              </View>
            </>
          ) : null}

          {Writer ? (
            <>
              <Text
                style={{
                  fontSize: 25,
                  color: colors.white,
                  fontWeight: "bold",
                }}
              >
                Writers
              </Text>

              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: colors.white,
                    fontWeight: "bold",
                    padding: 10,
                  }}
                >
                  {Writer + "  "}
                </Text>
              </View>
            </>
          ) : null}

{Released ? (
            <>
              <Text
                style={{
                  fontSize: 25,
                  color: colors.white,
                  fontWeight: "bold",
                }}
              >
                Release Date
              </Text>

              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: colors.white,
                    fontWeight: "bold",
                    padding: 10,
                  }}
                >
                  {Released + "  "}
                </Text>
              </View>
            </>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};
export default MovieDetails;
