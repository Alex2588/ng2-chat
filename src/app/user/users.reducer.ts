import * as UserActions from './user.actions';

export interface UsersState {
    currentUser: User
}

const initialState: UsersState = {
    currentUser: null
}

export const UsersReducer = (state: UsersState = initialState, action: Action): UsersState => {
    switch(action.type) {
        case UserActions.SET_CURRENT_USER:
            const user: User = (<UserActions.SetCurrentUserAction>action).user;
            return {
                currentUser: user
            }
        default:
            return state;
    }
}