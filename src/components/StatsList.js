import React from 'react';
import Store from './Reducer';
import Moment from 'moment';
import { Icon, RadioGroup, Radio } from 'rsuite';
import Table from 'rsuite/lib/Table';

/**
 * 收银统计数据
 * @param {Object} props 属性
 */
const CashStat = (props) => {

    let { data, isFetching } = props;

    let jsx = ("");

    if (data && data.length > 0) {
        jsx = data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{Moment(item.UpdateTime).format("YYYY-MM-DD")}</td>
                    <td>{item.ID}</td>
                    <td>{item.TotalAmount}</td>
                    <td>{item.PayStyle}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.EmployeeID}</td>
                </tr>
            );
        });
    }

    let loading = isFetching ? (<Icon />) : ("");

    return (
        <div id="cash_stat">
            <h4>收银统计</h4>
            <table className="table table-striped table-hover">
                <tbody>
                    <tr>
                        <th>日期</th>
                        <th>零售总单id</th>
                        <th>总单金额</th>
                        <th>收银方式</th>
                        <th>收银金额</th>
                        <th>收银员</th>
                    </tr>
                    {jsx}
                </tbody>
            </table>
            {loading}
        </div>
    );
}

/**
 * 销售员毛利率统计
 * @param {Object} props ntn
 */
const SalerStat = (props) => {
    let { data, isFetching } = props;
    let jsx = ("");

    // console.log(data);

    if (data) {
        jsx = data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{Moment(item.CreateTime).format("YYYY-MM-DD")}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.TotalCostPrice}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.Name}</td>
                </tr>
            );
        });
    }

    return (
        <div id="saler_stat">
            <h4>销售人员毛利率统计</h4>
            <table className="table table-striped table-hover">
                <tbody>
                    <tr>
                        <th>日期</th>
                        <th>零售总单id</th>
                        <th>商品id</th>
                        <th>商品名称</th>
                        <th>通用名称</th>
                        <th>规格</th>
                        <th>单位</th>
                        <th>生产厂家</th>
                        <th>数量</th>
                        <th>单价</th>
                        <th>销售金额</th>
                        <th>默认单价</th>
                        <th>进价</th>
                        <th>毛利</th>
                        <th>毛利率</th>
                        <th>销售员</th>
                    </tr>
                    {jsx}
                </tbody>
            </table>
        </div>
    )
}


/**
 * 品类销售统计
 * @param {Object} props 
 */
const CategoryState = (props) => {

    let { data, isFetching } = props;
    let jsx = ("");

    console.log(data);

    if (data) {
        jsx = data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{Moment(item.UpdateTime).format("YYYY-MM-DD")}</td>
                    <td>{item.GoodID}</td>
                    <td>{item.GoodName}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.TotalCostPrice}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.Name}</td>
                </tr>
            );
        });
    }

    return (<div id="category_stat">
        <h4>品类销售统计</h4>
        <table className="table table-striped table-hover">
            <tbody>
                <tr>
                    <th>日期</th>
                    <th>商品id</th>
                    <th>商品名称</th>
                    <th>通用名称</th>
                    <th>规格</th>
                    <th>单位</th>
                    <th>生产厂家</th>
                    <th>数量之和</th>
                    <th>单价平均</th>
                    <th>销售金额之和</th>
                    <th>毛利之和</th>
                    <th>毛利率</th>
                    <th>默认单价</th>
                    <th>进价平均</th>
                </tr>

                {jsx}
            </tbody>
        </table>
    </div>)
}

/**
 * 库存余量统计 
 * @param {Object} props 
 */
const StockState = (props) => {

    let { data, isFetching } = props;
    let jsx = ("");

    console.log(data);

    if (data) {
        jsx = data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.GoodID}</td>
                    <td>{item.Name}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.ReceiptAmount}</td>
                    <td>{item.ValiableQuantity}</td>
                    <td>{item.ReceiptAmount}</td>
                </tr>
            );
        });
    }


    return (<div id="stock_stat">
        <h4>品类库存统计</h4>
        <table className="table table-striped table-hover">
            <tbody >
                <tr>
                    <th>商品id</th>
                    <th>商品名称</th>
                    <th>通用名称</th>
                    <th>规格</th>
                    <th>单位</th>
                    <th>生产厂家</th>
                    <th>库存数量</th>
                    <th>进价平均</th>
                    <th>库存金额</th>
                </tr>
                {jsx}
            </tbody>
        </table>
    </div>);
}

/**
 * 数据统计组件
 */
class StatsList extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();

        this.loadCashStat = this._loadCashStat.bind(this);
        this.loadSalerStat = this._loadSalerStat.bind(this);
        this.loadCategoryStat = this._loadCategoryStat.bind(this);
        this.loadStockStatus = this._loadStockStatus.bind(this);
    }

    componentDidMount() {
        let start = Moment().add("day", 7).format("YYYY-MM-DD");
        let end = Moment().format("YYYY-MM-DD");

        this.loadCashStat(null, start, end);
        this.loadSalerStat(null, start, end);
        this.loadCategoryStat(null, start, end);
        this.loadStockStatus(null, start, end);
    }

    _loadCashStat(event, start, end) {

        let postData = {
            start,
            end
        }

        Store.dispatch({ type: "FETCH_CASH", payload: postData });

        fetch('/api/stat/cash', {
            body: JSON.stringify(postData),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                Store.dispatch({ type: "FETCH_CASH_DONE", payload: json.data })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _loadSalerStat(event, start, end) {
        let postData = {
            start,
            end
        }

        Store.dispatch({ type: "FETCH_SALER", payload: postData });

        fetch('/api/stat/rate', {
            body: JSON.stringify(postData),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                Store.dispatch({ type: "FETCH_SALER_DONE", payload: json.data })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _loadCategoryStat(event, start, end) {
        let postData = {
            start,
            end
        }

        Store.dispatch({ type: "FETCH_CATEGORY", payload: postData });

        fetch('/api/stat/good', {
            body: JSON.stringify(postData),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                Store.dispatch({ type: "FETCH_CATEGORY_DONE", payload: json.data })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _loadStockStatus(event, start, end) {
        let postData = {
            start,
            end
        }

        Store.dispatch({ type: "FETCH_STOCK", payload: postData });

        fetch('/api/stock/search', {
            body: JSON.stringify(postData),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                Store.dispatch({ type: "FETCH_STOCK_DONE", payload: json.data })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    render() {

        let { statList: { isCashFetching, cashStat, isSalerFetching, salerStat, isCategoryFetching, categoryStat, isStockFetching, stocksStat } } = this.state;

        return (<div id="StatsList" className="col-md-10 col-md-offset-1 main">

            <RadioGroup name="PayStyle" id="StatItem" inline={true} onChange={
                (value, event) => {
                    console.log({ value });

                    // Store.dispatch({ type: "SET_VALUES", payload: values });
                }
            }>
                <Radio value={3}>销售人员毛利率统计</Radio>
                <Radio value={6}>品类销售统计</Radio>
                <Radio value={5}>品类库存统计</Radio>
                <Radio value={2}>收银统计</Radio>
            </RadioGroup>

            <div className="stat_zone">
                <SalerStat isFetching={isSalerFetching} data={salerStat} />
            </div>
            <div className="stat_zone">
                <CategoryState isFetching={isCategoryFetching} data={categoryStat} />
            </div>
            <div className="stat_zone">
                <StockState isFetching={isStockFetching} data={stocksStat} />
            </div>

            <div className="stat_zone">
                <CashStat isFetching={isCashFetching} data={cashStat} />
            </div>

        </div>)
    }
}

export default StatsList;


