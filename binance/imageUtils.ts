const baseUrl = `/image/julia/ocbs`;
const staticImageUrl = `/static/images/ocbs`;

export function getStaticImageUrl(imageName) {
  return `${staticImageUrl}/${imageName}`;
}

export const getJuliaImageUrl = (imageName) => {
  return `${baseUrl}/${imageName}`;
};
