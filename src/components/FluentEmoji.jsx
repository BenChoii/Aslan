// Animated Fluent Emoji component — uses Microsoft's animated emoji set
const FLUENT_BASE = 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis';

const EMOJI_MAP = {
  // Services
  'zap': `${FLUENT_BASE}/Travel%20and%20places/High%20Voltage.png`,
  'wrench': `${FLUENT_BASE}/Objects/Wrench.png`,
  'fire': `${FLUENT_BASE}/Travel%20and%20places/Fire.png`,
  'snowflake': `${FLUENT_BASE}/Travel%20and%20places/Snowflake.png`,
  'nut': `${FLUENT_BASE}/Objects/Nut%20and%20Bolt.png`,
  'thermometer': `${FLUENT_BASE}/Travel%20and%20places/Thermometer.png`,
  'droplet': `${FLUENT_BASE}/Travel%20and%20places/Droplet.png`,
  'house': `${FLUENT_BASE}/Travel%20and%20places/House.png`,
  'building': `${FLUENT_BASE}/Travel%20and%20places/Office%20Building.png`,
  'camera': `${FLUENT_BASE}/Objects/Camera.png`,
  'shield': `${FLUENT_BASE}/Objects/Shield.png`,
  'gear': `${FLUENT_BASE}/Objects/Gear.png`,
  'lightbulb': `${FLUENT_BASE}/Objects/Light%20Bulb.png`,
  'phone': `${FLUENT_BASE}/Objects/Telephone%20Receiver.png`,
  'pin': `${FLUENT_BASE}/Travel%20and%20places/Round%20Pushpin.png`,
  'star': `${FLUENT_BASE}/Travel%20and%20places/Glowing%20Star.png`,
  'spark': `${FLUENT_BASE}/Symbols/Sparkle.png`,
  'check': `${FLUENT_BASE}/Symbols/Check%20Mark%20Button.png`,
  'clock': `${FLUENT_BASE}/Travel%20and%20places/Twelve%20O%27Clock.png`,
  'trophy': `${FLUENT_BASE}/Activities/Trophy.png`,
  'handshake': `${FLUENT_BASE}/People%20with%20activities/Handshake.png`,
  'tools': `${FLUENT_BASE}/Objects/Hammer%20and%20Wrench.png`,
  'question': `${FLUENT_BASE}/Symbols/Red%20Question%20Mark.png`,
  'rocket': `${FLUENT_BASE}/Travel%20and%20places/Rocket.png`,
  'warning': `${FLUENT_BASE}/Symbols/Warning.png`,
};

export default function FluentEmoji({ name, size = 24, style = {} }) {
  const src = EMOJI_MAP[name];
  if (!src) return null;
  return (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      loading="lazy"
    />
  );
}
