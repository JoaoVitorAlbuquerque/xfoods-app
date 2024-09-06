import { useState } from "react";

export function useCategoriesController() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  function handleSelectCategory(categoryId: string) {
    setSelectedCategory(prevState => prevState === categoryId ? null : categoryId);
  }

  return {
    selectedCategory,
    handleSelectCategory,
  };
}
