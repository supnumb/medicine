import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const defaultState = {
    goodList: {
        goods: [],
        isFetching: false,
        checkedGood: null
    },
    goodEdit: {},
    orderList: {
        orders: [],
        isFetching: false
    },
    memberList: {
        isFetching: false,
        members: [],
        member: {}
    },
    xxxx: {}
};

function XXXXReducer(state = defaultState.xxxx, action) {
    switch (action.type) {
        case "":
            break;
        default:
            return state;
    }
}

function MemberListReducer(state = defaultState.memberList, action) {
    switch (action.type) {
        case "FETCH_MEMBER":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_MEMBER_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                members: action.payload
            });
        case "EDITOR_MEMBER":
            return Object.assign({}, state, {
                member: action.payload
            });
        default:
            return state;
    }
}

function OrderListReducer(state = defaultState.orderList, action) {
    switch (action.type) {
        case "FETCH_ORDERS":
            return Object.assign({}, state, { isFetching: false });
        case "FETCH_ORDERS_DONE":
            return Object.assign({}, state, { isFetching: true, orders: action.payload });
        default:
            return state;
    }
}

function GoodListReducer(state = defaultState.goodList, action) {
    switch (action.type) {
        case "LOAD_GOODS":
            return Object.assign({}, state, { isFetching: true });
        case "LOAD_GOODS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                items: action.payload
            });
        case "LOAD_GOOD":
            return Object.assign({}, state, { isFetching: true });
        case "LOAD_GOOD_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                item: action.payload
            });
        case "LOAD_GOOD_CHECKED":
            return Object.assign({}, state, { checkedGood: action.payload });

        default:
            return state;
    }
}

function GoodEditorReducer(state = defaultState.goodEdit, action) {
    switch (action.type) {
        case "CLEAR_GOOD_DETAIL":
            return Object.assign({}, state, {
                isFetching: false,
                item: null
            });
        case "LOAD_GOODD_ETAIL":
            return Object.assign({}, state, { isFetching: true });;
        case "LOAD_GOODD_ETAIL_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                item: action.payload
            });;
        case "APPEND_GOOD":
            return Object.assign({}, state, { isFetching: true });
        case "APPEND_GOOD_DONE":
            return Object.assign({}, state, { isFetching: false });
        default:
            return state;
    }
}

const reducer = combineReducers({ goodList: GoodListReducer, goodEdit: GoodEditorReducer, memberList: MemberListReducer, orderList: OrderListReducer });
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
