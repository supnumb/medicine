import React from 'react';
import Store from './Reducer';
import Moment from 'moment';
import numeral from 'numeral';
import { Icon, RadioGroup, Radio, DatePicker, SelectPicker } from 'rsuite';
import Table from 'rsuite/lib/Table';
import { Form, Field, createFormControl } from 'form-lib';


const FeeStat=(props)=>{
let {data,isFetching}=props;

let jsxData = (<tbody><tr><td colSpan={8}>暂无数据</td></tr></tbody>);
let jsxFooter = (<tfoot><tr><td colSpan={8}></td></tr></tfoot>);

if (data && data.length > 0) {

    let count = 0, totalDeliveryInsure = 0, totalTax = 0,totalDeliverReceiptFee=0,totalDeliveryFee=0;

    let jsxList = data.map((item, index) => {
        count++;
        totalDeliveryFee += item.DeliveryFee;
        totalDeliverReceiptFee += item.DeliverReceiptFee;
        totalDeliveryInsure += item.DeliveryInsure;
        totalTax += item.Tax;

        return (<tr key={index}>
            <td>{item.CreateTime}</td>
            <td>{item.Connact}</td>
            <td>{item.Telephone}</td>
            <td>{item.DeliveryCompany}</td>
            <td>{item.DeliveryFee}</td>
            <td>{item.DeliverReceiptFee}</td>
            <td>{item.DeliveryInsure}</td>
            <td>{item.Tax}</td>
        </tr>
        );
    });

    if (jsxList) {
        jsxData = (<tbody>{jsxList}</tbody>);
    }

    jsxFooter = (<tfoot>
        <tr key="total">
            <th colSpan={2}></th>
            <th>合计</th>
            <th>共{count}记录</th>
            <th>{totalDeliveryFee}</th>
            <th>{totalDeliverReceiptFee}</th>
            <th>{totalDeliveryInsure}</th>
            <th>{totalTax}</th>
        </tr></tfoot>);

}

let loading = isFetching ? (<Icon icon="spinner" spin />) : ("");

return (
    <div id="cash_stat">
        <h4>收银统计</h4>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>日期</th>
                    <th>客户</th>
                    <th>电话</th>
                    <th>快递公司</th>
                    <th>快递费用</th>
                    <th>代收费用</th>
                    <th>保价费用</th>
                    <th>税点费用</th>
                </tr>
            </thead>
            {jsxData}
            {jsxFooter}
        </table>
        {loading}
    </div>
);
}

/**
 * 收银统计数据
 * @param {Object} props 属性
 */
const CashStat = (props) => {

    let { data, isFetching } = props;

    let jsxData = (<tbody><tr><td colSpan={6}>暂无数据</td></tr></tbody>);
    let jsxFooter = (<tfoot><tr><td colSpan={6}></td></tr></tfoot>);

    if (data && data.length > 0) {

        let count = 0, totalAmount = 0, receiptTotalAmount = 0;

        let jsxList = data.map((item, index) => {
            count++;
            totalAmount += item.TotalAmount;
            receiptTotalAmount += item.ReceiptAmount;

            return (<tr key={index}>
                <td>{item.CreateTime}</td>
                <td>{item.ID}</td>
                <td>{item.TotalAmount}</td>
                <td>{item.PayStyleLabel}</td>
                <td>{item.ReceiptAmount}</td>
                <td>{item.EmployeeName}</td>
            </tr>
            );
        });

        if (jsxList) {
            jsxData = (<tbody>{jsxList}</tbody>);
        }

        jsxFooter = (<tfoot>
            <tr key="total">
                <th>合计</th>
                <th>共{count}记录</th>
                <th>{totalAmount}</th>
                <th></th>
                <th>{receiptTotalAmount}</th>
                <th></th>
            </tr></tfoot>);

    }

    let loading = isFetching ? (<Icon icon="spinner" spin />) : ("");

    return (
        <div id="cash_stat">
            <h4>收银统计</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>零售总单id</th>
                        <th>总单金额</th>
                        <th>收银方式</th>
                        <th>收银金额</th>
                        <th>收银员</th>
                    </tr>
                </thead>
                {jsxData}
                {jsxFooter}
            </table>
            {loading}
        </div>
    );
}


