import React from 'react';

import { withRouter } from 'react-router-dom';

class SiteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="col-md-10 col-md-offset-1 main">
            <h4>使用说明：</h4>
            <dl>
                <dt>一、打印</dt>
                <dd>本系统为纯Web系统，由于浏览器不能直接驱动打印机，只能通过浏览器的打印文档功能，所以，本系统的打印需要分为两步：</dd>
                <dd>Step 1: 点击销售订单编辑页面的打印功能【打印小票|打印快递单】，系统会弹出一个打印预览的PDF页面； </dd>
                <dd>Step 2: 点击预览页面的打印功能，会弹出打印机选择框，选择对应的打印机。</dd>
                <dd>
                    <p className="text-danger">
                        注意：打印机一定要选择正确，打印小票的通常为58mm，打印快递单时如果错选了小票打印机，将会浪费大量的小票打印机
                    </p>
                </dd>
                <dd>1、打印小票</dd>
                <dd>打印小票之前需要<strong>保存销售订单</strong>，在销售订单保存过程中，会进行药品库存的检查。</dd>
                <dd>2、打印快递单</dd>
                <dd>打印快递单之前不需要保留销售订单，但需要完整填写客户信息、选择快递公司、选择销售员等打印所需的信息</dd>
                <dt></dt>
                <dd></dd>
            </dl>

        </div>)
    }
}

export default SiteIndex;
