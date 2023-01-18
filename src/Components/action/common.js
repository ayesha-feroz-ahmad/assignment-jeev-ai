import axios from "axios";

export const fetchProductData = (props) => {
  return axios({
    method: 'GET',
    url: '/products',
    params: props
  })
}

export const deleteProduct = (props) => {
  return axios({
    method: 'DELETE',
    url: `/products/${props}`,
  })
}

export const editProduct=(props)=>{
  return axios({
    method:'PATCH',
    url: `/products/${props}`,
  })
}