import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as ProfileActions } from "../ducks/profile";

const API_KEY: string = "";

export function* searchProfile(action) {
  try {
    const responseId = yield call(
      api.get,
      `/lookup?username=${action.payload.epicName}`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );

    console.log(responseId);

    const responseStats = yield call(
      api.get,
      `/stats?account=${responseId.data.account_id}`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );

    console.log(responseStats);

    yield put(ProfileActions.searchProfileSuccess(responseStats.data));
  } catch (err) {
    yield put(ProfileActions.searchProfileFailure("Jogador não encontrado"));
  }
}
