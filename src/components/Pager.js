import React from 'react';

/**
 * 分页控件，只在React.Component组件中使用；
 * @extends React.Component
 */
class Pager extends React.Component {
    constructor(props) {
        super(props)

        let {
            start = 0,
            length = 10,
            total = 1
        } = props;

        this.state = {
            start,
            length,
            total
        };
    }

    componentWillReceiveProps(nextProps) {
        let { start: nextStart, length: nextLength, total: nextTotal } = nextProps;
        let { start, length, total } = this.props;

        if (nextStart == start && length == nextLength && total == nextTotal) {
            return;
        }

        this.setState({ start: nextStart, length: nextLength, total: nextTotal });
    }

    render() {
        let {
            total = 0,
            start = 0,
            length = 10
        } = this.state;

        let max = Math.ceil(parseInt(total) / parseInt(length));
        let current = Math.floor(parseInt(start) / parseInt(length)) + 1;

        if (total < length)
            return ("");

        let parr = [];

        if (current > 1) {
            parr.push({ start: 0, label: "<<", page: 1 });
            parr.push({
                start: start - length,
                label: "<",
                page: current - 1
            });
        }

        let _start = current - 5 < 0
            ? 1
            : current - 4;
        let _end = current + 5 > max
            ? max
            : current + 4;

        for (let p = _start; p <= _end; p++) {
            parr.push({
                start: (p - 1) * length,
                label: p,
                page: p
            });
        }

        if (current + 1 < max) {
            parr.push({
                start: start + length,
                label: ">",
                page: current + 1
            });

            parr.push({
                start: (max - 1) * length,
                label: ">>",
                page: max
            });
        }

        let pages = parr.map((p, index) => {
            if (current == p.page) {
                return (<a key={index} className="current" onClick={() => this.props.onPageChanged({ start: p.start, length })}>{p.label}</a>);
            } else {
                return (<a key={index} href={`javascript:void(${p.page},${p.start})`} onClick={() => this.props.onPageChanged({ start: p.start, length })}>{p.label}</a>);
            }
        });
        return (<div className="pager_zone">{pages}&nbsp;共{current}/{max}页</div>)
    }
}

export default Pager;
