import { fetchingActionNames } from "./fetching";


const actionNamesList = [
  fetchingActionNames
];

const types = {};
actionNamesList.forEach(ans => ans.map(actionName => {
  if (typeof actionName !== "string") {
    throw "ERROR, some action-names are not strings! " + JSON.stringify(ans);
  }
  types[actionName] = { name: actionName };
}));

if (Object.keys(types).length
  !== actionNamesList.reduce((a, b) => a + Object.keys(b).length, 0)) {
  throw "ERROR, not all action-names are unique! "
  + JSON.stringify(actionNamesList) + JSON.stringify(types);
}


export { types };
