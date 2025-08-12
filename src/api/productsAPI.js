let API = '/api/produtos'

export const productLoader = async () => {
  const res = await fetch(API);
  return res.json();
};

export const addProductSubmit = async (newProduct) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    });
    return;
}

export const deleteProduct = async (id) => {
    const res = await fetch(`${API}/${id}`, {
        method: 'DELETE',
    });

    return;
}

export const updateProduct = async (product) => {
    const res = await fetch(`${API}/${product.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });

    return;
}