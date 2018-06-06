import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const defaultState = {
    goodList: {
        goods: [],
        isFetching: false,
        good: null,
        action: "hidden",
        KeyWord: "",
        Page: 0,
        Limit: 10
    },
    goodEdit: {
        good: null,
        isFetching: false
    },
    orderList: {
        isFetching: false,
        orders: [],
        order: null,
        KeyWord: "",
        Page: 1,
        Limit: 10
    },
    orderEditor: {
        order: {},
        orderGoods: [],
        values: {},
        errors: {},
        isFetching: false,
        message: "",
        isShowGoodSearchZone: false,
        employees: [],
        members: []
    },
    memberList: {
        isFetching: false,
        members: [],
        member: null,
        action: "hidden",
        KeyWord: "",
        Page: 0,
        Limit: 10
    },
    memberEditor: {
        isFetching: false,
        values: [],
        errors: {}
    },

    intentionList: {
        isFetching: false,
        intentions: [],
        values: {},
        errors: {}
    },

    invistList: {
        isFetching: false,
        invists: [],
        values: {},
        errors: {}
    },

    vendorList: {
        vendors: [],
        isFetching: false,
        vendor: {},
        KeyWord: "",
        Page: 0,
        Limit: 10
    },
    receiptList: {
        receipts: [],
        isFetching: false,
        receipt: null,
        KeyWord: "",
        Status: [0, 1],
        Page: 0,
        Limit: 10
    },
    orderGoodList: {
        orderGoods: [],
        isFetching: false
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

function OrderGoodListReducer(state = defaultState.orderGoodList, action) {
    switch (action.type) {
        case "FETCH_ORDER_GOODS":
            return Object.assign({}, state, { isFetching: true })
        case "FETCH_ORDER_GOODS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                orderGoods: action.payload
            })
        default:
            return state;
    }
}

function ReceiptsListReducer(state = defaultState.receiptList, action) {
    switch (action.type) {
        case "FETCH_RECEIPTS":
            return Object.assign({}, state, {
                isFetching: true,
                KeyWord: action.payload.KeyWord,
                Page: action.payload.Page,
                Limit: action.payload.Limit
            });
        case "FETCH_RECEIPTS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                receipts: action.payload
            });
        case "CHECKED_RECEIPT":
            return Object.assign({}, state, {
                isFetching: false,
                receipt: action.payload
            });
        case "CHECKED_NONE":
            return Object.assign({}, state, {
                isFetching: false,
                vendor: null
            });
        case "SET_SETTLE_STATUS":
            return Object.assign({}, state, {
                isFetching: true,
                Status: action.payload
            })
        default:
            return state;
    }
}

function VendorListReducer(state = defaultState.vendorList, action) {
    switch (action.type) {
        case "FETCH_VENDORS":
            return Object.assign({}, state, {
                isFetching: true,
                vendor: null,
                KeyWord: action.payload.Keyword,
                Page: action.payload.Page,
                Limit: action.payload.Limit
            });
        case "FETCH_VENDORS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                vendors: action.payload
            });
        case "CHECKED_VENDOR":
            return Object.assign({}, state, {
                isFetching: false,
                vendor: action.payload
            });
        case "CHECKED_NONE":
            return Object.assign({}, state, {
                isFetching: false,
                vendor: null
            });

        default:
            return state;
    }
}

function InvistListReducer(state = defaultState.invistList, action) {
    switch (action.type) {
        case "FETCH_INVITE":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_INVITE_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                invists: action.payload
            });

        default:
            return state;
    }
}

function IntentionsListReducer(state = defaultState.intentionList, action) {
    switch (action.type) {
        case "FETCH_INTENTIONS":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_INTENTIONS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                intentions: action.payload
            });

        default:
            return state;
    }
}

function MemberEditorReducer(state = defaultState.memberEditor, action) {
    switch (action.type) {
        case "FETCH_MEMBER":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_MEMBER_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                members: action.payload
            });

        default:
            return state;
    }
}

