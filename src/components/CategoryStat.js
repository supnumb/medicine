import React from 'react';
import { Table } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

/**
 * 品类销售统计 
 */
class CategoryStat extends React.Component {

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
            <h4>品类销售统计</h4>

            <Table className="table table-striped table-hover"
                data={this.getData()}
                sortColumn={this.state.sortColumn}
                sortType={this.state.sortType}
                onSortColumn={this.handleSortColumn}
                loading={false}
                height={550}
                onRowClick={data => {
                    console.log(data);
                }} >
                <Column width={50} align="center" sortable >
                    <HeaderCell>ID</HeaderCell>
                    <Cell dataKey="GoodID" />
                </Column>

                <Column flexGrow={1.5}>
                    <HeaderCell>商品名称</HeaderCell>
                    <Cell dataKey="GoodName" />
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
                <Column width={130}>
                    <HeaderCell>生产厂家</HeaderCell>
                    <Cell dataKey="Manufacturer" />
                </Column>
                <Column flexGrow={1} sortable>
                    <HeaderCell>数量和</HeaderCell>
                    <Cell dataKey="SumQuantity" />
                </Column>
                <Column flexGrow={1} sortable>
                    <HeaderCell>单价均</HeaderCell>
                    <Cell dataKey="FinalPrice" />
                </Column>
                <Column flexGrow={1} sortable>
                    <HeaderCell>总销售额</HeaderCell>
                    <Cell dataKey="SumAmount" />
                </Column>
                <Column flexGrow={1} sortable>
                    <HeaderCell>毛利和</HeaderCell>
                    <Cell dataKey="GrossProfit" />
                </Column>
                <Column flexGrow={1} sortable>
                    <HeaderCell>毛利率</HeaderCell>
                    <Cell dataKey="GrossMargin" />
                </Column>
                <Column flexGrow={1} sortable>
                    <HeaderCell>默认单价</HeaderCell>
                    <Cell dataKey="DefaultCostPrice" />
                </Column>

            </Table>

        </div>);
    }
}

export default CategoryStat;
