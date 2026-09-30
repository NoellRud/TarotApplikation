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
  { id: 22, name: "Ace of Wands", meaning: "The wellspring of desire leading to the road of adventure. Authentic Energy, Passion, Originality, Font, Brilliance. \n*Warning: Disappointment, Flareout*"},
  { id: 23, name: "Two of Wands", meaning: "Having the world at your fingertips and planning ahead for useful self-made opportunity. Split Between Worlds, Material Wealth Without Love, Duality. \n*Warning: Amazement, Awe*"},
  { id: 24, name: "Three of Wands", meaning: "Collaboration with those who share your vision. Trade, Commerce, Putting One's Ships to Sea, Business Ventures. \n*Warning: Break from Work*"},
  { id: 25, name: "Four of Wands", meaning: "Group celebrations and love kindled by sparks of warmth and generosity. Pastoral Life, Sanctuary, Plentitude, Dimestic Bliss. \n*Warning: Alone in a room full of people"},
  { id: 26, name: "Five of Wands", meaning: "Skirmishes created by the explosion of ideas and impulses. False Fight, Struggle for Fortune, Battle of Life, Gain. \n*Warning: Cheating, Shenanigans*"},
  { id: 27, name: "Six of Wands", meaning: "Success and ability to inspire others. Triumphant Victory, Stupendous News, Expectations, Celebration. \n*Warning: Enemy at the Gate, Worthy Opponent*"},
  { id: 28, name: "Seven of Wands", meaning: "Defending oneself and taking the high ground against perceived opposition. Advantageous Position, Contentious Negotiation, Untouchable, Defense. \n*Warning: Make Decision with Haste, Jitters*"},
  { id: 29, name: "Eight of Wands", meaning: "Wishes sent into the world and communication in transit. Arrows of Love, Speedy Messages, Intentions, Bull's Eye. \n*Warning: Arrows of Envy, Marital Dispute*"},
  { id: 30, name: "Nine of Wands", meaning: "Breaking through barriers into a new reality. Strong Opponent, Formidable Antagonist, Detention, Strength in Opposition. \n*Warning: Stumbling Block, Misfortune*"},
  { id: 31, name: "Ten of Wands", meaning: "The cycle has ended and there is much to release. The Burdens Arriving with Success and Victory. Fortune Bearing Oppression. \n*Warning: Conspiracies, Antithesis*"},
  { id: 32, name: "Page of Wands", meaning: "A daring soul, lover of adventure, and the intrepid traveler. Gathering of Intelligence, Focused Passion, Adventurous Soul, Faithful Lover. \n*Warning: Rotten News, Telling a Tale*"},
  { id: 33, name: "Knight of Wands", meaning: "Impetuous energy. A rush to leap to conclusions before hearing out or seeing the entire story. Exodus, Stampede, Get-away, Young Man, Outgoing. \n*Warning: Harshness, Tumult*"},
  { id: 34, name: "Queen of Wands", meaning: "An irresistible, charismatic woman whose energy draws all into her fold. Ethical, Noble, Sincere, Welcoming, Successful Enterprise. \n*Warning: Exceptional, Accommodating*"},
  { id: 35, name: "King of Wands", meaning: "An energizing leader who established himself by lighting a path that others can easily follow and aspire to. Self-Respect, Genuine, Health, Fortitude, Reliable. \n*Warning: Unrelenting in Goals*"},
  { id: 36, name: "Ace of Cups", meaning: "Holding nothing back and enormous outpouring of emotion. Open heart, Bliss, Comfort, Elation, Exuberance. \n*Warning: False Heart, Deviant*"},
  { id: 37, name: "Two of Cups", meaning: "Love reflected in another person, place or thing. True Love, Tenderness, Affinity, Adour, Marriage. \n*Warning: No Reversals Listed*"},
  { id: 38, name: "Three of Cups", meaning: "Celebrations among friends and shared delight. Happy Conclusion, Accomplishment, Healing, Relief, Friendship. \n*Warning: Physical Pleasure, Sensorial Delights*"},
  { id: 39, name: "Four of Cups", meaning: "The inability to see a gift when presented with one. Apathy, Reluctance, Fatigue, Imagined Problems. \n*Warning: Omen, Prophecy*"},
  { id: 40, name: "Five of Cups", meaning: "Depression and the ability to either become sicker or to heal. Inheritance but not what was expected. Trouble Marriage, Addiction. \n*Warning: Relations, Ancestry*"},
  { id: 41, name: "Six of Cups", meaning: "Lovely remembrance, seeing old friends and gifts of the heart. Walk Down Memory Lane, Past Affections, New Realizations. \n*Warning: What comes around goes around*"},
  { id: 42, name: "Seven of Cups", meaning: "The picture becomes clear, you see what could be and now you must choose. Imagination, Possibilities, Reflection, Gifts, Visions. \n*Warning: Boldness, Decision*"},
  { id: 43, name: "Eight of Cups", meaning: "Letting go of what you have created in order to move on to a better future. Movement, Transition, Journey, Release, Onward. \n*Warning: Feasting, Celebration*"},
  { id: 44, name: "Nine of Cups", meaning: "Be careful what you wish for because you might get it. Advantage, Satisfaction, Your Wish Will Come True. \n*Warning: Liberation, Truth*"},
  { id: 45, name: "Ten of Cups", meaning: "A happily ever after ending and gifts of the heart shared with others. Happy Environment, Home Life, Friendship, Family, Satisfaction. \n*Warning: Darkness, Violence*"},
  { id: 46, name: "Page of Cups", meaning: "An open and artistic soul with a deep connection to the inner and outer world. News, Messages, Psychic Ability, Contemplative Youth. \n*Warning: Sneaky, Savvy*"},
  { id: 47, name: "Knight of Cups", meaning: "A romantic and poetic invitation to flattery and romance. Appearance, Advance, Invitation, Presence, Enticement. \n*Warning: Swindle, Sham*"},
  { id: 48, name: "Queen of Cups", meaning: "Female energy with the ability to understand anyone and anything. Empathic, Dreamer, Prophetic, Seer, Devotion. \n*Warning: Emotionally Empty, Lost in Imagination and Fantasy*"},
  { id: 49, name: "King of Cups", meaning: "The artist who has the ability to see all creative projects through. Arts and Sciences, Creative Intelligence, Fairness. \n*Warning: Rogue, Double-Dealer*"},
  { id: 50, name: "Ace of Swords", meaning: "A brilliant idea that should be followed up on to achieve victory. Success, Force, Intention, Crowing Achievement. \n*Warning: Winning but with Disastrous Consequence*"},
  { id: 51, name: "Two of Swords", meaning: "The ability to block the outer world and move inward to discover what truly matters to you. Equilibrium, Intimacy, Fearlessness, Soft Heartedness, Harmony. \n*Warning: Forgery, Treacherous*"},
  { id: 52, name: "Three of Swords", meaning: "Betrayal tearing your heart apart, often a love triangle. Division, Affair, Treason, Heartbreak, Breach. \n*Warning: Mental Withdrawal, Flaw*"},
  { id: 53, name: "Four of Swords", meaning: "The secure mind, stability of ideas, and a calm inner world. Withdrawal, Seclusion, Isolation, Introspection, Rest. \n*Warning: Care, Discretion*"},
  { id: 54, name: "Five of Swords", meaning: "Using cruel words and slander to hurt another and claim an unfair advantage over a perceived opponent. Humiliation, Havoc, Scandal, Failure, Defeat. \n*Warning: Funeral, Lay to Rest*"},
  { id: 55, name: "Six of Swords", meaning: "Moving on with those you love to a new horizon where better times lie ahead. Emissary, Passage, Dispatch, Itinerary, Voyage by Water. \n*Warning: Confessions of Love*"},
  { id: 56, name: "Seven of Swords", meaning: "Escaping with only the things you need to take with you. Ambition, Goal, Nerve, Brashness, Uncertain Plan. \n*Warning: Sound Advice, Warning*"},
  { id: 57, name: "Eight of Swords", meaning: "Being held hostage by a situation created by the mind. Horrid News, Disease, Blame, Crush, Thwart. \n*Warning: Harass, Treason*"},
  { id: 58, name: "Nine of Swords", meaning: "The dark night of the soul, passive aggressive behavior, and the inability to calm the mind and sleep. Bereavement, Collapse, Misfire, Craftiness, Hypocrisy. \n*Warning: Captivity, Humiliation*"},
  { id: 59, name: "Ten of Swords", meaning: "The conclusion of a thought cycle and an ending which has finally arrived. Misery, Mutilation, Bleakness, Not Always Card of Violent Death. \n*Warning: Blessing, Earnings*"},
  { id: 60, name: "Page of Swords", meaning: "The detective personality who will always read between the lines and figure out the truth. Surveillance, Shepherd, Diligence, Probe, Experiment. \n*Warning: Nefarious, Spook*"},
  { id: 61, name: "Knight of Swords", meaning: "The instinct to defend and conquer. Accomplishment, Fearlessness, Indignation, Clash, Prowess. \n*Warning: Foolishness, Squandering*"},
  { id: 62, name: "Queen of Swords", meaning: "Mature woman who speaks her mind with perfect clarity and, therefore, brings many to her way of thinking. Articulation, Cleverness, Strength, Mental Acuity, Brilliant. \n*Warning: Up-ended, Self-Sabotage*"},
  { id: 63, name: "King of Swords", meaning: "An intellectual who is adept at spreading ideas and using available resources to solve problems. Military Mind, Law, Judgment, Command, Power. \n*Warning: Malevolent, Cruel Intentions*"},
  { id: 64, name: "Ace of Pentacles", meaning: "A material possibility occurs leading to the gateway of manifestation. Riches, Merriment, Ideal Happiness, Euphoria, Manifestation. \n*Warning: The Downside to Great Wealth*"},
  { id: 65, name: "Two of Pentacles", meaning: "Dual choices but delightful ones. Both Recreation and Delight but also Trouble, Obstacles and a Delicate Dance. \n*Warning: Pretending to Have Fun*"},
  { id: 66, name: "Three of Pentacles", meaning: "The collaboration of likeminded people for a single cause or common goal. Industry, Trade, Aristocracy, High Society, Patrons. \n*Warning: Taking the Easy Route*"},
  { id: 67, name: "Four of Pentacles", meaning: "Complete financial stability and tightly holding them. Identifying with Material Possessions, Inheriting Money and Land, Gifts.\n*Warning: Uncertainty, Tension*"},
  { id: 68, name: "Five of Pentacles", meaning: "The ups and downs of intense relationships. Marriage and Relationship Troubles, Rocky Road, Serious Issues. \n*Warning: Dissonance, Bankruptcy*"},
  { id: 69, name: "Six of Pentacles", meaning: "Giving and taking but keeping track of all transactions. Charity, Allowance, Benefit, Wanting, Subsidy. \n*Warning: Envious, Grabby*"},
  { id: 70, name: "Seven of Pentacles", meaning: "Early manifestation resulting in the need to reevaluate. Haggle, Bargain, Quarrel, Clear Conscience, Ingenuity. \n*Warning: Financial Anxiety, Lending Expectations*"},
  { id: 71, name: "Eight of Pentacles", meaning: "Delight in service and displaying the fruit of your talent. Career, Work, Artistry, Talent, Diligence. \n*Warning: Arrogance, Greediness"},
  { id: 72, name: "Nine of Pentacles", meaning: "Pleasure in one's own company. Accomplishment, Security, Success, Insight, Judiciousness. \n*Warning: Misconduct, Secret Agenda*"},
  { id: 73, name: "Ten of Pentacles", meaning: "Culmination of the material world. Wealth, Family, Legacy, Security, Cycles, Generations. \n*Warning: Book of Life*"},
  { id: 74, name: "Page of Pentacles", meaning: "The attentive student who engages with her entire awareness. Purpose, Dedication, Study, Scholarship, Organization. \n*Warning: Distraction, Sad News*"},
  { id: 75, name: "Knight of Pentacles", meaning: "Slow moving and deliberate personality. Useful, Responsible, Sensual, Interesting, Integrity. \n*Warning: Idle, Careless*"},
  { id: 76, name: "Queen of Pentacles", meaning: "Goddess of the house, home and garden. Good Hearted, Generous, Security, Freedom, Sensate Pleasures. \n*Warning: Shallow, Vapid"},
  { id: 77, name: "King of Pentacles", meaning: "Wealthy man who continues to reap dividends. Builder, Brace, Business, Real Estate, Financial Freedom. \n*Warning: Manipulative, Overbearing*"}
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
