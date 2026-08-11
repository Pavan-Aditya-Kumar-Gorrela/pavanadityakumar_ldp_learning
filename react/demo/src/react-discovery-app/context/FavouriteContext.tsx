import { useContext, createContext, useState } from "react";
import type { Recipe } from "../types/Recipe";


interface FavouriteContextType {
    favourites : Recipe[];
    toggleFavourite : (recipe : Recipe) => void;
    isFavourite : (id:number) => boolean;
}

interface ProviderProps {
    children : React.ReactNode;
}



const FavouriteContext  = createContext<FavouriteContextType | null>(null);

export const useFavourite = () => {
    const ctx = useContext(FavouriteContext);
    if(!ctx) {
        throw new Error("Provider not Wrapped");
    }
    return ctx;
}

const FavouriteProvider : React.FC<ProviderProps> = ({children}) =>{

    const [ favourites, setFavourites] = useState<Recipe[]>([]);


    const isFavourite = (id:number)=>{
        return favourites.some(f=> f.id === id);
    }

    const toggleFavourite = (recipe: Recipe) =>{
        setFavourites(prev => {
            const exists = prev.some(f=>f.id === recipe.id)
            if(exists){
                return prev.filter(f=>f.id!==recipe.id);
            }
            return [...prev, recipe];
        })
    }

    return (
        <FavouriteContext.Provider value ={{
            favourites,
            toggleFavourite,
            isFavourite
        }}>
            {children}
        </FavouriteContext.Provider>
    )
    

}

export {FavouriteProvider};

