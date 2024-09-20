import { useState } from "react";

export function useCategoriesController(onSelectCategory: (categoryId: string) => Promise<void>) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  function handleSelectCategory(categoryId: string) {
    // setSelectedCategory(prevState => prevState === categoryId ? null : categoryId);
    const category = selectedCategory === categoryId ? '' : categoryId;
    setSelectedCategory(category);
    onSelectCategory(category);
  }

  return {
    selectedCategory,
    handleSelectCategory,
  };
}
