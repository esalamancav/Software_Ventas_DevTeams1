const callApi = async (url, options = {}) => {
    options.headers = {
        "Content.Type":"application/json",
        Accept: "application/json",
    };
    const response = await fetch("http://localhost:3002/api" + url, options);
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return callApi("/products");
    },
    create(producto) {
      return callApi("/products", {
        //mode: 'no-cors',
        method: "POST",
        body: JSON.stringify(producto),
      });
    },
    delete(producto) {
      return callApi(`/products/${producto}`, {
        method: "DELETE",
      });
    },
    edit(producto) {
      return callApi(`/products/${producto._id}`, {
        method: "PATCH",
        body: JSON.stringify(producto),
      });
    },
    getProduct(id) {
      return callApi(`/products/${id}`);
    },
  },

  ventas: {
    list() {
      return callApi("/sales");
    },
    create(ventas) {
      return callApi("/sales", {
        method: "POST",
        body: JSON.stringify(ventas),
      });
    },
    delete(ventas) {
      return callApi(`/sales/${ventas}`, {
        method: "DELETE",
      });
    },
    edit(ventas) {
      return callApi(`/sales/${ventas._id}`, {
        method: "PATCH",
        body: JSON.stringify(ventas),
      });
    },
    getVentas(id) {
      return callApi(`/sales/${id}`);
    },
  },

  usuarios: {
    list() {
      return callApi("/users");
    },
    create(usuarios) {
      return callApi("/users", {
        method: "POST",
        body: JSON.stringify(usuarios),
      });
    },
    delete(usuarios) {
      return callApi(`/users/${usuarios}`, {
        method: "DELETE",
      });
    },
    edit(usuarios) {
      return callApi(`/users/${usuarios._id}`, {
        method: "PATCH",
        body: JSON.stringify(usuarios),
      });
    },
    getUsuarios(id) {
      return callApi(`/users/${id}`);
    },
  },
  user: {
    getUser() {
      return callApi("/user");
    },
    validarAdmin() {
      return callApi("/user/validarAdmin");
    },
  },
};

export default api;

