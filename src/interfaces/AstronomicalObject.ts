export interface AstronomicalObject {
  uid: string;
  name: string;
  astronomicalObjectType: string;
  location: null | {
    uid: string;
    name: string;
  };
}
