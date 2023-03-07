// import SpotifyWebApi from "spotify-web-api-js";

// const getSpotifyApi = async () => {
//   const response = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: `Basic ${btoa(
//         `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
//       )}`,
//     },
//     body: "grant_type=client_credentials",
//   });

//   const { access_token } = await response.json();

//   const spotifyApi: SpotifyWebApi.SpotifyWebApiJs = new SpotifyWebApi();
//   spotifyApi.setAccessToken(access_token);

//   console.log(spotifyApi);

//   return spotifyApi;
// };

// export default getSpotifyApi;
