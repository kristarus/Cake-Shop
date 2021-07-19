import { Line, Text, IconButton } from "components";
import { COLORS } from "constants/colors";
import {
  ContactsWrapper,
  ContactsInfoWrapper,
  ContactsContentWrapper,
  ContactsIconsWrapper,
  StyledInstagramIcon,
  StyledTwitterIcon,
  StyledWhatsAppIcon,
} from "./MobileContactsStyles";

function MobileContacts() {
  return (
    <ContactsWrapper>
      <Line type="horizontal" size="90%" color={COLORS.DARK_GREY} />
      <ContactsContentWrapper>
        <ContactsInfoWrapper>
          <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
            НАШИ ТЕЛЕФОНЫ
          </Text>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            underline={true}
          >
            +375 29 111 11 11
          </Text>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            underline={true}
          >
            +375 29 222 22 22
          </Text>
        </ContactsInfoWrapper>
        <Line type="horizontal" size="90%" color={COLORS.DARK_GREY} />
        <ContactsInfoWrapper>
          <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
            НАШ E-MAIL
          </Text>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            underline={true}
          >
            bakecake@mail.ru
          </Text>
          <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
            Приём заказов ежедневно
          </Text>
          <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
            С 9:00 до 21:00
          </Text>
        </ContactsInfoWrapper>
        <Line type="horizontal" size="90%" color={COLORS.DARK_GREY} />
        <ContactsIconsWrapper>
          <IconButton bgcolor={COLORS.LIGHT_GREY} onClick={() => {}}>
            <StyledInstagramIcon />
          </IconButton>
          <IconButton bgcolor={COLORS.LIGHT_GREY} onClick={() => {}}>
            <StyledTwitterIcon />
          </IconButton>
          <IconButton bgcolor={COLORS.LIGHT_GREY} onClick={() => {}}>
            <StyledWhatsAppIcon />
          </IconButton>
        </ContactsIconsWrapper>
      </ContactsContentWrapper>
    </ContactsWrapper>
  );
}

export default MobileContacts;
