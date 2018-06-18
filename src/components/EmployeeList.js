import React from 'react';
import Store from './Reducer';

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
    }

    _loadEmployeesFromDB() {
        Store.dispatch({ type: "FETCH_EMPLOYEE" });

        fetch('/api/employee/search', {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            // console.log({ json });
            if (json.code == 0) {

                let employees = json.data.map((e) => ({ "value": e.ID, "label": e.Name, "data": e }));
                // console.log(employees);

                Store.dispatch({ type: "FETCH_EMPLOYEE_DONE", payload: employees });
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
        let { employeeList: { employees } } = this.state;

        let listJsx = employees.map(e => {
            return (<tr>
                <td>{e.ID}</td>
                <td>{e.Name}</td>
                <td>{e.Telephone}</td>
                <td>{e.FlagLagel}</td>
                <td>{e.ID}</td>
            </tr>)
        });

        return (<div id='EmployeeList'>

            <table>
                <tr>
                    <th>ID</th>
                    <th>名称</th>
                    <th>电话</th>
                    <th>角色</th>
                    <th>操作</th>
                </tr>
                {listJsx}
                <tr>
                    <td colSpan="5">

                    </td>
                </tr>
            </table>

        </div>)
    }
}

export default EmployeeList;
