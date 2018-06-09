import ActionCable from 'actioncable';
import store from './store';

var cable = ActionCable.createConsumer(`ws://${process.env.REACT_APP_WEBSOCKET_IP}:3001/cable`)

const ws = cable.subscriptions.create({ channel: 'ThingsChannel', user_id: Math.random().toString(36).substring(7) }, {
  connected: function () {
    console.log('connected')
  },
  disconnected: function () {
    console.log('disconnected')
  },
  received: function ({user_token, type, payload}) {
    console.log(user_token)
    if(localStorage.AUTH_TOKEN === user_token)
      return

    console.log(user_token, type, payload)
    store.dispatch({
      type: type,
      payload: payload
    });
  }
})

export default ws;
