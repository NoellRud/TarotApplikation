import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DrawCardButton from "../components/DrawCardButton";
import CARD_IMAGES from "../data/cardImages";

type TarotCard = {
  name: string;
  meaning: string;
  id: number;
};

const TAROT_CARDS: TarotCard[] = [
  { id: 0, name: "Fool", meaning: "The start of a grand adventure. Beginnings, Foolishness, Innocence, Euphoria, Journey. \n*Warning: Delinquent, Pretentious*" },
  { id: 1, name: "Magician", meaning: "Ability to work a room, casting wild magic and dazzling all. Mastery, Confidence, Talent, Will, Charisma. \n*Warning: Anxiety, Slander*" },
  { id: 2, name: "High Priestess", meaning: "The blueprint of mind, body and spirit. The sanctum of the inner self. Oracle, Occult, Enigma, Authenticity, Mystery, Intelligence. \n*Warning: Weakness, Shallow*" },
  { id: 3, name: "Empress", meaning: "The mother archetype and appearance of unbound creativity and nurturing, sensual love. Plentiful, Activity, Originality, Fertility, Reinvention. \n*Warning: Doubt, Impotent*" },
  { id: 4, name: "Emperor", meaning: "The father archetype who is a strong figure laying foundations, habits, and rules while creating boundaries. Steadfast, Dependable, Command, Conviction, Purpose \n*Warning: Difficulty, Trapped*" },
  { id: 5, name: "Hierophant", meaning: "The spiritual archetype who facilitates the mentor and student relationship and all gifts found therein. Religion, Dogma, Sacrament, Guidance, Ritual. \n*Warning: Distrust, Skepticism*" },
  { id: 6, name: "Lovers", meaning: "The archetype of Eros reflecting a romantic life exploding with sexual desire and attraction. Love, Seduction, Allure, Desire, Eroticism. \n*Warning: Repulsion, Abandon*" },
  { id: 7, name: "Chariot", meaning: "Sitting in the driver's seat and steering the wheel of your life in the direction of your choosing. Aid, Battle, Pride, Conquest, Agility. \n*Warning: Collapse, Breakdown*" },
  { id: 8, name: "Strength", meaning: "The fortitude of the spirit who does not conquer to succeed but who uses inner reserves of power. Dynamic, Vitality, Discipline, Vigor, Victory. \n*Warning: Corruption, Disrespect*" },
  { id: 9, name: "Hermit", meaning: "Pulling oneself away from society to mine the secrets of the inner self and its response to the outer world. Sagacity, Vigilance, Divine Mystery, Introversion, Retreat. \n*Warning: Fright, Hiding*" },
  { id: 10, name: "Wheel of Fortune", meaning: "Destiny and the energetic revolutions of the celestial universe. Fortune, Fame, Happiness, Lucky, Winds of Fate. \n*Warning: Flux, Cycles*" },
  { id: 11, name: "Justice", meaning: "The work put in equals the benefits received. Integrity, Work, Law, Righteous, Truth. \n*Warning: Favoritism, Legal Blockage*" },
  { id: 12, name: "The Hanged Man", meaning: "Deep contemplation and pause leading to a new way of understanding the world and all things in it. Watchfulness, Offering, Mystic, Occultism, Prophecy. \n*Warning: Common Thinking, Crowd Psychology*" },
  { id: 13, name: "Death", meaning: "The energy making all life possible. Terminus, Carnage, Loss, Passage, Evolution. \n*Warning: Paralysis, not ready to change plans*" },
  { id: 14, name: "Temperance", meaning: "The honing of skills and ability to hold to oppositional truths equally. Prudence, Synthesis, Administration, Complexity, Alchemy. \n*Warning: Imbalance, Uneven*" },
  { id: 15, name: "The Devil", meaning: "Repression, tyranny and source of all internal chaos leading the external discord. Compulsion, Desecrate, Violence, Disaster, Hedonism. \n*Warning: Triviality, Lack of importance, Nonchalance*" },
  { id: 16, name: "Tower", meaning: "The breakdown of what was never meant to be and release of attachment. Agony, Tribulation, Ruin, Humbling, Unforeseen, Disaster. \n*Warning: Catastrophe but to a Lesser Degree*" },
  { id: 17, name: "The Star", meaning: "The quiet after the storm issuing peace and calm of the soul leading to inspiration and openness. Catharsis, Inspiration, Hope, Optimism, Clarity. \n*Warning: Disdain, Arrogant, a noticeable contempt for others*" },
  { id: 18, name: "The Moon", meaning: "A new impulse rises, dreams and esoteric visions signaling what is to come. Mystery, Occult, Hidden Adversaries, Beguilement, Obscurity. \n*Warning: Error and Deception of Lesser Impact*" },
  { id: 19, name: "The Sun", meaning: "The exuberance and manifestation of the soul in every way. Prosperity, Contentment, Material Abundance, Success, Vitality. \n*Warning: The Same Meaning but Less Intense*" },
  { id: 20, name: "Judgement", meaning: "A wake up call signaling the awareness that the pattern has changed. Life will never be the same. Revolutionary Change, Regeneration, Results, Awaken, Release. \n*Warning: Wicked, Cruel, Treacherous, Weak*" },
  { id: 21, name: "The World", meaning: "The nirvana of awareness, presence and bringing the light consciousness to all you turn your attention toward. Success Defined, Journey, Euphoria, Travel, Perfection. \n*Warning: Idle, Sluggish*" },
];



export default function Index() {
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);

  function drawCard() {
    const randomIndex = Math.floor(Math.random() * TAROT_CARDS.length);
    setSelectedCard(TAROT_CARDS[randomIndex]);
  }

  function goBack() {
    setSelectedCard(null);
  }

  return (
  <LinearGradient
      colors={["#0d2818", "#5d5839", "#0d2818"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {selectedCard && (
  <TouchableOpacity style={styles.backButton} onPress={goBack}>
    <Ionicons name="arrow-back" size={28} color="#ffd277" />
  </TouchableOpacity>
)}

{selectedCard ? (
        <View style={styles.card}>
          <Text style={styles.cardName}>{selectedCard.name}</Text>
          <Image
            source={CARD_IMAGES[selectedCard.id]}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardMeaning}>{selectedCard.meaning}</Text>
        </View>
      ) : (
      <Image
    source={require("../../assets/TarotBack5.png")}
    style={styles.cardBackImage}
    resizeMode="cover"
  />
    )}
    <View style={styles.buttonContainer}>
    <DrawCardButton onPress={drawCard} />
    </View>
  </LinearGradient>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
buttonContainer: {
  position: "absolute",
  bottom: 100,
  alignSelf: "center",
},
backButton: {
  position: "absolute",
  top: 50,
  left: 20,
  zIndex: 10,
},
card: {
  // width: 220,
  height: 340,
  borderRadius: 16,
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  marginBottom: 100,
},
cardImage: {
  width: 180,
  height: 360,
  borderRadius: 16,
  marginBottom: 12,
},
  cardBackImage: {
  width: 220,
  height: 380,
  borderRadius: 16,
  marginBottom: 60,
},
  cardBackText: {
    fontSize: 64,
  },
  cardName: {
    fontSize: 30,
    color: "#ffd277",
    textShadowColor: "#143c14",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    marginBottom: 12,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: 8,
    textAlign: "center",
  },
cardMeaning: {
  fontSize: 15,
  fontStyle: "italic",
  color: "#ffd277",
  textAlign: "center",
  paddingHorizontal: 16,
  paddingVertical: 8,
  backgroundColor: "rgba(0, 0, 0, 0.35)",
  borderRadius: 8,
  overflow: "hidden",
  },
});
