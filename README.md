
# 需求沟通

开发人员：chen

git:



db:
dev_user01
passuser01

##

1、配置构建工具；
2、


#### 沟通变更记录
1. [x]会员列表：增加显示字段：显示注册日期、意向标签、意向商品（显示商品名）、修改时间、创建时间;
2. [x]会员列表，可以按修改时间排序；
2. [x]会员列表：增加字段：意向标签
3. [x]意向单编辑页面：增加一些标签选择：意向强烈、放弃跟踪、持续跟踪中（这个信息保存在会员表中）
4. [x]销售单编辑：增加销售员字段（原来有一个EmployeeID字段用于记录登录雇员的ID,增加一个字段，用于记录销售员ID,销售员和记录员不一定是同一个人）
5. 销售订单列表面：增加付款方式、销售员；
6. 结算流程：沟通进货单-->结算 --> 显示勾选的进货单统计数据；


## 业务对象字段整理

1、入库单界面：收集字段  
2、供应商录入界面：收集字段  
3、药品录入页面：收集字段  
4、几个统计表的表头：

## 符合真实场景的模拟数据


> let goodData = {  
>     Name: "",  
>     NamePinYin: "",  
>     OfficalName: "",  
>     Dimension: "",  
>     FormOfDrug: "",  
>     Unit: "",  
>     DefaultCostPrice: "",  
>     DefaultPrice: "",  
>     LimitPrice: "",  
>     BidPrice: "",  
>     Manufacturer: "",  
>     Competion: "",  
>     Medicare: "",  
>     PeriodTreatment: "",  
>     Translation: "",  
>     Usage: "",  
>     Remark: "",  
>     IsForeign: "",  
>     ApprovalNumber: ""  
> };



## 业务逻辑流程整理

1、
2、
3、



# 配置React开发环境

需要的插件：

1. Webpack-dev-server 静态资源伺服器
2. react-hot-loader react组件热替换加载器 [组件热替换加载器](https://github.com/gaearon/react-hot-loader)
3. 


需要配置的地方：

1. webpack.config.js配置
    1. 路径配置:
    2. 
     
2. react-hot-loader配置
3. 