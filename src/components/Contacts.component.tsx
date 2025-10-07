import { CONTACTS_ACTION } from "@/utils/const/contacts";
import Link from "next/link";
import {
  IconGmailFilled,
  IconInstagramFilled,
  IconLinkedinFilled,
  IconWhatsappFilled,
} from "./icons/Icons.component";

const animationClass =
  "cursor-pointer hover:translate-x-[2px] hover:-translate-y-[2px] duration-300 ease-in-out";

export const WhatsappContacts = () => {
  return (
    <Link href={CONTACTS_ACTION.WHATSAPP} target="_blank">
      <IconWhatsappFilled
        color="white"
        size={26}
        className={` ${animationClass}`}
      />
    </Link>
  );
};

export const LinkedinContacts = ({}) => {
  return (
    <Link href={CONTACTS_ACTION.LINKEDIN}>
      <IconLinkedinFilled
        color="white"
        size={27}
        className={` ${animationClass}`}
      />
    </Link>
  );
};

export const GmailContacts = ({}) => {
  return (
    <Link href={CONTACTS_ACTION.EMAIL} target="_blank">
      <IconGmailFilled
        color="white"
        size={27}
        className={` ${animationClass}`}
      />
    </Link>
  );
};

export const InstagramContacts = ({}) => {
  return (
    <Link href={CONTACTS_ACTION.INSTAGRAM} target="_blank">
      <IconInstagramFilled
        color="white"
        size={28}
        className={` ${animationClass}`}
      />
    </Link>
  );
};
