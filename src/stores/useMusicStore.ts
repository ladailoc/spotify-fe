import { create } from 'zustand';
import { axiosInstance } from '~/lib/axios';
import type { Album, Song } from '~/types';

interface MusicStore {
  albums: Album[];
  songs: Song[];
  isLoading: boolean;
  error: string | null;
  fetchAlbums: () => Promise<void>; // vì đây là hàm bất đồng bộ
}

export const useMusicStore = create<MusicStore>(set => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null,

  fetchAlbums: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get('/albums');
      set({ albums: response.data });
    } catch (error: any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
