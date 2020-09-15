export const Types = {
  SEARCH_REQUEST: "profile/SEARCH_REQUEST",
  SEARCH_SUCCESS: "profile/SEARCH_SUCCESS",
  SEARCH_FAILURE: "profile/SEARCH_FAILURE",
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case Types.SEARCH_REQUEST:
      return { ...state, loading: true };
    case Types.SEARCH_SUCCESS:
      return { data: action.payload.data, loading: false, error: null };
    case Types.SEARCH_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  searchProfileRequest: (epicName: string) => ({
    type: Types.SEARCH_REQUEST,
    payload: { epicName },
  }),

  searchProfileSuccess: (data) => ({
    type: Types.SEARCH_SUCCESS,
    payload: { data },
  }),

  searchProfileFailure: (error: string) => ({
    type: Types.SEARCH_FAILURE,
    payload: { error },
  }),
};
