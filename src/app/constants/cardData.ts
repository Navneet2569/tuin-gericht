// constants/cardData.ts
import { CardData } from "../lib/types";

const singleCardData: CardData = {
  imageSrc: "/flower.png",
  title: "Snoeien",
  description:
    "Wij snoeien nauwkeurig, zorgen voor een nette afwerking en laten alles keurig achter. Zo kan de klant direct genieten van een prachtige tuin.",
};

// Create an array of 6 card data objects
export const cardDataArray: CardData[] = new Array(6).fill(singleCardData);
