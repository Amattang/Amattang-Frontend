import { TokenRefreshRequest, applyAuthTokenInterceptor } from 'react-native-axios-jwt';
import axios from 'axios';
import { API_HOST } from '../../constant';

export const axiosInstance = axios.create({ baseURL: API_HOST });

export const requestRefresh: TokenRefreshRequest = async (
  refreshToken: string
): Promise<string> => {
  const response = await axios.post(`/issue/re`, {
    request: 'access / refresh',
    token: `Bearer ${refreshToken}`,
  });
  console.log(response.data.data.accessToken);
  return response.data.data.accessToken;
};

applyAuthTokenInterceptor(axiosInstance, { requestRefresh });
