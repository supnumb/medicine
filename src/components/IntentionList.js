import React from 'react';
import Store from './Reducer';
import { Icon } from 'rsuite';

class IntentionList extends React.Component {
    constructor(props) {
        super(props);
        this.unSubscribe = Store.subscribe(() => {
            let s = Store.getState();
            this.setState(s);
        });

        this.state = Store.getState();
        this.loadIntentionsFromDB = this._loadIntentionsFromDB.bind(this);
    }

    _loadIntentionsFromDB(member) {
        Store.dispatch({ type: "FETCH_INTENTIONS" });

        fetch(`/api/member/${member.ID}`, {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            console.log(json);
            if (json.code == 0) {
                Store.dispatch({ type: "FETCH_INTENTIONS_DONE", payload: json.intentionData })
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentWillReceiveProps(nextProps) {
        let { updateIntention, member } = nextProps;
        let { updateIntention: oldUpdate, member: oldMember } = this.props;

        if (oldUpdate) {
            if (updateIntention.insertId != oldUpdate.insertId) {
                this.loadIntentionsFromDB(member);
            }else if(oldMember.ID != member.ID){
                this.loadIntentionsFromDB(member);
            }
        } else if (oldMember.ID != member.ID) {
            this.loadIntentionsFromDB(member);
        } else if (updateIntention) {
            this.loadIntentionsFromDB(member);
        }
    }

    componentDidMount() {
        let { member } = this.props;
        if (member) {
            this.loadIntentionsFromDB(member);
        }
    }

    componentUnMount() {
        this.unSubscribe();
    }

    render() {
        let {
            intentionList: {
                intentions,
                isFetching,
                values,
                errors
            }
        } = this.state;

        let { member } = this.props;

        let loading = isFetching ? (<Icon icon='spinner' spin />) : ("");

        let listJsx = intentions.map((i, index) => (<tr key={index}>
            <td>{i.ID}</td>
            <td>{i.Goods}</td>
            <td>{i.OperatorID}</td>
            <td>{i.UpdateTime}</td>
        </tr>));

        return (<div id="IntentionList">

            <h4>{member.Name}--意向记录</h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>意向单详情</th>
                        <th>药师</th>
                        <th>时间</th>
                    </tr>
                </thead>
                <tbody>
                    {listJsx}
                </tbody>
            </table>
            {loading}
        </div>);
    }
}

export default IntentionList;
