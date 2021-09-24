import { createReducer } from 'typesafe-actions';
import { PageAction, PAGE_MOVE } from '../../actions';
import { Page } from "../../actions/index";
import produce from 'immer'

export interface PageState {
  page: string;
}

const intitailState: Page = {
  page: 'home',
};

const page = createReducer<Page, PageAction>(intitailState, {
  [PAGE_MOVE]: (state, action) =>
    produce(state, draft => {
      draft.page = action.payload.page;
    })
})

export default page;
