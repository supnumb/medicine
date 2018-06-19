import React from 'react';
import index from 'rsuite/lib/IntlProvider';
import { Icon } from 'rsuite';

/**
 * 药品选择器
 */
class GoodSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goods: [],
            isFetching: false
        }

        this.loadGoodsFromDB = this._loadGoodsFromDB.bind(this);
        this.onCheckChanged = this._onCheckChanged.bind(this);
    }

    _onCheckChanged() {

        let { goods } = this.state;
        let checkedGoods = [];

        $("input[type=checkbox]:checked").each((index, ele) => {
            goods.forEach(g => {
                if (g.ID == parseInt($(ele).val()))
                    checkedGoods.push(g);
            });
        });

        console.log(checkedGoods);

        if (this.props.onCheckChanged) {
            this.props.onCheckChanged(checkedGoods);
        }
    }

    _loadGoodsFromDB(keyword) {
        this.setState({ isFetching: true });
        let data = { KeyWord: keyword };

        fetch('/api/good/search', {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                console.log(json.data);

                this.setState({ goods: json.data, isFetching: false });
            } else {
                alert(json.message);
                this.setState({ isFetching: false })
            }
        }).catch(err => {
            console.error(err);
            this.setState({ isFetching: false })
        })
    }

    componentDidMount() {
        this.loadGoodsFromDB("");
    }

    render() {
        let { goods, isFetching } = this.state;

        let loading = isFetching ? (<Icon icon='spinner' spin />) : ("");

        let listJsx = goods.map((g, index) => {
            return (<tr key={index}>
                <td>
                    <label>
                        <input type="checkbox" name="glist" onChange={this.onCheckChanged} value={g.ID} />
                        &nbsp;
                        {g.ID}
                    </label>
                </td>
                <td>{g.Name}</td>
                <td>{g.FormOfDrug}</td>
                <td>{g.Dimension}</td>
                <td>{g.DefaultPrice}</td>
                <td>{g.ValiableQuantity}</td>
            </tr>);
        })

        return (<div id='GoodSelector' className="editor_zone">
            <h4>药品选择</h4>
            <div>
                <input type="text" id="keyword" /> <button onClick={() => {
                    let keyword = $("#keyword").val();
                    // console.log(keyword);
                    this.loadGoodsFromDB(keyword)
                }}>查询</button>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>名称</th>
                        <th>剂型</th>
                        <th>规格</th>
                        <th>价格</th>
                        <th>库存</th>
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

export default GoodSelector;