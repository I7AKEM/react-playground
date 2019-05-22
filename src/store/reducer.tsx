import { IAppSate } from './App.interface';

const initialState: IAppSate = {
  langaugeIndex: 0,
  // tslint:disable-next-line:object-literal-sort-keys
  cityIndex: 0,
  periodicity: "monthly",
  date: new Date(),
  districts: [],
  orderBy: "highest",
  comparisonMode: false,
  filteration: {
    area: {
      max: null,
      min: null
    },
    price: {
      max: null,
      min: null
    },
    specs: []
  }
};

const reducer = (state = initialState, action: any) => {
  if (action.type === "onChangePeriodicity") {
    return {
      periodicity: "yearly"
    }
  }
  return state;
};

export default reducer;
