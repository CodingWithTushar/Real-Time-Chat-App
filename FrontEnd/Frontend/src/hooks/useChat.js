import { create } from "zustand";
import { axiosInstanace } from "../lib/axios";
import toast from "react-hot-toast";

export const useChat = create((set) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const response = await axiosInstanace.get("message/users");
      set({ users: response.data });
    } catch (e) {
      toast.error(`Error Happened in the users section ${e}`);
    } finally {
      set({ isUsersLoading: false });
    }
  },
  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const response = await axiosInstanace.get(`message/${userId}`);
      set({ messages: response.data });
    } catch (e) {
      toast.error(`Error Happened in the messages section ${e}`);
    } finally {
      set({ isMessagesLoading: false });
    }
  },
}));
