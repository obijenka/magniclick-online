import { useState, useEffect } from "react";
import { updateLikesCount } from "../services/api";

export function useLikes(initialItems) {
  const [items, setItems] = useState(initialItems);
  const [likedItems, setLikedItems] = useState({});

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedItems"));
    if (savedLikes) {
      setLikedItems(savedLikes);
    }
  }, []);

  const handleLike = async (item) => {
    const currentLiked = likedItems[item.id];
    const newLikedState = !currentLiked;
    const previousItems = [...items];

    setItems((prev) =>
      prev.map((i) =>
        i.id === item.id
          ? { ...i, likes: newLikedState ? i.likes + 1 : i.likes - 1 }
          : i,
      ),
    );

    setLikedItems((prev) => {
      const updated = { ...prev, [item.id]: newLikedState };
      localStorage.setItem("likedItems", JSON.stringify(updated));
      return updated;
    });

    try {
      const newLikesCount = newLikedState ? item.likes + 1 : item.likes - 1;
      await updateLikesCount(item.id, newLikesCount);
    } catch (err) {
      setItems(previousItems);
      console.error("Ошибка при лайке:", err);
    }
  };

  return { items, setItems, likedItems, handleLike };
}
