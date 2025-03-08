import { create } from "zustand";
import { axiosInstanace } from "../lib/axios";
import toast from "react-hot-toast";

export const useChat = create((set , get) => ({
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

  sendMessage:async (messageData) => {
   const {selectedUser , messages}  = get()
   try {
      const response = await axiosInstanace.post(`/message/send/${selectedUser._id}` , messageData)
      set({messages: [...messages , response.data]})
   } catch (e) {
      toast.error(`Error Happened In the Sending Message ${e}`)
   }
  },
  getSelectedUser: (selectedUser) => set({selectedUser}),
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
