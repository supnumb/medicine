import React from 'react';
import Store from './Reducer';
import { Icon } from 'rsuite';

class InviteList extends React.Component {
    constructor(props) {
        super(props);
        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();
        this.loadVistsFromDB = this._loadVistsFromDB.bind(this);
    }

    _loadVistsFromDB(member) {
        Store.dispatch({ type: "FETCH_INVITE" });
        // console.log(member.ID);
        fetch(`/api/member/${member.ID}`, {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            console.log({ json });
            if (json.code == 0) {
                Store.dispatch({ type: "FETCH_INVITE_DONE", payload: json.visitData })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentWillReceiveProps(nextProps) {
        let { member } = nextProps;
        let { member: oldMember } = this.props;

        if (member.ID != oldMember.ID) {
            console.log({ member });
            if (member) {
                this.loadVistsFromDB(member);
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        let { updateInvite, member } = nextProps;
        let { updateInvite: oldUpdate, member: oldMember } = this.props;

        if (oldUpdate) {
            if (updateInvite.insertId != oldUpdate.insertId) {
                this.loadVistsFromDB(member);
            } else if (oldMember.ID != member.ID) {
                this.loadVistsFromDB(member);
            }
        } else if (oldMember.ID != member.ID) {
            this.loadVistsFromDB(member);
        } else if (updateInvite) {
            this.loadVistsFromDB(member);
        }
    }

    componentDidMount() {
        let { member } = this.props;
        if (member) {
            this.loadVistsFromDB(member);
        }
    }

    render() {
        let {
            invistList: {
                invists,
                isFetching
            }
        } = this.state;

        let loading = isFetching ? (<Icon icon='spinner' spin />) : ("");

        let listJsx = invists.map((i, index) => (<tr key={index}>
            <td>{i.ID}</td>
            <td>{i.Remarks}</td>
            <td>{i.OperatorID}</td>
            <td>{i.UpdateTime}</td>
        </tr>));

        return (<div id="InviteList">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>回访记录</th>
                        <th>药师</th>
                        <th>时间</th>
                    </tr>
                </thead>
                <tbody>
                    {listJsx}
                </tbody>
            </table>
            {loading}
        </div>)
    }
}

export default InviteList;
