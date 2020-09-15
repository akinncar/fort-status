import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const ProfileItems: React.FC = ({ userData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Kills</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.kills}
        </Text>
        <Text style={styles.text}>Duo: {userData.global_stats.duo.kills}</Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.kills}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>K/D Ratio</Text>
        <Text style={styles.text}>Solo: {userData.global_stats.solo.kd}</Text>
        <Text style={styles.text}>Duo: {userData.global_stats.duo.kd}</Text>
        <Text style={styles.text}>Squad: {userData.global_stats.squad.kd}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Total Matches</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.matchesplayed}
        </Text>
        <Text style={styles.text}>
          Duo: {userData.global_stats.duo.matchesplayed}
        </Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.matchesplayed}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Total Minutes</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.minutesplayed}
        </Text>
        <Text style={styles.text}>
          Duo: {userData.global_stats.duo.minutesplayed}
        </Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.minutesplayed}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Win Rate</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.winrate}
        </Text>
        <Text style={styles.text}>
          Duo: {userData.global_stats.duo.winrate}
        </Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.winrate}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Score</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.score}
        </Text>
        <Text style={styles.text}>Duo: {userData.global_stats.duo.score}</Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.score}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Place Top 1</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.placetop1}
        </Text>
        <Text style={styles.text}>
          Duo: {userData.global_stats.duo.placetop1}
        </Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.placetop1}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Place Top 2</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.placetop2}
        </Text>
        <Text style={styles.text}>
          Duo: {userData.global_stats.duo.placetop2}
        </Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.placetop2}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Place Top 3</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.placetop3}
        </Text>
        <Text style={styles.text}>
          Duo: {userData.global_stats.duo.placetop3}
        </Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.placetop3}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Place Top 5</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.placetop5}
        </Text>
        <Text style={styles.text}>
          Duo: {userData.global_stats.duo.placetop5}
        </Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.placetop5}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Place Top 6</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.placetop6}
        </Text>
        <Text style={styles.text}>
          Duo: {userData.global_stats.duo.placetop6}
        </Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.placetop6}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Place Top 10</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.placetop10}
        </Text>
        <Text style={styles.text}>
          Duo: {userData.global_stats.duo.placetop10}
        </Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.placetop10}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Place Top 12</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.placetop12}
        </Text>
        <Text style={styles.text}>
          Duo: {userData.global_stats.duo.placetop12}
        </Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.placetop12}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Place Top 25</Text>
        <Text style={styles.text}>
          Solo: {userData.global_stats.solo.placetop25}
        </Text>
        <Text style={styles.text}>
          Duo: {userData.global_stats.duo.placetop25}
        </Text>
        <Text style={styles.text}>
          Squad: {userData.global_stats.squad.placetop25}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: 900,
    margin: 6,
  },

  content: {
    flex: 1,
    margin: 12,
    padding: 16,
    height: 120,
    minWidth: 150,
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    borderRadius: 8,
  },

  title: {
    color: "#6100FF",
    fontWeight: "bold",
    fontSize: 18,
  },

  text: {
    color: "#222",
    fontSize: 12,
  },

  platform: {},
});

export default ProfileItems;
