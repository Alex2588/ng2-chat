export interface AppState {
    users: UsersReducer,
    threads: ThreadsReducer
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    users: UsersReducer,
    threads: ThreadsReducer
});

export default rootReducer;