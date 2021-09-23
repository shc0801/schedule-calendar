import { PageAction, PAGE_MOVE } from '../../actions';

export interface PageState {
  url: string;
}

const pageReducer = (
  state: PageState = { url: '' },
  action: PageAction,
): PageState => {
  switch (action.type) {
    case PAGE_MOVE: {
      return {
        ...state,
        url: action.payload.page,
      };
    }
    default: {
      return state;
    }
  }
};

export default pageReducer;
