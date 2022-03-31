import React, { Dispatch, SetStateAction } from 'react';
import ProfileSettingComponent from '../../components/ProfileSetting/ProfileSettingComponent';

interface IProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

function ProfileSetting({ setIsLogin }: IProps) {
  return <ProfileSettingComponent setIsLogin={setIsLogin} />;
}

export default ProfileSetting;
