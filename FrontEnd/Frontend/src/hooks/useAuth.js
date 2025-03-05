import { create } from "zustand";
import { axiosInstanace } from "../lib/axios.js";
import axios from "axios";
import toast from "react-hot-toast";

export const useAuth = create((set) => ({
  authUser: null,
  isSigingUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const response = await axiosInstanace.get("/auth/check");
      set({ authUser: response.data });
    } catch (e) {
      set({ authUser: null });
      console.error;
      console.log(`Error in CheckAuth ${e}`);
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigingUp: true });
    try {
      const response = await axiosInstanace.post("/auth/signup", data);
      console.log(response.data);
      toast.success("Account created successfully");
      set({ authUser: response.data });
    } catch (e) {
      toast.error(`Error Happened in useAuth Hook ${e}`);
    } finally {
      set({ isSigingUp: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstanace.post("/auth/logout");
      set({ authUser: null });
      toast.success("You have Logged out successfully");
    } catch (e) {
      console.error;
      toast.error(`Error Happened in Logout ${e}`);
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const response = await axiosInstanace.post("/auth/login", data);
      set({ authUser: response.data });
      toast.success("Logged in successfully");
    } catch (e) {
      toast.error(`Error Happened In Log In ${e}`);
      console.error;
    }
  },
  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const response = await axiosInstanace.put("auth/update-profile", data);
      set({ authUser: response.data });
      toast.success(`Profile updated successfully`);
    } catch (e) {
      toast.error(`Error Happened in Updating Profile ${e}`);
    } finally {
    }
  },
}));
