import React from 'react';
import { Table } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

/**
 * 库存余量统计 
 */
class StockStat extends React.Component {

    constructor(props) {
        super(props);

        const { data, isFetching } = props;

        this.state = {
            addColumn: false,
            data,
            isFetching
        };

        this.handleSortColumn = this.handleSortColumn.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { data } = nextProps;
        // const { data: oldData } = this.props;

        this.setState({ data });
    }

    getData() {
        // let { data, isFetching } = this.props;
        const { data, sortColumn, sortType } = this.state;

        if (sortColumn && sortType) {
            return data.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }
                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }

        console.log({ data });

        return data;
    }

    handleSortColumn(sortColumn, sortType) {
        this.setState({
            loading: true
        });

        setTimeout(() => {
            this.setState({
                sortColumn,
                sortType,
                loading: false
            });
        }, 500);
    }

    render() {

        return (<div id="stock_stat">
            <h4>品类库存统计</h4>

            <Table className="table table-striped table-hover"
                data={this.getData()}
                sortColumn={this.state.sortColumn}
                sortType={this.state.sortType}
                onSortColumn={this.handleSortColumn}
                loading={false}
                height={550}
                bordered={true} >
                <Column width={50} align="center" sortable >
                    <HeaderCell>ID</HeaderCell>
                    <Cell dataKey="GoodID" />
                </Column>

                <Column flexGrow={2}>
                    <HeaderCell>商品名称</HeaderCell>
                    <Cell dataKey="Name" />
                </Column>

                <Column width={100} >
                    <HeaderCell>通用名称</HeaderCell>
                    <Cell dataKey="OfficalName" />
                </Column>

                <Column width={70} >
                    <HeaderCell>规格</HeaderCell>
                    <Cell dataKey="Dimension" />
                </Column>

                <Column width={50}>
                    <HeaderCell>单位</HeaderCell>
                    <Cell dataKey="Unit" />
                </Column>
                <Column width={100}>
                    <HeaderCell>生产厂家</HeaderCell>
                    <Cell dataKey="Manufacturer" />
                </Column>
                <Column flexGrow={1} sortable>
                    <HeaderCell>总量</HeaderCell>
                    <Cell dataKey="TotalQuantity" />
                </Column>
                <Column flexGrow={1} sortable>
                    <HeaderCell>销售量</HeaderCell>
                    <Cell dataKey="SaledQuantity" />
                </Column>
                <Column flexGrow={1} sortable>
                    <HeaderCell>可用量</HeaderCell>
                    <Cell dataKey="ValiableQuantity" />
                </Column>
                <Column flexGrow={1} sortable>
                    <HeaderCell>进价均</HeaderCell>
                    <Cell dataKey="DefaultCostPrice" />
                </Column>
                <Column flexGrow={1} sortable>
                    <HeaderCell>总金额</HeaderCell>
                    <Cell dataKey="TotalAmount" />
                </Column>
            </Table>

        </div>);
    }
}

export default StockStat;


/**
 * 库存余量统计 
 * @param {Object} props 
 */
// const StockState = (props) => {

//     let { data, isFetching } = props;
//     let jsxData = ("");
//     let jsxFooter = ("");
//     // console.log(data);

//     if (data) {
//         let count = 0, totalQuantity = 0, avagePirce, totalAmount = 0, avageGrossMargin = 0, totalGrossPrifit = 0;
//         let jsxList = data.map((item, index) => {

//             count++;
//             totalQuantity += item.ValiableQuantity;
//             totalAmount += item.ValiableQuantity * item.DefaultCostPrice;

//             return (
//                 <tr key={index}>
//                     <td>{item.GoodID}</td>
//                     <td>{item.Name}</td>
//                     <td>{item.OfficalName}</td>
//                     <td>{item.Dimension}</td>
//                     <td>{item.Unit}</td>
//                     <td>{item.Manufacturer}</td>
//                     <td>{item.TotalQuantity}</td>
//                     <td>{item.SaledQuantity}</td>
//                     <td>{item.ValiableQuantity}</td>
//                     <td>{item.DefaultCostPrice}</td>
//                     <td>{item.ValiableQuantity * item.DefaultCostPrice}</td>
//                 </tr>
//             );
//         });

//         jsxData = (<tbody> {jsxList} </tbody>);

//         jsxFooter = (<tfoot>
//             <tr key="total">
//                 <th colSpan="5"></th>
//                 <th>记录数</th>
//                 <th>总量</th>
//                 <th></th>
//                 <th>总金额</th>
//                 <th colSpan="2"></th>
//             </tr>
//             <tr key="total_data">
//                 <th colSpan="5">合计</th>
//                 <th>共{count}条</th>
//                 <th>{totalQuantity}</th>
//                 <th></th>
//                 <th>{numeral(totalAmount).format("0.00")}</th>
//                 <th colSpan="2"></th>
//             </tr>

//         </tfoot >);
//     }
//     let loading = isFetching ? (<Icon icon="spinner" spin />) : ("");

//     return (<div id="stock_stat">
//         <h4>品类库存统计</h4>

//         <table className="table table-striped table-hover">
//             <thead >
//                 <tr>
//                     <th>商品id</th>
//                     <th>商品名称</th>
//                     <th>通用名称</th>
//                     <th>规格</th>
//                     <th>单位</th>
//                     <th>生产厂家</th>
//                     <th>总进货</th>
//                     <th>已销售</th>
//                     <th>可用库存</th>
//                     <th>进价平均</th>
//                     <th>库存金额</th>
//                 </tr>
//             </thead>
//             {jsxData}
//             {jsxFooter}
//         </table>

//         {loading}
//     </div>);
// }