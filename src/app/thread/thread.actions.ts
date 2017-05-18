import { Action, ActionCreator } from '@ngrx/store';
import uuid from 'uuid';
import { Thread } from './thread.model';
import { Message } from '../message/message.model';

export const ADD_THREAD = '[Thread] Add';

export interface AddThreadAction extends Action {
    thread: Thread
}

export const addThread: ActionCreator<AddThreadAction> = thread => ({
    type: ADD_THREAD,
    thread
});

export const ADD_MESSAGE = '[Message] Add Message';

export interface AddMessageAction extends Action {
    thread: Thread,
    message: Message
}

export const addMessage: ActionCreator<AddMessageAction> = (thread: Thread, messageArs: Message): AddMessageAction => {
    
    const defaults = {
        id: uuid(),
        sentAt: new Date(),
        isRead: false,
        thread
    };
    
    const message: Message = Object.assign({}, defaults, messageArs);
    
    return {
        type: ADD_MESSAGE,
        thread,
        message
    }
};

export const SELECT_THREAD = '[Thread] Select';

export interface SelectThreadAction extends Action {
    thread: Thread
}

export const selectThread: ActionCreator<SelectThreadAction> = thread => ({
    type: SELECT_THREAD,
    thread
});