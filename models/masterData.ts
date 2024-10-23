export interface MasterData {
  kaigoSoftwares: DetailCompany[];
}

export interface DetailCompany {
  id: number;
  name: string;
}

export interface PostalCode {
  city: string;
  cityKana: string;
  prefCode: string;
  prefecture: string;
  prefectureKana: string;
  town: string;
  townKana: string;
  zipCode: string;
}
