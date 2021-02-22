const request = (url: string = '', data: any = {}, method: String = 'GET') => {
  let requestConfig: any = {
    // credentials: 'include', //为了在当前域名内自动发送 cookie ， 必须提供这个选项
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    mode: 'cors', //请求的模式
    cache: 'force-cache',
  };

  method = method.toUpperCase();
  url = 'https://autumnfish.cn' + url;

  // get 请求 做一下处理
  if (method === 'GET') {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach((key) => {
      dataStr += key + '=' + data[key] + '&';
    });

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }

  if (method == 'POST') {
    Object.defineProperty(requestConfig, 'body', {
      value: JSON.stringify(data),
    });
  }
  try {
    return new Promise((resolve, reject) => {
      fetch(url, requestConfig)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          throw new Error(err);
        });
    });
  } catch (error) {
    console.log(error);
  }
};

export default request;
