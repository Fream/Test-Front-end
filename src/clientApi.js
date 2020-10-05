export default {
  getVacuumVessels() {
    return this.sendRequest('https://dev.alcotec.com.ua/api/products/322', 'GET');
  },

  getDosageMeter() {
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