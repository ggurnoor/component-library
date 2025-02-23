import React from "react";
import { HeroImageProps } from "./HeroImage.types";
import { StyledHeroImage } from "./HeroImage.styles";

const HeroImage: React.FC<HeroImageProps> = ({ src, height, overlayText, overlayColor, disabled }) => {
  return (
    <div>
      <StyledHeroImage
        src={src}
        height={height}
        disabled={disabled}
        overlayColor={overlayColor}
      >
        {overlayText && <div className="overlay">{overlayText}</div>}
      </StyledHeroImage>
    </div>
  );
};

export default HeroImage;
