
// Action Creators
export function selectBookActionCreator(book){
    console.log('Action - Book has been selected: ', book);
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
    // Action Creators always return a type and sometimes a payload
}
// make sure the action that comes from this goes through all the reducers



