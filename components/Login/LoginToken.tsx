import { TokenRefreshRequest, applyAuthTokenInterceptor } from 'react-native-axios-jwt';
import axios from 'axios';
import { API_HOST } from '../../constant';

export const axiosInstance = axios.create({ baseURL: API_HOST });

// export const requestRefresh: TokenRefreshRequest = async (
//   refreshToken: string
// ): Promise<string> => {
//   const response = await axios.post(`/issue/re`, {
//     request: 'access / refresh',
//     token: `Bearer ${refreshToken}`,
//   });
//   return response.data.data.token;
// };

// applyAuthTokenInterceptor(axiosInstance, { requestRefresh });

// // 리프레시 만료됐을 때 -> 다시 로그인 api 요청
