// import { all, takeLatest, call, put } from 'redux-saga/effects';
// import { AxiosResponse } from 'axios';

// export function* load() {
//   try {
//     const response: AxiosResponse<IProduct[]> = yield call(
//       api.get,
//       '/products',
//     );
//     yield put(loadProductsSuccess(response.data));
//   } catch (error) {
//     console.log(error);
//   }
// }

// export default all([takeLatest(ProductsTypes.LOAD_REQUEST, load)]);
