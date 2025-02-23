import React from "react";
import { ImgProps } from "./Img.types";
import { StyledImg } from "./Img.styles";

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return (
    <div>
      <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />
    </div>
  );
};

export default Img;
