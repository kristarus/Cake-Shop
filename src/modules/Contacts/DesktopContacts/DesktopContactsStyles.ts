import styled from "styled-components";
import { Twitter, Instagram, WhatsApp } from "assets";
import { COLORS } from "constants/colors";

export const ContactsWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const ContactsInfoWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactsIconsWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
`;

export const ContactsContentWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
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
