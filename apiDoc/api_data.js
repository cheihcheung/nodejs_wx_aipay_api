define({ "api": [WXWX
  {
    "type": " get ",
    "url": "/addons/pay/api/setting",
    "title": "验证客户端",
    "name": "_____",
    "group": "android",
    "version": "1.0.1",
    "description": "<p>验证客户端配置是否正确</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiurl",
            "description": "<p>客户端传来的Api地址 格式=&gt; http(s)://服务器地址/addons/pay/ (注意：后面需要&quot;/&quot;结尾，无需带上api/setting)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>签名密匙，加密方式 md5(md5(apiurl) + secretkey));</p>"
          }
        ]
      }
    },
    "filename": "app/controller/client.js",
    "groupTitle": "android"
  },
  {
    "type": " get ",
    "url": "/addons/pay/api/notify",
    "title": "接收推送客户端信息",
    "name": "______",
    "group": "android",
    "version": "1.0.1",
    "description": "<p>接收安卓推送过来的收款信息，并处理订单状态</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>客户端推送过来的签名 加密方式为 md5(md5(price + type) + secretkey) // 收款金额，收款方式(wechat/alipay)，密匙 注意此处的 + 是字符串拼接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>客户端推送过来的收款方式 wechat/alipay （WX/ZFB）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>客户端推送过来的真实收款金额</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      }
    },
    "filename": "app/controller/client.js",
    "groupTitle": "android"
  },
  {
    "type": "post",
    "url": "/api/order",
    "title": "创建支付订单",
    "name": "______",
    "group": "order",
    "version": "1.0.1",
    "description": "<p>请求类型 Content-Type: application/json;charset=UTF-8，请勿务在前端请求，会泄露secretkey</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>外部订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_type",
            "description": "<p>支付方式 wechat（WX） alipay（ZFB） 默认 wechat</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_price",
            "description": "<p>订单金额 保留两位小数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_name",
            "description": "<p>订单名称/商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>签名-&gt;加密方法 md5(md5(order_id + order_price) + secretkey) // 这里的 + 是字符串拼接</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "redirect_url",
            "description": "<p>支付成功服务器回调地址包含 http(s)://，当订单已支付会向这个url地址推送”一次“Get请求！包含三个参数order_id 、qr_price（实际支付金额） 、extension  和 sign加密方式为 md5(md5(order_id) + secretkey)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension",
            "description": "<p>创建订单时后端传入的扩展信息，支付成功后原样返回，中文需要url编码后传入</p>"
          }
        ]
      }
    },
    "filename": "app/controller/order.js",
    "groupTitle": "order"
  }
] });
