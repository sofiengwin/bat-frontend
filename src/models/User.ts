export interface Fields {
  id: string;
  userName: string;
  email: string;
  accessToken: string;
  tokenId: string;
  providerId: string;
  avatarUrl: string;
}

type References = {
  tips: string[];
  comments: string[];
}

export type UserSnapshot = Fields & References;
