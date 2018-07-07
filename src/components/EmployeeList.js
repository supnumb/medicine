import React from 'react';
import Store from './Reducer';
import index from 'rsuite/lib/IntlProvider';
import { default as EmployeeEditor } from './EmployeeEditor';
import { default as EmployeeResetPassword } from './EmployeeResetPassword';

import { Form, Field, createFormControl } from 'form-lib';
import { SchemaModel, StringType } from 'rsuite-schema';

/**
 * 雇员列表
 */
class EmployeeList extends React.Component {
    constructor(props) {
        super(props);

        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();
        this.loadEmployeesFromDB = this._loadEmployeesFromDB.bind(this);
        this.toggleEnableStatus = this._toggleEnableStatus.bind(this);
    }

    componentWillUnmount() {
        this.unSubscribe();
    }

    _loadEmployeesFromDB() {
        Store.dispatch({ type: "FETCH_EMPLOYEES" });

        fetch('/api/employee/search', {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log({ json });
            if (json.code == 0) {
                Store.dispatch({ type: "FETCH_EMPLOYEES_DONE", payload: json.data });
                // this.setState({ employees: employees })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    _toggleEnableStatus(EmployeeID, status) {

        fetch('/api/employee/togglestatus', {
            body: JSON.stringify({ EmployeeID, Status: status }),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log({ json });
            if (json.code == 0) {
                this.loadEmployeesFromDB();
                alert(json.message);
                // this.setState({ employees: employees })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        this.loadEmployeesFromDB();
    }

    render() {
        let { employeeList: { employees, action, employee } } = this.state;

        let editorJsx = ("");

        switch (action) {
            case "update":
                editorJsx = (<div className="col-md-5"><EmployeeEditor onSumbitCompleted={this.loadEmployeesFromDB} employee={employee} /></div>);
                break;
            case "add":
                editorJsx = (<div className="col-md-5"><EmployeeEditor onSumbitCompleted={this.loadEmployeesFromDB} /></div>);
                break;
            case "resetpass":
                editorJsx = (<div className="col-md-5"><EmployeeResetPassword employee={employee} /></div>);
                break;
        }

        let listJsx = employees.map((e, index) => {
            if (e.Status == 0) {
                let disabledStyle = { "color": "#cce" };

                return (<tr key={index} >
                    <td style={disabledStyle}>{e.ID}</td>
                    <td style={disabledStyle}>{e.Name}</td>
                    <td style={disabledStyle}>{e.MobilPhone}</td>
                    <td style={disabledStyle}>{
                        e.Flag == 2 ? "管理员" : "药师"}</td>
                    <td>
                        <a href="#" onClick={() => {
                            this.toggleEnableStatus(e.ID, e.Status == 1 ? 0 : 1);
                            // Store.dispatch({ type: "SET_EDITOR_MODE", payload: { action: "update", employee: e } })
                        }}>
                            {e.Status == 1 ? "禁用" : "启用"}
                        </a>
                        &nbsp;
                    <a href="#" onClick={() => {
                            console.log(e);
                            Store.dispatch({ type: "SET_EDITOR_MODE", payload: { action: "resetpass", employee: e } })
                        }}>
                            重置密码
                    </a>
                    </td>
                </tr>)
            } else {
                return (<tr key={index}>
                    <td>{e.ID}</td>
                    <td>{e.Name}</td>
                    <td>{e.MobilPhone}</td>
                    <td>{
                        e.Flag == 2 ? "管理员" : "药师"}</td>
                    <td>
                        <a href="#" onClick={() => {
                            this.toggleEnableStatus(e.ID, e.Status == 1 ? 0 : 1);
                            // Store.dispatch({ type: "SET_EDITOR_MODE", payload: { action: "update", employee: e } })
                        }}>
                            {e.Status == 1 ? "禁用" : "启用"}
                        </a>
                        &nbsp;
                    <a href="#" onClick={() => {
                            console.log(e);
                            Store.dispatch({ type: "SET_EDITOR_MODE", payload: { action: "resetpass", employee: e } })
                        }}>
                            重置密码
                    </a>
                    </td>
                </tr>)
            }
        });

        return (<div id='EmployeeList'>

            <div className="col-md-6 col-md-offset-1 main">
                <div id="page_title">
                    <h4>药师账号管理</h4>
                    <div className="fun_zone">
                        <button className="btn btn-default" onClick={() => {
                            Store.dispatch({ type: "SET_EDITOR_MODE", payload: { action: "add", employee: {} } })
                        }}>添加账户</button>
                    </div>
                </div>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>名称</th>
                            <th>电话</th>
                            <th>角色</th>
                            <th style={{ "width": "140px" }}>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listJsx}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5">
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            {editorJsx}
        </div>)
    }
}

export default EmployeeList;
