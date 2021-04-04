export interface StoryObject {
  by: string;
  descendants?: number;
  id: number;
  kids?: Array<number>;
  score: number;
  time: number;
  title: string;
  type?: string;
  url: string;
}

export interface UserObject {
  about?: string;
  created?: number;
  delay?: number;
  id: string;
  karma: number;
  submitted: Array<number>;
}
