import { COLORS } from "constants/colors";
import { Text } from "components";
import {
  MainWrapper,
  StyledPhoto,
  DegustationItemParamsWrapper,
  ParamWrapper,
  StyledLeaf,
  StyledWeight,
} from "./DesktopDegustationItemStyles";
import { IDesktopDegustationItemProps } from "./types";

function DesktopDegustationItem({ params }: IDesktopDegustationItemProps) {
  return (
    <MainWrapper>
      <StyledPhoto img={params.img} />
      <Text
        type="p"
        color={COLORS.DARK_GREY}
        fontFamily="OpenSansBold"
        align="center"
      >
        {params.name}
      </Text>
      <DegustationItemParamsWrapper>
        <ParamWrapper>
          <StyledWeight />
          <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
            {params.weight}
          </Text>
        </ParamWrapper>
        <ParamWrapper>
          <StyledLeaf />
          <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
            {params.leaf}
          </Text>
        </ParamWrapper>
      </DegustationItemParamsWrapper>
    </MainWrapper>
  );
}

export default DesktopDegustationItem;