function MemberListReducer(state = defaultState.memberList, action) {
    switch (action.type) {
        case "FETCH_MEMBER":
            return Object.assign({}, state, {
                isFetching: true,
                KeyWord: action.payload.KeyWord,
                Page: action.payload.Page,
                Limit: action.payload.Limit
            });
        case "FETCH_MEMBER_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                members: action.payload
            });
        case "EDITOR_MEMBER":
            return Object.assign({}, state, {
                member: action.payload,
                action: "update_member"
            });
        case "MEMBER_EDITOR_DONE":
            return Object.assign({}, state, {
                member: null,
                action: "hidden"
            });
        case "SET_ADD_MODE":
            return Object.assign({}, state, { action: "add_member" });
        case "MEMBER_EDITOR_CANCEL":
            return Object.assign({}, state, {
                action: "hidden",
                member: null
            });
        case "EDITOR_MEMBER_INTENTIONS":
            return Object.assign({}, state, {
                action: "add_intention",
                member: action.payload
            });
        case "EDITOR_MEMBER_VISIT":
            return Object.assign({}, state, {
                action: "add_visit",
                member: action.payload
            });
        default:
            return state;
    }
}

function OrderListReducer(state = defaultState.orderList, action) {
    switch (action.type) {
        case "FETCH_ORDERS":
            return Object.assign({}, state, {
                isFetching: true,
                KeyWord: action.payload.KeyWord,
                Limit: action.payload.Limit,
                Page: action.payload.Page
            });
        case "FETCH_ORDERS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                orders: action.payload
            });
        case "":
            return;
        default:
            return state;
    }
}

function OrderEditorReducer(state = defaultState.orderEditor, action) {
    switch (action.type) {
        case "FETCH_ORDER":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_ORDER_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                order: action.payload.data,
                values: action.payload.data,
                orderGoods: action.payload.goodsData
            });
        case "GOOD_SELECTOR_CHANGED":
            return Object.assign({}, state, {
                orderGoods: action.payload
            });
        case "SET_CHECKED_ORDER":
            return Object.assign({}, state, {
                isFetching: false,
                values: action.payload,
                order: action.payload
            });
        case "FETCH_SUBMIT_ORDER":
            return Object.assign({}, state, {
                isFetching: true
            });
        case "SWITCH_SELECTOR_SHOW":
            return Object.assign({}, state, {
                isShowGoodSearchZone: action.payload
            });
        case "SET_VALUES":
            return Object.assign({}, state, {
                values: action.payload
            });
        case "SET_ERRORS":
            return Object.assign({}, state, {
                errors: action.payload
            });
        case "SET_FORM_CHECK_RESULT":
            return Object.assign({}, state, {
                message: action.payload
            });
        case "FETCH_EMPLOYEE_DONE":
            return Object.assign({}, state, {
                employees: action.payload
            });
        case "FETCH_MEMBER_DONE":
            return Object.assign({}, state, {
                members: action.payload
            });
        default:
            return state;
    }
}

function GoodListReducer(state = defaultState.goodList, action) {
    switch (action.type) {
        case "FETCH_GOODS":
            return Object.assign({}, state, { isFetching: true, KeyWord: action.payload.KeyWord, Page: action.payload.Page, Limit: action.Limit });
        case "FETCH_GOODS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                goods: action.payload
            });
        case "EDITOR_GOOD":
            return Object.assign({}, state, {
                good: action.payload,
                action: "update"
            });
        case "SET_ADD_MODE":
            return Object.assign({}, state, {
                good: null,
                action: "add"
            });
        case "GOOD_EDITOR_CANCEL":
            return Object.assign({}, state, {
                action: "hidden",
                good: null
            });
        case "GOOD_EDITOR_DONE":
            return Object.assign({}, state, {
                action: "hidden",
                good: null
            });
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

const reducer = combineReducers({
    goodList: GoodListReducer,
    goodEdit: GoodEditorReducer,
    memberList: MemberListReducer,
    orderList: OrderListReducer,
    invistList: InvistListReducer,
    intentionList: IntentionsListReducer,
    vendorList: VendorListReducer,
    receiptList: ReceiptsListReducer,
    orderEditor: OrderEditorReducer,
    orderGoodList: OrderGoodListReducer
    // vendorEditor: VendorEditorReducer
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
