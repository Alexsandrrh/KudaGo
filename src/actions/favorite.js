export const ADD_EVENT_TO_FAVORITE = 'ADD_EVENT_TO_FAVORITE';
export const DELETE_EVENT_FROM_FAVORITE = 'DELETE_EVENT_FROM_FAVORITE';

export const handleEventToFavorite = object => dispatch => {
  // Get data
  const data = JSON.parse(localStorage.getItem('favorite')) || {};
  const event = data[object.id];

  if (event) {
    delete data[object.id];
    localStorage.setItem('favorite', JSON.stringify({ ...data }));
    dispatch({
      type: DELETE_EVENT_FROM_FAVORITE,
      payload: object.id
    });
  } else {
    data[object.id] = object;
    localStorage.setItem('favorite', JSON.stringify({ ...data }));
    dispatch({
      type: ADD_EVENT_TO_FAVORITE,
      payload: object
    });
  }
};
