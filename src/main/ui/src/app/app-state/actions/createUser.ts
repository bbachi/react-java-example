import { createAction, props } from '@ngrx/store';
import { User } from '../models';

export const CREATE_USER = '[CREATE USER] Create User API ';
export const CREATE_USER_SUCCESS = '[CREATE USER] Create User API Success';
export const CREATE_USER_FAILURE = '[CREATE USER] Create User API Failure';

export const createUser = createAction(
  CREATE_USER,
  props<User>()
);

export const createUserSuccess = createAction(
  CREATE_USER,
  props<User>()
);

export const createUserFailure = createAction(
  CREATE_USER,
  props<User>()
);
