export interface IAppSate {
  langaugeIndex: number;
  cityIndex: number;
  periodicity: string;
  date: Date;
  districts: any;
  orderBy: string;
  comparisonMode: boolean;
  filteration: {
    area: {
      max: any;
      min: any;
    };
    price: {
      max: any;
      min: any;
    };
    specs: any;
  };
}
