import React, { FC, useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useQuery } from "react-query";

import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import {
  speak,
  isSpeakingAsync as isSpeaking,
  stop as stopSpeaking,
} from "expo-speech";

// @ts-ignore
import regex from "emoji-regex/text";

import Text from "src/components/Text";
import Card from "src/components/Card";

import tw, { getColor } from "src/utils/tailwind";
import select from "src/utils/select";
import useColorScheme from "src/hooks/useColorScheme";
import useCachedResources from "src/hooks/useCachedResources";

import { REDDIT_CLIENT } from "src/reddit";

const App: FC = () => {
  const scheme = useColorScheme();
  const loaded = useCachedResources();

  const { isLoading, data, error } = useQuery("posts", async () => {
    const { data } = await REDDIT_CLIENT.get("/emojipasta.json", {
      params: {
        limit: 100,
      },
    });
    return data;
  });
  const posts = data?.data?.children ?? [];

  const [index, setIndex] = useState(0);
  const currentPost = posts[index];

  const { id, permalink: link, title, selftext: text } =
    currentPost?.data ?? {};
  const url = link ? `https://reddit.com${link}` : undefined;

  return loaded ? (
    <SafeAreaView
      style={[
        tw("h-full"),
        select(scheme, {
          light: tw("bg-gray-200"),
          dark: tw("bg-gray-900"),
        }),
      ]}
    >
      <StatusBar
        style={select<StatusBarStyle>(scheme, {
          light: "dark",
          dark: "light",
        })}
      />
      <View style={tw("p-6 flex-1")}>
        <Text
          style={[
            tw("self-center font-bold text-4xl"),
            select(scheme, {
              light: tw("text-teal-800"),
              dark: tw("text-teal-200"),
            }),
          ]}
        >
          👁 👄 👁
        </Text>
        <View style={tw("my-6 flex-1")}>
          <Card style={tw("p-0 max-h-full")}>
            <View style={tw("h-10")} />
            <View style={tw("absolute top-0 right-0 flex-row")}>
              <TouchableOpacity
                onPress={async () => {
                  if (!text) return;
                  if (await isSpeaking()) stopSpeaking();
                  else speak(text.replace(regex(), " "));
                }}
                style={tw("p-3")}
                activeOpacity={0.6}
              >
                <Feather
                  name="volume-2"
                  size={20}
                  color={getColor("gray-500")}
                />
              </TouchableOpacity>
              <View style={tw("flex-1")} />
              <TouchableOpacity
                onPress={() => url && Linking.openURL(url)}
                style={tw("p-3")}
                activeOpacity={0.6}
              >
                <Feather name="link" size={20} color={getColor("gray-500")} />
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={tw("p-6 pt-0")}>
              <Text
                style={[
                  tw("text-lg font-semibold"),
                  select(scheme, {
                    light: tw("text-gray-800"),
                    dark: tw("text-gray-100"),
                  }),
                ]}
              >
                {title}
              </Text>
              {!!text && (
                <Text
                  style={[
                    tw("text-base mt-4"),
                    select(scheme, {
                      light: tw("text-black"),
                      dark: tw("text-white"),
                    }),
                  ]}
                >
                  {text}
                </Text>
              )}
            </ScrollView>
          </Card>
        </View>
        <TouchableOpacity
          onPress={() => setIndex(Math.floor(Math.random() * posts.length))}
          style={tw("self-center px-8 py-2 bg-teal-400 rounded-full")}
          activeOpacity={0.6}
        >
          <Feather name="refresh-cw" size={24} color={getColor("teal-800")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  ) : null;
};

export default App;
