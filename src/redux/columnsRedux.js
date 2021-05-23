import shortid from 'shortid';

// selectors
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
// funkcja, która wybiera kolumny z danej listy. Filtruje kolumny zawierające odpowiedni parametr listId

// action name creator
const reducerName = 'columns';
// nazwa właściwości stanu na której będziemy wykonywać akcję
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}

//Spójrz na kod reducera w pliku columnsRedux.js. Używamy w nim wyrażenia switch, które działa podobnie do if..else if...else. 
//Sprawdzamy w nim typ akcji – jeśli nie będzie pasował do żadnego z wyrażeń po case:, to wykona się blok kodu rozpoczynający się od 
//default, czyli zwrócony zostanie argument statePart.