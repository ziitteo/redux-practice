const initialState = {
  fillPercentage: 0,
};

function reducer(state = initialState, action = {}) {
  if (action.type === 'INCREMENT') {
    return { ...state, fillPercentage: Math.min(state.fillPercentage + 20, 100) }; // 최대 100%까지 채우기
  }
  if (action.type === 'DECREMENT') {
    return { ...state, fillPercentage: Math.max(state.fillPercentage - 20, 0) }; // 최소 0%까지 비우기
  }
  return { ...state };
}

export default reducer;
