"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { triggerConfetti } from "@/lib/confetti";

interface UserContextType {
  userName: string;
  userVibe: string;
  isRegistered: boolean;
  isModalOpen: boolean;
  saveUser: (name: string, vibe?: string) => void;
  openModal: () => void;
  closeModal: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const STORAGE_NAME_KEY = "ze_user_name";
const STORAGE_VIBE_KEY = "ze_user_vibe";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState<string>("");
  const [userVibe, setUserVibe] = useState<string>("Starboy");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hasCheckedStorage, setHasCheckedStorage] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedName = localStorage.getItem(STORAGE_NAME_KEY);
      const savedVibe = localStorage.getItem(STORAGE_VIBE_KEY);

      if (savedName && savedName.trim() !== "") {
        setUserName(savedName.trim());
        if (savedVibe) setUserVibe(savedVibe);
        setIsRegistered(true);
      } else {
        // If first time visiting, open the interactive welcome modal after a slight delay
        const timer = setTimeout(() => {
          setIsModalOpen(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      console.warn("Storage not available:", e);
    } finally {
      setHasCheckedStorage(true);
    }
  }, []);

  const saveUser = (name: string, vibe: string = "Starboy") => {
    const cleanName = name.trim() || "Bestie";
    setUserName(cleanName);
    setUserVibe(vibe);
    setIsRegistered(true);
    setIsModalOpen(false);

    try {
      localStorage.setItem(STORAGE_NAME_KEY, cleanName);
      localStorage.setItem(STORAGE_VIBE_KEY, vibe);
    } catch (e) {
      console.warn("Failed to save to localStorage:", e);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <UserContext.Provider
      value={{
        userName,
        userVibe,
        isRegistered,
        isModalOpen,
        saveUser,
        openModal,
        closeModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
