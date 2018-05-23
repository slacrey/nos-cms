//获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
let curWwwPath = window.document.location.href;
//获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
let pathName = window.document.location.pathname;
let localHref = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);

export function setBaseUrl(state) {
  let apiUrl = '';
  if (process.env.NODE_ENV == 'production') {
    apiUrl = process.env.baseUrl == '' ? localHref : process.env.baseUrl;//判断是否分离部署
  } else {
    apiUrl = process.env.baseUrl == '' ? localHref : process.env.baseUrl;//判断是否分离部署
  }
  return apiUrl;
}
