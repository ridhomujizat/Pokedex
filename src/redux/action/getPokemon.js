import http from '../../helper/http'
const { REACT_APP_API_URL: API_URL } = process.env

export const getlist = (url) => {
  return async dispatch => {
    try {
      //set message null
      dispatch({
        type: 'SET_MESSAGE',
        payload: null
      })
      //get data list of pokemon
      const response = await http().get(url ? url : API_URL)
      let results = []
      for (let index = 0; index < response.data.results.length; index++) {
        const detailPokemon = await http().get(response.data.results[index].url)
        results.push(detailPokemon.data)
      }

      if (!url) {
        dispatch({
          type: 'GET_LIST_POKEMON',
          payload: {
            results: results,
            count: response.data.count,
            next: response.data.next,
            previous: response.data.previous
          }
        })
      } else {
        dispatch({
          type: 'ADD_LIST_POKEMON',
          payload: {
            results: results,
            count: response.data.count,
            next: response.data.next,
            previous: response.data.previous
          }
        })
      }
    } catch (err) {
      dispatch({
        type: 'SET_MESSAGE',
        payload: 'Cant connect to server'
      })
    }
  }
}

export const getDetail = (url) => {
  return async dispatch => {
    try {
      const response = await http().get(url)
      dispatch({
        type: 'GET_DETAIL_POKEMON',
        payload: response.data
      })

    } catch {
      dispatch({
        type: 'SET_MESSAGE',
        payload: 'Cant connect to server'
      })
    }
  }
}

export const addMyPokemon = (data) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'ADD_LIST_MYPOKEMON',
        payload: [data]
      })

    } catch (err) {
      console.log(err)
      dispatch({
        type: 'SET_MESSAGE',
        payload: 'Cant add data'
      })
    }
  }
}

export const remove = (data) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'REMOVE_MYPOKEMON',
        payload: data
      })

    } catch (err) {
      console.log(err)
      dispatch({
        type: 'SET_MESSAGE',
        payload: 'Cant add data'
      })
    }
  }
}