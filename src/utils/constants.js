import { GOOGLE_API_KEY } from "./Dummy";

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SUGGESTION_API = 
"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="