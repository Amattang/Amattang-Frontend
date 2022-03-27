import { appleAuth } from '@invertase/react-native-apple-authentication';

import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import styles from '../../screens/Landing/styles';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { API_HOST } from '../../constant';

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

const AppleLoginBtn = ({ setIsLogin }: any) => {
  const onAppleLoginHandler = async () => {
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
      console.log('try');
      // use credentialState response to ensure the user is authenticated
      if (credentialState === appleAuth.State.AUTHORIZED) {
        const { identityToken, user } = appleAuthRequestResponse;
        const decodedToken: tokenType = jwtDecode(identityToken!);
        // user is authenticated

        axios
          .post(`${API_HOST}/login/apple`, {
            email: decodedToken.email,
            user: user,
          })
          .then((res) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.accessToken}`;
            setIsLogin(true);
          })
          .catch((e) => {
            console.log(e);
          });
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
