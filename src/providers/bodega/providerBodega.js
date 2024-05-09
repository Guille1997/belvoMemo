import { espinaNegraApi } from "../../api";




export const getAllInstitutions = async () => {
  return espinaNegraApi
    .get(`api/institutions/`)
    .then((response) => {
      return { ok: true, data: response.data, message: response.data?.message };
    })
    .catch((error) => {
      return { ok: false, data: "", message: error?.response?.data?.message };
    });
};

export const getAllAccounts = async () => {
  return espinaNegraApi
    .get(`api/accounts/`)
    .then((response) => {
      
      return { ok: true, data: response.data, message: response.data?.message };
    })
    .catch((error) => {
      return { ok: false, data: "", message: error?.response?.data?.message };
    });
};


export const getAllTransactions = async () => {
  return espinaNegraApi
    .get(`api/transactions/?page_size=100`)
    .then((response) => {
      
      return { ok: true, data: response.data, message: response.data?.message };
    })
    .catch((error) => {
      return { ok: false, data: "", message: error?.response?.data?.message };
    });
};


