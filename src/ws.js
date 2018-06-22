import ActionCable from 'actioncable';
import store from './store';

var cable = ActionCable.createConsumer(process.env.REACT_APP_WS_URL)

const ws = cable.subscriptions.create({ channel: 'ThingsChannel' }, {
  connected: function () {
    console.log('connected')
  },
  disconnected: function () {
    console.log('disconnected')
  },
  received: function ({user_token, type, payload}) {
    if(localStorage.AUTH_TOKEN === user_token)
      return
    store.dispatch({
      type: type,
      payload: payload
    });
  }
})

export default ws;
