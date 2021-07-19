import styled from "styled-components";
import { Twitter, Instagram, WhatsApp } from "assets";
import { COLORS } from "constants/colors";

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactsInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const ContactsIconsWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

export const ContactsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const StyledTwitterIcon = styled(Twitter)`
  fill: ${COLORS.DARK_GREY};
  &:hover {
    fill: ${COLORS.GREY};
  }
`;

export const StyledInstagramIcon = styled(Instagram)`
  width: 36px;
  height: 36px;
  fill: ${COLORS.DARK_GREY};
  &:hover {
    fill: ${COLORS.GREY};
  }
`;

export const StyledWhatsAppIcon = styled(WhatsApp)`
  width: 36px;
  height: 36px;
  fill: ${COLORS.DARK_GREY};
  &:hover {
    fill: ${COLORS.GREY};
  }
`;
