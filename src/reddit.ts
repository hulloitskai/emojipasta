import Axios from "axios"

export const REDDIT_URL = "https://reddit.com/r"
export const REDDIT_CLIENT = Axios.create({
  baseURL: REDDIT_URL,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (iPod; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/86.0.4240.93 Mobile/15E148 Safari/604.1",
  },
})
