import { createReducer, on, Action, createSelector } from "@ngrx/store";
import { BookModel, calculateBooksGrossEarnings } from "src/app/shared/models";
import { BooksPageActions, BooksApiActions } from "src/app/books/actions";


export interface State {
    collection : BookModel[];
    activateBookId : string | null;
}

export const initialState : State = {
    collection : [],
    activateBookId : null
}

export const bookReducer = createReducer(
    initialState ,

    on( BooksPageActions.enter , BooksPageActions.clearSelectedBook , (state , action) => {
        return {
            ...state ,
            activateBookId : null
        }
    }),
    on(BooksPageActions.selectBook , (state , action) => {
        return {
            ...state,
            activateBookId : action.bookId
        }
    })
)