const CashStyleStat = (props) => {
    let { data, isFetching } = props;

    let jsx = (<tr><td colSpan={3}>暂无数据</td></tr>);

    if (data && data.length > 0) {

        let statData = new Map();
        data.forEach((item, index) => {
            item.Count = 1;
            if (statData.has(item.PayStyle)) {

                let temp = statData.get(item.PayStyle);
                temp.ReceiptAmount += item.ReceiptAmount;
                temp.Count++;
                statData.set(item.PayStyle, temp);
            } else {
                statData.set(item.PayStyle, Object.assign({}, item));
            }
        });

        jsx = [...statData.values()].map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.PayStyleLabel}</td>
                    <td>{item.Count}</td>
                    <td>{item.ReceiptAmount}</td>
                </tr>
            );
        });
    }

    let loading = isFetching ? (<Icon icon="spinner" spin />) : ("");

    return (
        <div id="cash_stat">
            <h4>收银统计</h4>
            <table className="table table-striped table-hover">
                <tbody>
                    <tr>
                        <th>收银方式</th>
                        <th>笔数</th>
                        <th>收银金额</th>
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
    let jsxData = (<tbody><tr><td colSpan={16}>暂无数据</td></tr></tbody>);
    let jsxFooter = (<tfoot><tr><td>&nbsp;</td></tr></tfoot>);

    if (data && data.length > 0) {
        let count = 0, totalQuantity = 0, avagePirce, totalAmount = 0, avageGrossMargin = 0, totalGrossPrifit = 0;
        let jsxList = data.map((item, index) => {
            count++;
            totalQuantity += item.Quantity;
            totalAmount += item.GoodAmount;
            totalGrossPrifit += item.GrossProfit;

            return (
                <tr key={index}>
                    <td>{Moment(item.CreateTime).format("YYYY-MM-DD")}</td>
                    <td>{item.ID}</td>
                    <td>{item.GoodID}</td>
                    <td>{item.Name}</td>
                    <td>{item.OfficalName}</td>
                    <td>{item.Dimension}</td>
                    <td>{item.Unit}</td>
                    <td>{item.Manufacturer}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.FinalPrice}</td>
                    <td>{item.GoodAmount}</td>
                    <td>{item.DefaultPrice}</td>
                    <td>{item.DefaultCostPrice}</td>
                    <td>{item.GrossProfit}</td>
                    <td>{item.GrossMargin}</td>
                    <td>{item.EmployeeName}</td>
                </tr>
            );
        });

        jsxData = (<tbody> {jsxList} </tbody>);

        avageGrossMargin = totalGrossPrifit / totalAmount;

        jsxFooter = (<tfoot>
            <tr key="total">
                <th colSpan="7"></th>
                <th colSpan="1" >记录数</th>
                <th>总量</th>
                <th></th>
                <th>总金额</th>
                <th></th>
                <th></th>
                <th>毛利</th>
                <th>平均毛利率</th>
                <th></th>
            </tr>
            <tr key="total_data">
                <th colSpan="7">合计</th>
                <th>共{count}</th>
                <th>{totalQuantity}</th>
                <th></th>
                <th>{numeral(totalAmount).format("0.00")}</th>
                <th></th>
                <th></th>
                <th>{numeral(totalGrossPrifit).format("0.00")}</th>
                <th>{numeral(avageGrossMargin).format("0.000")}</th>
                <th></th>
            </tr>

        </tfoot>);
    }

    let loading = isFetching ? (<Icon icon="spinner" spin />) : ("");

    return (
        <div id="saler_stat">
            <h4>销售人员毛利率统计</h4>
            <table className="table table-striped table-hover">
                <thead>
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
                </thead>
                {jsxData}
                {jsxFooter}
            </table>
            {loading}
        </div>
    )
}


/**
 * 品类销售统计
 * @param {Object} props 
 */
