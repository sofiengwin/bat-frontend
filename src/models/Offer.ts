export const offerFields = `
  title
  link
  description
  imageUrl
  subtitle
`;

export interface IOffer {
  link: string;
  title: string;
  description: string;
  imageUrl: string;
}
