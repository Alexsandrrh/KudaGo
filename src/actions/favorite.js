export const ADD_EVENT_TO_FAVORITE = 'ADD_EVENT_TO_FAVORITE';
export const DELETE_EVENT_FROM_FAVORITE = 'DELETE_EVENT_FROM_FAVORITE';

export const handleEventToFavorite = object => dispatch => {
  // Get data
  let data = JSON.parse(localStorage.getItem('favorite')) || [];
  const event = data.find(item => item.id === object.id);

  if (event) {
    // Filtering data
    data = data.filter(item => item.id !== object.id);
    // Save in local
    localStorage.setItem('favorite', JSON.stringify(data));

    dispatch({
      type: DELETE_EVENT_FROM_FAVORITE,
      payload: object.id
    });
  } else {
    // Push to array
    data.push(object);
    // Save in local
    localStorage.setItem('favorite', JSON.stringify(data));

    dispatch({
      type: ADD_EVENT_TO_FAVORITE,
      payload: object
    });
  }
};
