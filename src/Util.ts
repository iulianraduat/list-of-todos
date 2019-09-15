export const getStyle = (ourStyle: React.CSSProperties, customStyle?: React.CSSProperties) => {
  if (!customStyle) {
    return ourStyle;
  }

  return {
    ...ourStyle,
    ...customStyle
  };
};