const CategoryState = (props) => {

    let { data, isFetching } = props;
    let jsxData = (<tbody><tr><td>&nbsp;</td></tr></tbody>);
    let jsxFooter = (<tfoot><tr><td>&nbsp;</td></tr></tfoot>);

    if (data) {
        let count = 0, totalQuantity = 0, avagePirce, totalAmount = 0, avageGrossMargin = 0, totalGrossPrifit = 0;

        let jsxList = data.map((item, index) => {

            count++;
            totalQuantity += item.SumQuantity;
            totalAmount += item.SumAmount;
            totalGrossPrifit += item.GrossProfit;

            return (
                <tr key={index}>
                    <td>{item.GoodID}</td>
                    <td>{item.GoodName}</td>
                    <td>{item.OfficalName}</td>
                    <td>{item.Dimension}</td>
                    <td>{item.Unit}</td>
                    <td>{item.Manufacturer}</td>
                    <td>{item.SumQuantity}</td>
                    <td>{item.FinalPrice}</td>
                    <td>{item.SumAmount}</td>
                    <td>{item.GrossProfit}</td>
                    <td>{item.GrossMargin}</td>
                    <td>{item.DefaultCostPrice}</td>
                </tr>
            );
        });

        jsxData = (<tbody> {jsxList} </tbody>);

        avageGrossMargin = totalGrossPrifit / totalAmount;

        jsxFooter = (
            <tfoot>
                <tr key="total">
                    <th colSpan="5"></th>
                    <th>记录数</th>
                    <th>总量</th>
                    <th></th>
                    <th>总金额</th>
                    <th>毛利</th>
                    <th>平均毛利率</th>
                    <th></th>
                </tr>
                <tr key="total_data">
                    <th colSpan="5">合计</th>
                    <th>共{count}条</th>
                    <th>{totalQuantity}</th>
                    <th></th>
                    <th>{numeral(totalAmount).format("0.00")}</th>
                    <th>{numeral(totalGrossPrifit).format("0.00")}</th>
                    <th>{numeral(avageGrossMargin).format("0.000")}</th>
                    <th></th>
                </tr>

            </tfoot>
        );

    }

    let loading = isFetching ? (<Icon icon="spinner" spin />) : ("");

    return (<div id="category_stat">
        <h4>品类销售统计</h4>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
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
                </tr>
            </thead>
            {jsxData}
            {jsxFooter}
        </table>

        {loading}
    </div>)
}

/**
 * 库存余量统计 
 * @param {Object} props 
 */
