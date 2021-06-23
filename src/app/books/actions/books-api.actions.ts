import { createAction, props } from "@ngrx/store";
import { BookModel } from "src/app/shared/models";


export const bookLoadedSuccess = createAction(
    '[Books API] Books Loaded Success',
    props<{ books : BookModel[] }>()
)

export const bookCreated = createAction(
    "[Books API] Book Created" ,
    props<{ book : BookModel }>()
)

export const bookUpdate = createAction(
    "[Books API] Book Updated Success",
    props<{book : BookModel }>()
)

export const bookDeleted = createAction(
    "[Books API] Book Deleted Success",
    props<{ bookId : string }>()
)
