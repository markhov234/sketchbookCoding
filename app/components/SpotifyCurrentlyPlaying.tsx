// "use client";
// import { useState, useEffect } from "react";
// import getSpotifyApi from "./getSpotifyApi";

// interface Track {
//   name: string;
//   artists: { name: string }[];
//   album: { name: string; images: { url: string }[] };
// }

// const SpotifyCurrentlyPlaying = () => {
//   const [track, setTrack] = useState<Track | null>(null);

//   useEffect(() => {
//     const getCurrentlyPlaying = async () => {
//       const spotifyApi = await getSpotifyApi();
//       const response = await spotifyApi.getMyCurrentPlaybackState();
//       setTrack(response.item);
//     };

//     getCurrentlyPlaying();
//   }, []);

//   return (
//     <div>
//       {track ? (
//         <div>
//           <p>Currently playing: {track.name}</p>
//           <p>Artist: {track.artists[0].name}</p>
//           <img src={track.album.images[0].url} alt={track.album.name} />
//         </div>
//       ) : (
//         <p>No track currently playing</p>
//       )}
//     </div>
//   );
// };

// export default SpotifyCurrentlyPlaying;