const StockState = (props) => {

    let { data, isFetching } = props;
    let jsxData = ("");
    let jsxFooter = ("");
    // console.log(data);

    if (data) {
        let count = 0, totalQuantity = 0, avagePirce, totalAmount = 0, avageGrossMargin = 0, totalGrossPrifit = 0;
        let jsxList = data.map((item, index) => {

            count++;
            totalQuantity += item.ValiableQuantity;
            totalAmount += item.ValiableQuantity * item.DefaultCostPrice;

            return (
                <tr key={index}>
                    <td>{item.GoodID}</td>
                    <td>{item.Name}</td>
                    <td>{item.OfficalName}</td>
                    <td>{item.Dimension}</td>
                    <td>{item.Unit}</td>
                    <td>{item.Manufacturer}</td>
                    <td>{item.TotalQuantity}</td>
                    <td>{item.SaledQuantity}</td>
                    <td>{item.ValiableQuantity}</td>
                    <td>{item.DefaultCostPrice}</td>
                    <td>{item.ValiableQuantity * item.DefaultCostPrice}</td>
                </tr>
            );
        });

        jsxData = (<tbody> {jsxList} </tbody>);

        jsxFooter = (<tfoot>
            <tr key="total">
                <th colSpan="5"></th>
                <th>记录数</th>
                <th>总量</th>
                <th></th>
                <th>总金额</th>
                <th colSpan="2"></th>
            </tr>
            <tr key="total_data">
                <th colSpan="5">合计</th>
                <th>共{count}条</th>
                <th>{totalQuantity}</th>
                <th></th>
                <th>{numeral(totalAmount).format("0.00")}</th>
                <th colSpan="2"></th>
            </tr>

        </tfoot >);
    }
    let loading = isFetching ? (<Icon icon="spinner" spin />) : ("");

    return (<div id="stock_stat">
        <h4>品类库存统计</h4>
        <table className="table table-striped table-hover">
            <thead >
                <tr>
                    <th>商品id</th>
                    <th>商品名称</th>
                    <th>通用名称</th>
                    <th>规格</th>
                    <th>单位</th>
                    <th>生产厂家</th>
                    <th>总进货</th>
                    <th>已销售</th>
                    <th>可用库存</th>
                    <th>进价平均</th>
                    <th>库存金额</th>
                </tr>
            </thead>
            {jsxData}
            {jsxFooter}
        </table>

        {loading}
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
        this.loadStockStat = this._loadStockStat.bind(this);
        this.downloadCSV=this._downloadCSV.bind(this);
        this.loadEmployeesFromDB=this._loadEmployeesFromDB.bind(this);
    }

    componentWillUnmount() {
        this.unSubscribe();
    }

    componentDidMount() {
        let start = Moment().add("day", -2).format("YYYY-MM-DD");
        let end = Moment().format("YYYY-MM-DD");

        this.loadCashStat(null, start, end);
        this.loadSalerStat(null, start, end);
        this.loadCategoryStat(null, start, end);
        this.loadStockStat("");
        this.loadEmployeesFromDB();
    }

    _loadCashStat(event, start, end) {

        let postData = {
            StartTime: start,
            EndTime: end,
            action: "export"
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
                this.downurl=json.url;
                this.filename=json.filename;
                Store.dispatch({ type: "FETCH_CASH_DONE", payload: json.data })
            } else {
                this.downurl=null;
                this.filename=null;
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _loadSalerStat(event, start, end,EmployeeID) {
        let postData = {
            EmployeeID,
            StartTime: start,
            EndTime: end,
            action: "export"
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
                this.downurl=json.url;
                this.filename=json.filename;
                Store.dispatch({ type: "FETCH_SALER_DONE", payload: json.data })
            } else {
                this.downurl=null;
                this.filename=null;
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _loadCategoryStat(event, start, end,Keyword) {
        let postData = {
            Keyword,
            StartTime: start,
            EndTime: end,
            action: "export"
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
                this.downurl=json.url;
                this.filename=json.filename;
                Store.dispatch({ type: "FETCH_CATEGORY_DONE", payload: json.data })
            } else {
                this.downurl=null;
                this.filename=null;
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _loadStockStat( keyword) {
        let postData = {
            keyword,
            Page: 0,
            Limit: 1000,
            action: "export"
        }

        Store.dispatch({ type: "FETCH_STOCK", payload: postData });

        fetch('/api/stat/stocks', {
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
                this.downurl=json.url;
                this.filename=json.filename;
                Store.dispatch({ type: "FETCH_STOCK_DONE", payload: json.data })
            } else {
                this.downurl=null;
                this.filename=null;
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _loadEmployeesFromDB(){
        fetch('/api/employee/search', {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json);
            
            if (json.code == 0) {
                let employees = json.data.map((e) => ({ "value": e.ID, "label": e.Name, "data": e }));
                Store.dispatch({ type: "FETCH_EMPLOYEES_DONE", payload: employees });
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _onDateRangeChanged(startTemp, endTemp, statItemTemp,keyword) {
        let { statList: { start, end, statItem } } = this.state;

        start = startTemp || start;
        end = endTemp || end;
        statItem = statItemTemp || statItem;

        switch (statItem) {
            case 1:
            case 2:
            case 6:
                this.loadCashStat(null, start, end);
                break;
            case 3:
                this.loadSalerStat(null, start, end,keyword);
                break;
            case 4:
                this.loadCategoryStat(null, start, end,keyword);
                break;
            case 5:
                this.loadStockStat("");
                break;
        }
    }

    _downloadCSV(){

        console.log("aaa",this.downurl);
        
        if(this.downurl){
            fetch(this.downurl).then(res=>res.blob()).then(blob=>{
                let a = document.createElement('a');
      var url = window.URL.createObjectURL(blob);
    //   var filename = res.headers.get('Content-Disposition'); 
      a.href = url; 
      a.download = this.filename||"temp.csv"; 
      a.click(); 
      window.URL.revokeObjectURL(url); 
            });
        }else{
            alert("出现错误,请重新刷新页面后再下载");
        }
    }

    render() {

        let { statList: { isCashFetching, cashStat, isSalerFetching, salerStat, isCategoryFetching, categoryStat, isStockFetching, stocksStat, start, end, statItem,employees } } = this.state;

        let zone = (<div className="stat_zone">
            <CashStat isFetching={isCashFetching} data={cashStat} />
        </div>);

        let search_bar = (<tbody>
            <tr>
                <td>日期范围</td>
                <td><DatePicker name="StartDate" placeholder="起始日期" id="Date" value={Moment(start)} onChange={(date) => {
                    Store.dispatch({ type: "SET_START_DATE", payload: date });
                    this._onDateRangeChanged(date);
                    // this.loadCashStat(null, date, end);
                }} /></td>
                <td>~</td>
                <td><DatePicker name="EndDate" placeholder="终止日期" id="Date" value={Moment(end)} onChange={(date) => {
                    Store.dispatch({ type: "SET_END_DATE", payload: date });
                    this._onDateRangeChanged(null, date);
                    // this.loadCashStat(null, start, date);
                }} /></td>
                <td>
                    <button className="btn btn-default" onClick={this.downloadCSV}> 导出.csv </button>
                </td>
            </tr>
        </tbody>);

        switch (statItem) {
            case 1:
                zone = (<div className="stat_zone">
                    <CashStat isFetching={isCashFetching} data={cashStat} />
                </div>);
                break;
            case 2:
                zone = (<div className="stat_zone">
                    <CashStyleStat isFetching={isCashFetching} data={cashStat} />
                </div>);
                break;
            case 6:
                zone=(<div className="stat_zone">
                <FeeStat data={cashStat} isFetching={isCashFetching}/>
                </div>);
                break;
            case 3:
            search_bar=(<tbody>
                <tr>
                    <td>日期范围</td>
                    <td><DatePicker name="StartDate" placeholder="起始日期" id="Date" value={Moment(start)} onChange={(date) => {
                        Store.dispatch({ type: "SET_START_DATE", payload: date });
                        this._onDateRangeChanged(date);
                        // this.loadCashStat(null, date, end);
                    }} /></td>
                    <td>~</td>
                    <td><DatePicker name="EndDate" placeholder="终止日期" id="Date" value={Moment(end)} onChange={(date) => {
                        Store.dispatch({ type: "SET_END_DATE", payload: date });
                        this._onDateRangeChanged(null, date);
                        // this.loadCashStat(null, start, date);
                    }} /></td>
                    <td>
                        <SelectPicker placeholder="选择销售员" searchable={false} data={employees} onChange={(value)=>{
                            this._onDateRangeChanged(null,null,null,value);
                        }} />
                    </td>
                    <td>
                        <button className="btn btn-default" onClick={this.downloadCSV}> 导出.csv </button>
                    </td>
                </tr>
            </tbody>)
                zone = (<div className="stat_zone">
                    <SalerStat isFetching={isSalerFetching} data={salerStat} />
                </div>);
                break;
            case 4:
                zone = (<div className="stat_zone">
                    <CategoryState isFetching={isCategoryFetching} data={categoryStat} />
                </div>);
                  search_bar=(<tbody>
                    <tr>
                        <td>日期范围</td>
                        <td><DatePicker name="StartDate" placeholder="起始日期" id="Date" value={Moment(start)} onChange={(date) => {
                            Store.dispatch({ type: "SET_START_DATE", payload: date });
                            this._onDateRangeChanged(date);
                        }} /></td>
                        <td>~</td>
                        <td><DatePicker name="EndDate" placeholder="终止日期" id="Date" value={Moment(end)} onChange={(date) => {
                            Store.dispatch({ type: "SET_END_DATE", payload: date });
                            this._onDateRangeChanged(null, date);
                        }} /></td>
                        <td>
                            <Field placeholder="药名、通用名、拼音" data={employees} onChange={(value)=>{
                                this._onDateRangeChanged(null,null,null,value);
                            }} />
                        </td>
                        <td>
                            <button className="btn btn-default" onClick={this.downloadCSV}> 导出.csv </button>
                        </td>
                    </tr>
                </tbody>)
                break;
            case 5:
                zone = (<div className="stat_zone">
                    <StockState isFetching={isStockFetching} data={stocksStat} />
                </div>);
                search_bar = (<tbody>
                    <tr>
                        <td>药品</td>
                        <td  width="150px">
                            <Field  id="keyword" name="keyword" value="" placeholder="药品名\通用名\" />
                        </td>
                        <td width="60px" style={{"padding":"10px"}}>
                        <button className="btn btn-primary" onClick={()=>{
                            let keyword=$("#keyword").val();
                            this.loadStockStat(keyword);
                        }
                           
                        }>查询</button>
                        </td>
                        <td>
                            <button className="btn btn-default"  onClick={this.downloadCSV}> 导出.csv </button>
                        </td>
                    </tr>
                </tbody>);
                break;
              
        }

        return (<div id="StatsList" className="col-md-10 col-md-offset-1 main">

            <div style={{background:"#eee","padding":"5px"}}>
                <RadioGroup name="StatItem" id="StatItem" value={statItem} inline={true} onChange={
                    (value, event) => {
                        Store.dispatch({ type: "SET_STATITEM", payload: value });
                        this._onDateRangeChanged(null, null, value);
                    }
                }>
                    <Radio value={1}>收银明细</Radio>
                    <Radio value={2}>收银方式统计</Radio>
                    <Radio value={3}>销售人员毛利率统计</Radio>
                    <Radio value={4}>品类销售统计</Radio>
                    <Radio value={5}>库存统计</Radio>
                    <Radio value={6}>费用统计</Radio>
                </RadioGroup>
            </div>

            <Form id="form">
                <table style={{ "width": "800px",}}>
                    {search_bar}
                </table>
            </Form>

            {zone}
        </div>)
    }
}

export default StatsList;
