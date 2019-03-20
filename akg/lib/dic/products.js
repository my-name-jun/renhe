var products = {
    getName: function (order_type) {
        for (var i = 0; i < this.products.length; i++) {
            var item = this.products[i];
            if (item.order_type == order_type) {
                return item.value;
            }
        }
    },
    products: [
        {
            key: "aki", value: '招商信诺安康万家重大疾病保险', order_type: 501
        },
        {
            key: "ipmi", value: '招商信诺醇享人生个人高端医疗保险', order_type: 401
        }
    ]
};
module.exports = products;