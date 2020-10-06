export default {
  getProducts(type) {
    let id = null;

    switch(type) {
      case 'dosageMeters':
        id = 103;
        break;
      case 'vacuumVessels':
        id = 322;
        break;
      default:
        throw new Error(`Type ${type} of products is not supported`)
    }
    
    return this.sendRequest(`https://dev.alcotec.com.ua/api/products/${id}`, 'GET')
  },

  getPurchaseReturnsPage() {
    return this.sendRequest('https://dev.alcotec.com.ua/api/pages/purchase-returns', 'GET');
  },

  getPaymentPage() {
    return this.sendRequest('https://dev.alcotec.com.ua/api/pages/payment', 'GET');
  },

  sendRequest(url, method) {
    return fetch(url, {
      method
    }).then((response) => {
      if (response.status == '200') {
        return response.json();
      }

      throw new Error('Unsupported response status code');
    }).then((data) => {
      return data;
    }).catch((err) => {
      alert(err.message);
    });
  }
}