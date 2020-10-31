import React, { FC, useEffect, useState } from "react"
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native"
import { useQuery } from "react-query"

import {
  speak,
  isSpeakingAsync as isSpeaking,
  stop as stopSpeaking,
} from "expo-speech"

import { StatusBar, StatusBarStyle } from "expo-status-bar"
import { Feather } from "@expo/vector-icons"
import { Plane } from "react-native-animated-spinkit"
import AuthorTag from "src/components/AuthorTag"

import tw, { getColor } from "src/utils/tailwind"
import select from "src/utils/select"
import useColorScheme from "src/hooks/useColorScheme"
import useCachedResources from "src/hooks/useCachedResources"

// @ts-ignore
import regex from "emoji-regex/text"

import Text from "src/components/Text"
import Card from "src/components/Card"

import { REDDIT_CLIENT } from "src/reddit"

const App: FC = () => {
  const scheme = useColorScheme()
  const loaded = useCachedResources()

  const { isLoading, data, error } = useQuery("posts", async () => {
    const { data } = await REDDIT_CLIENT.get("/emojipasta.json", {
      params: {
        limit: 100,
      },
    })
    return data
  })
  if (error) {
    const message =
      typeof error === "string"
        ? error
        : (error as { message?: string }).message ?? "Unknown query failure"
    Alert.alert("Error", message)
  }

  const [index, setIndex] = useState(0)
  const [seen, setSeen] = useState<Record<number, boolean>>({})

  const posts = data?.data?.children ?? []
  const currentPost = posts[index]

  const shufflePost = () => {
    let index: number | null = null
    while (index === null) {
      const candidate = Math.floor(Math.random() * posts.length)
      if (!seen[candidate]) {
        index = candidate
        setSeen({ ...seen, [index]: true })
      }
    }
    setIndex(index)
  }
  useEffect(shufflePost, [data])

  const { permalink: link, title, selftext: text, author: authorName } =
    currentPost?.data ?? {}
  const author = `u/${authorName}`
  const url = link ? `https://reddit.com${link}` : undefined

  return loaded ? (
    <SafeAreaView
      style={[
        tw("h-full"),
        select(scheme, {
          light: tw("bg-gray-300"),
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
        <View style={tw("my-5 flex-1")}>
          <Card style={tw("p-0 max-h-full")}>
            <View style={tw("h-10")} />
            <View style={tw("absolute top-0 right-0 flex-row")}>
              <TouchableOpacity
                onPress={async () => {
                  if (!text) return
                  if (await isSpeaking()) stopSpeaking()
                  else speak(text.replace(regex(), " "))
                }}
                activeOpacity={0.6}
                style={tw("p-3")}
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
                activeOpacity={0.6}
                style={tw("p-3")}
              >
                <Feather name="link" size={20} color={getColor("gray-500")} />
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={tw("p-6 pt-0")}>
              {isLoading ? (
                <View style={tw("py-10 items-center")}>
                  <Plane size={24} color={getColor("teal-500")} />
                </View>
              ) : (
                <View>
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
                  <AuthorTag author={author} style={tw("mt-1 self-start")} />
                  {!!text && (
                    <Text
                      style={[
                        tw("text-md mt-4"),
                        select(scheme, {
                          light: tw("text-black"),
                          dark: tw("text-white"),
                        }),
                      ]}
                    >
                      {text}
                    </Text>
                  )}
                </View>
              )}
            </ScrollView>
          </Card>
        </View>
        <TouchableOpacity
          onPress={async () => {
            shufflePost()
            if (await isSpeaking()) stopSpeaking()
          }}
          activeOpacity={0.6}
          style={tw("self-center", "bg-teal-400", "px-8 py-2", "rounded-full")}
        >
          <Feather name="refresh-cw" size={24} color={getColor("teal-800")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  ) : null
}

export default App
