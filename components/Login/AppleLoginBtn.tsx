import { appleAuth } from '@invertase/react-native-apple-authentication';

import React, { Dispatch, FC, SetStateAction } from 'react';
import { Image, Pressable, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import styles from '../../screens/Landing/styles';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { API_HOST } from '../../constant';
import { setAccessToken, setAuthTokens } from 'react-native-axios-jwt';

interface tokenType {
  aud: string;
  auth_time: number;
  c_hash: string;
  email: string;
  email_verified: string;
  exp: number;
  iat: number;
  is_private_email: string;
  iss: string;
  nonce: string;
  nonce_supported: boolean;
  sub: string;
}

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const AppleLoginBtn: FC<Props> = ({ setIsLogin }: any) => {
  const onAppleLoginHandler = async () => {
    const onLoginSuccess = (res: any) => {
      const res_data = res.data.data;
      let accessToken: string = '';
      if (Object.keys(res_data).includes('token')) {
        // 재접속
        accessToken = res_data.token;
        setAccessToken(accessToken);
      } else {
        // 처음 호출
        accessToken = res_data.accessToken;
        setAuthTokens({
          accessToken: accessToken,
          refreshToken: res_data.refreshToken,
        });
      }
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      setIsLogin(true);
    };

    try {
      // performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // get current authentication state for user
      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user
      );

      // use credentialState response to ensure the user is authenticated
      if (credentialState === appleAuth.State.AUTHORIZED) {
        const { identityToken, user } = appleAuthRequestResponse;
        const decodedToken: tokenType = jwtDecode(identityToken!);

        // user is authenticated
        if (decodedToken.email) {
          const response = await axios.post(`${API_HOST}/login/apple`, {
            email: decodedToken.email,
            user: user,
          });

          onLoginSuccess(response);
        } else {
          const response = await axios.post(`${API_HOST}/login/apple`, {
            user: user,
          });
          onLoginSuccess(response);
        }
      }
    } catch (error: any) {
      if (error.code === appleAuth.Error.CANCELED) {
        // login canceled
      } else {
        // login error
      }
    }
  };

  return (
    <Pressable onPress={onAppleLoginHandler} style={[styles.appleLoginBtn, styles.bottomBtn]}>
      <View style={styles.bottomImg}>
        <Image source={require('../../assets/images/landing/apple.png')} />
      </View>
      <DefaultText style={styles.appleLoginText}>Apple로 시작하기</DefaultText>
    </Pressable>
  );
};

export default AppleLoginBtn;
