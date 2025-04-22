import { Whatsapp } from "../components/global/icons/whatsapp";
import { Youtube } from "../components/global/icons/youtube";
import { Instagram } from "../components/global/icons/instagram";
import { LinkedIn } from "../components/global/icons/linkedin";
import { Mail, MapPin, Phone } from "lucide-react";

export type SocialHandle = {
  name: string;
  link: string;
  title: string;
  icon?: React.ElementType;
};

export const social_handles: SocialHandle[] = [
  {
    name: "instagram",
    link: "https://www.instagram.com/orielix_hub/",
    title: "orielix_hub",
    icon: Instagram,
  },
  {
    name: "whatsapp",
    link: "https://chat.whatsapp.com/EcckTCcRV7q3djOPV3cqm6",
    title: "Join Community",
    icon: Whatsapp,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/@orielix",
    title: "Youtube",
    icon: Youtube,
  },
  {
    name: "likedin",
    link: "https://www.linkedin.com/company/orielix/",
    title: "LinkedIn",
    icon: LinkedIn,
  },
];

export const contact_details: SocialHandle[] = [
  {
    name: "location",
    link: "mailto:",
    title: "Jaipur, Rajasthan.",
    icon: MapPin,
  },
  {
    name: "Mobile",
    link: "+91 8000676640",
    title: "+91 8000676640",
    icon: Phone,
  },
  {
    name: "email",
    link: "mailto:support@orielix.com",
    title: "support@orielix.com",
    icon: Mail,
  },
];
