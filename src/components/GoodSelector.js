import React from 'react';
import index from 'rsuite/lib/IntlProvider';

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
        var aa = [];
        $("input[type=checkbox]:checked").each((index, ele) => {
            aa.push($(ele).val())
        });

        let { goods } = this.state;
        let checkedGoods = [];

        goods.forEach(g => {
            aa.forEach(a => {
                if (g.ID == parseInt(aa))
                    checkedGoods.push(g);
            })
        });

        if (this.props.onCheckChanged) {
            this.props.onCheckChanged(checkedGoods);
        }
    }

    _loadGoodsFromDB(keyword) {
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

                this.setState({ goods: json.data });
            } else {
                alert(json.message);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        this.loadGoodsFromDB("");
    }

    render() {
        let { goods, isFetching } = this.state;

        let listJsx = goods.map((g, index) => {
            return (<tr key={index}>
                <td>
                    <input type="checkbox" name="glist" onChange={this.onCheckChanged} value={g.ID} />
                </td>
                <td>{g.Name}</td>
                <td>{g.FormOfDrug}</td>
                <td>{g.Dimension}</td>
                <td>{g.Unit}</td>
                <td>{g.Medicare}</td>
            </tr>);
        })

        return (<div id='GoodSelector' className="editor_zone">
            <h4>药品选择</h4>
            <div>
                <input type="text" id="keyword" /> <button>查询</button>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>名称</th>
                        <th>剂型</th>
                        <th>规格</th>
                        <th>价格</th>
                        <th>医保</th>
                    </tr>
                </thead>
                <tbody>
                    {listJsx}
                </tbody>
            </table>

        </div>)
    }
}

export default GoodSelector;