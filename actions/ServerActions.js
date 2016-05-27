import AppDispatcher from "../AppDispatcher"
import {ActionTypes} from "../Constants"

class ServerActions {
  receiveLinks(links){
    console.log("2. In ServerActions",links);
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    });
  }
}
ServerActions = new ServerActions();
export default ServerActions;
