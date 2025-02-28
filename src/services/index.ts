import {
  Clock,
  Brain,
  Mail,
  MapPin,
  SearchCheck,
  FileText,
  Boxes,
} from "lucide-react";

export const projects = [
  {
    title: "DORA Regulation",
    category: "European Regulation",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/810px-Flag_of_Europe.svg.png",
  },
  {
    title: "HR Regulations",
    category: "Human Resources",
    image:
      "http://www.creative-commons-images.com/handwriting/images/human-resources.jpg",
  },
  {
    title: "Security Regulations",
    category: "IT and Security",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.ew4WemdnR7UaqWnFi7TBFgHaEc&pid=Api",
  },
];

export const services = [
  {
    icon: FileText,
    title: "Data Operations",
    description:
      "Aggregate critical data from compliance, security, and operational sources ",
  },
  {
    icon: Brain,
    title: "Inform Decision Making",
    description:
      "Deliver real-time insights to inform decision-making",
  },
  {
    icon: SearchCheck,
    title: "Spot Missing Info",
    description:
      "Identify gaps in available information, so you know what's missing",
  },
  {
    icon: Boxes,
    title: "Coordination",
    description:
      "Facilitate coordination between teams and ensure alignment",
  },
];

export const contactDetails = [
  {
    Icon: Mail,
    title: "Email",
    content: ["info@bodhimindai.com"],
  },
  {
    Icon: MapPin,
    title: "Location",
    content: [
      "Remote",
      "Central Europe",
    ],
  },
  {
    Icon: Clock,
    title: "Business Hours",
    content: [
      "Monday - Friday: 9:00 AM - 6:00 PM CET",
    ],
  },
];
