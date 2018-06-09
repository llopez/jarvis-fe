const hostname = 'localhost'
const port = 3001

export const login = (email, password) => (dispatch) => {
  fetch(`http://${hostname}:${port}/auth`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: email, password: password})
  }).then((res) => {
    if(!res.ok)
      throw Error(res.statusText)
    return res
  }).then((res) => {
    return res.json()
  }).then((res) => {
    dispatch({
      type: 'NOTIFY',
      payload: {
        open: true,
        msg: 'Welcome'
      }
    })
    localStorage.AUTH_TOKEN = res.auth_token
    window.location.href = '/list'
  }).catch((err) => {
    dispatch({
      type: 'NOTIFY',
      payload: {
        open: true,
        msg: err.message
      }
    })
  })
}

export const logout = () => dispatch => {
  dispatch({
    type: 'NOTIFY',
    payload: {
      open: true,
      msg: 'Bye Bye'
    }
  }) 
  localStorage.removeItem('AUTH_TOKEN')
  window.location.href = '/'
}

export const fetchItems = () => dispatch => {
  fetch(`http://${hostname}:${port}/things`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Token token='+ localStorage.AUTH_TOKEN
    }
  }).then((res) => {
    if(!res.ok)
      throw Error(res.statusText)
    return res;
  }).then((res) => {
    return res.json()
  }).then((res) => {
    dispatch({type: 'ITEMS_RECEIVED', payload: res})
  }).catch((err) => {
    console.log(err)
  })
}

export const updateItem = (data) => dispatch => {
  fetch(`http://${hostname}:${port}/things/${data.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Token token='+ localStorage.AUTH_TOKEN
    },
    body: JSON.stringify(data)
  }).then((res) => {
    if(!res.ok)
      throw Error(res.statusText)
    return res;
  }).then((res) => {
    return res.json()
  }).then((res) => {
    dispatch({type: 'ITEM_UPDATED', payload: res})
  }).catch((err) => {
    console.log(err)
  })
}
