import React from 'react';

import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import styles from './styles';

const ProfileItem = ({ profile, stats, loading }) => {
  //const teste = JSON.stringify(stats)
  //console.tron.log('status', stats)
    return(

    <View>
      
      { !stats
            ? <ActivityIndicator size="small" color={styles.loading.color} style={styles.loadContainer}/>
            : <ScrollView> 
                <View style={styles.header}>
                  <Text style={styles.title}>{profile.epicUserHandle}</Text>
                  <Text style={styles.platform}>{profile.platformNameLong}</Text>
                </View>
               
                <View style={styles.content}>
                  <View style={styles.contentSon}>
                    <Text style={styles.titleSon}>Kills</Text>
                    <Text style={styles.text}>Solo: {stats.p2.kills.value}</Text>
                    <Text style={styles.text}>Duo: {stats.p10.kills.value}</Text>
                    <Text style={styles.text}>Squad: {stats.p9.kills.value}</Text>
                  </View>
                  <View style={styles.contentSon}>
                    <Text style={styles.titleSon}>K/D Ratio</Text>
                    <Text style={styles.text}>Solo: {stats.p2.kd.value}</Text>
                    <Text style={styles.text}>Duo: {stats.p10.kd.value}</Text>
                    <Text style={styles.text}>Squad: {stats.p9.kd.value}</Text>
                  </View>
                </View>

                <View style={styles.content}>
                  <View style={styles.contentSon}>
                    <Text style={styles.titleSon}>Matches</Text>
                    <Text style={styles.text}>Solo: {stats.p2.matches.value}</Text>
                    <Text style={styles.text}>Duo: {stats.p10.matches.value}</Text>
                    <Text style={styles.text}>Squad: {stats.p9.matches.value}</Text>
                  </View>
                  <View style={styles.contentSon}>
                    <Text style={styles.titleSon}>Wins</Text>
                    <Text style={styles.text}>Solo: {stats.p2.top1.value}</Text>
                    <Text style={styles.text}>Duo: {stats.p10.top1.value}</Text>
                    <Text style={styles.text}>Squad: {stats.p9.top1.value}</Text>
                  </View>
                </View>

                <View style={styles.content}>
                  <View style={styles.contentSon}>
                    <Text style={styles.titleSon}>Kill per Game</Text>
                    <Text style={styles.text}>Solo: {stats.p2.kpg.value}</Text>
                    <Text style={styles.text}>Duo: {stats.p10.kpg.value}</Text>
                    <Text style={styles.text}>Squad: {stats.p9.kpg.value}</Text>
                  </View>
                  <View style={styles.contentSon}>
                    <Text style={styles.titleSon}>Score per Match</Text>
                    <Text style={styles.text}>Solo: {stats.p2.scorePerMatch.value}</Text>
                    <Text style={styles.text}>Duo: {stats.p10.scorePerMatch.value}</Text>
                    <Text style={styles.text}>Squad: {stats.p9.scorePerMatch.value}</Text>
                  </View>
                </View>

                <View style={styles.content}>
                  <View style={styles.contentSolo}>
                    <Text style={styles.titleSon}>Top 3</Text>
                    <Text style={styles.text}>Solo: {stats.p2.top3.value}</Text>
                    <Text style={styles.text}>Duo: {stats.p10.top3.value}</Text>
                    <Text style={styles.text}>Squad: {stats.p9.top3.value}</Text>
                  </View>
                </View>

                <View style={styles.content}>
                  <View style={styles.contentSolo}>
                    <Text style={styles.titleSon}>Top 5</Text>
                    <Text style={styles.text}>Solo: {stats.p2.top5.value}</Text>
                    <Text style={styles.text}>Duo: {stats.p10.top5.value}</Text>
                    <Text style={styles.text}>Squad: {stats.p9.top5.value}</Text>
                  </View>
                </View>

                <View style={styles.content}>
                  <View style={styles.contentSolo}>
                    <Text style={styles.titleSon}>Top 10</Text>
                    <Text style={styles.text}>Solo: {stats.p2.top10.value}</Text>
                    <Text style={styles.text}>Duo: {stats.p10.top10.value}</Text>
                    <Text style={styles.text}>Squad: {stats.p9.top10.value}</Text>
                  </View>
                </View>

                <View style={styles.content}>
                  <View style={styles.contentSolo}>
                    <Text style={styles.titleSon}>Top 25</Text>
                    <Text style={styles.text}>Solo: {stats.p2.top25.value}</Text>
                    <Text style={styles.text}>Duo: {stats.p10.top25.value}</Text>
                    <Text style={styles.text}>Squad: {stats.p9.top25.value}</Text>
                  </View>
                </View>

              </ScrollView>
          }

    </View>

)};

export default ProfileItem;
