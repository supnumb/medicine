import React from 'react';
import { Icon } from 'rsuite';
import Moment from 'moment';

const VisitStat = (props) => {
    let { data, isFetching } = props;

    let jsxData = (<tbody><tr><td colSpan={8}>暂无数据</td></tr></tbody>);
    // let jsxFooter = (<tfoot><tr><td colSpan={8}></td></tr></tfoot>);

    if (data && data.length > 0) {

        let jsxList = data.map((item, index) => {

            return (<tr key={index}>
                <td>{item.ID}</td>
                <td>{Moment(item.CreateTime).format("YYYY-MM-DD hh:mm:ss")}</td>
                <td>{item.NAME}</td>
                <td>{item.MobilPhone}</td>
                <td>{item.StyleLabel}</td>
                <td>{item.Remarks}</td>
                <td>{item.EmployeeName}</td>
            </tr>
            );
        });

        if (jsxList) {
            jsxData = (<tbody>{jsxList}</tbody>);
        }
    }

    let loading = isFetching ? (<Icon icon="spinner" spin />) : ("");

    return (
        <div id="cash_stat">
            <h4>回访记录统计</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>时间</th>
                        <th>客户</th>
                        <th>电话</th>
                        <th>回访方式</th>
                        <th>回访内容</th>
                        <th>药师</th>
                    </tr>
                </thead>
                {jsxData}
            </table>
            {loading}
        </div>
    );
}

export default VisitStat;