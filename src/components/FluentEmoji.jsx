// Clean static icon component using Lucide React icons
import {
  Zap, Wrench, Flame, Snowflake, Settings, Thermometer,
  Droplet, Home, Building, Camera, Shield, Cog,
  Lightbulb, Phone, MapPin, Star, Sparkles,
  CheckCircle, Clock, Trophy, Handshake, Hammer,
  HelpCircle, Rocket, AlertTriangle
} from 'lucide-react'

const ICON_MAP = {
  zap: Zap,
  wrench: Wrench,
  fire: Flame,
  snowflake: Snowflake,
  nut: Settings,
  thermometer: Thermometer,
  droplet: Droplet,
  house: Home,
  building: Building,
  camera: Camera,
  shield: Shield,
  gear: Cog,
  lightbulb: Lightbulb,
  phone: Phone,
  pin: MapPin,
  star: Star,
  spark: Sparkles,
  check: CheckCircle,
  clock: Clock,
  trophy: Trophy,
  handshake: Handshake,
  tools: Hammer,
  question: HelpCircle,
  rocket: Rocket,
  warning: AlertTriangle,
};

export default function FluentEmoji({ name, size = 24, style = {} }) {
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) return null;
  return (
    <IconComponent
      size={size}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      strokeWidth={1.8}
    />
  );
}
