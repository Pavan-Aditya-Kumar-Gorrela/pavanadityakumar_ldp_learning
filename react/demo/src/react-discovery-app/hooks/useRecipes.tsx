import { useMemo, useState } from "react";
import type { Recipe } from "../types/Recipe"


const useRecipes = (recipes: Recipe[]) => {

  const [ search , setSearch ] = useState<string>("");

  const filteredRecipes = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    return recipes.filter(r=> r.title.toLowerCase().includes(normalizedSearch) 
    || r.ingredients.some(item => item.toLowerCase().includes(normalizedSearch)));

  },[recipes,search]);


  return {
    search,
    setSearch,
    filteredRecipes
  }
}

export default useRecipes