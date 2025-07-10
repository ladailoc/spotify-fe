export interface Song {
  _id: string;
  title: string;
  artist: string;
  albumId: string | null;
  duration: number; // in seconds
  imageUrl: string;
  audioUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Album {
  _id: string;
  title: string;
  artist: string;
  imageUrl: string;
  releaseYear: number;
  songs: Song[];
  //   createdAt: Date;
  //   updatedAt: Date;
}
