import * as React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Creators } from "../store/ducks/profile";

import ProfileItems from "./components/ProfileItems";
import SearchBar from "./components/SearchBar";

const Loading: React.FC = () => {
  return (
    <View style={{ flex: 1, marginTop: 24 }}>
      <ActivityIndicator color="#6100FF" />
    </View>
  );
};

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  React.useEffect(() => {}, []);

  function searchProfile(username: string) {
    dispatch(Creators.searchProfileRequest(username));
  }

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {!profile.data.global_stats && profile.loading && <Loading />}

      {profile.data.global_stats && profile.loading && <Loading />}

      {profile.data.global_stats && !profile.loading && (
        <ScrollView>
          <SearchBar onSubmit={searchProfile} />
          <ProfileItems userData={profile.data} />
        </ScrollView>
      )}

      {profile.data.error && !profile.loading && (
        <View>
          <SearchBar onSubmit={searchProfile} />
          <Text style={[styles.text, styles.errorText]}>
            {profile.data.error}
          </Text>
        </View>
      )}

      {!profile.data.global_stats && !profile.loading && !profile.data.error && (
        <View>
          <SearchBar onSubmit={searchProfile} />
          <Text style={styles.text}>
            Search your stats with your Epic Games username!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "bold",
    margin: 12,
  },

  errorText: {
    color: "red",
  },
});

export default Profile;
