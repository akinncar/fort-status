import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProfileActions } from '../ducks/profile'

export function* searchProfile(action) {
    try {
        const response = yield call(api.get, `/profile/pc/${action.payload.epicName}`,{
            headers: {
                'TRN-Api-Key': 'Your API Key Here',
            }
        });
    
        yield put(ProfileActions.searchProfileSuccess(response.data));
    } catch (err) {
        try {
            const response = yield call(api.get, `/profile/xb1/${action.payload.epicName}`,{
                headers: {
                    'TRN-Api-Key': 'Your API Key Here',
                }
            });
        
            yield put(ProfileActions.searchProfileSuccess(response.data));
        } catch (err) {
            try {
                const response = yield call(api.get, `/profile/psn/${action.payload.epicName}`,{
                    headers: {
                        'TRN-Api-Key': 'Your API Key Here',
                    }
                });
            
                yield put(ProfileActions.searchProfileSuccess(response.data));
            } catch (err) {
                yield put(ProfileActions.searchProfileFailure('Jogador não encontrado'));
            }
         }
    }
}

