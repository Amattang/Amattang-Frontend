import React, { useState } from 'react';
import { Button, Pressable, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function UpperSlideListOfCustomCheckList() {
  const [selectedComponent, setSelectedComponent] = useState('test1');
  const navgiation = useNavigation();
  const slidemockUp = [
    {
      name: 'test1',
      list: [
        {
          MainTitle: '여기에 큰 제목이 옵니다',
          subTitle: '여기에 짜잘한 설명이옵니다',
          button: ['name11', 'name21'],
        },
        {
          MainTitle: '여기에 큰 제목이 옵니다2',
          subTitle: '여기에 짜잘한 설명이옵니다2',
          button: ['name121', 'name221'],
        },
      ],
    },
    {
      name: 'test2',
      list: [
        {
          MainTitle: '여기에 큰 제목이 옵니다2',
          subTitle: '여기에 짜잘한 설명이옵니다2',
          button: ['name21', 'name22'],
        },
        {
          MainTitle: '여기에 큰 제목이 옵니다22',
          subTitle: '여기에 짜잘한 설명이옵니다22',
          button: ['name221', 'name222'],
        },
      ],
    },
    {
      name: 'test3',
      list: [
        {
          MainTitle: '여기에 큰 제목이 옵니다3',
          subTitle: '여기에 짜잘한 설명이옵니다3',
          button: ['name31', 'name32'],
        },
        {
          MainTitle: '여기에 큰 제목이 옵니다23',
          subTitle: '여기에 짜잘한 설명이옵니다23',
          button: ['name321', 'name322'],
        },
      ],
    },
    {
      name: 'test4',
      list: [
        {
          MainTitle: '여기에 큰 제목이 옵니다4',
          subTitle: '테스트를 위해 예는 좀 뜬금없습니당',
          button: ['name41', 'name22'],
        },
        {
          MainTitle: '여기에 큰 제목이 옵니다24',
          subTitle: '여기에 짜잘한 설명이옵니다24',
          button: ['name421', 'name222'],
        },
      ],
    },
    {
      name: 'test5',
      list: [
        {
          MainTitle: '여기에 큰 제목이 옵니다5',
          subTitle: '여기에 짜잘한 설명이옵니다5',
          button: ['name51', 'name22'],
        },
        {
          MainTitle: '여기에 큰 제목이 옵니다25',
          subTitle: '여기에 짜잘한 설명이옵니다25',
          button: ['name521', 'name222'],
        },
      ],
    },
    {
      name: 'test6',
      list: [
        {
          MainTitle: '여기에 큰 제목이 옵니다6',
          subTitle: '여기에 짜잘한 설명이옵니다6',
          button: ['name61', 'name22'],
        },
        {
          MainTitle: '여기에 큰 제목이 옵니다26',
          subTitle: '여기에 짜잘한 설명이옵니다26',
          button: ['name621', 'name222'],
        },
      ],
    },
    {
      name: 'test7',
      list: [
        {
          MainTitle: '여기에 큰 제목이 옵니다7',
          subTitle: '여기에 짜잘한 설명이옵니다7',
          button: ['name71', 'name22'],
        },
        {
          MainTitle: '여기에 큰 제목이 옵니다27',
          subTitle: '여기에 짜잘한 설명이옵니다27',
          button: ['name721', 'name222'],
        },
      ],
    },
    {
      name: 'test8',
      list: [
        {
          MainTitle: '여기에 큰 제목이 옵니다8',
          subTitle: '여기에 짜잘한 설명이옵니다8',
          button: ['name81', 'name22'],
        },
        {
          MainTitle: '여기에 큰 제목이 옵니다28',
          subTitle: '여기에 짜잘한 설명이옵니다28',
          button: ['name821', 'name222'],
        },
      ],
    },
  ];
  return (
    <>
      <View style={{ height: 50 }}>
        <ScrollView horizontal={true}>
          {slidemockUp.map((item, index) => {
            return (
              <View
                style={{
                  borderRadius: 8,
                  backgroundColor: 'green',
                  padding: 10,
                  margin: 10,
                  height: 35,
                }}
              >
                <Pressable onPress={() => setSelectedComponent(item.name)}>
                  <Text key={index}>{item.name}</Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {slidemockUp
        .filter((item) => item.name === selectedComponent)[0]
        .list.map((item, index) => (
          <View style={{ marginVertical: 30 }} key={index + 10}>
            {<Text>{item.MainTitle}</Text>}
            {<Text>{item.subTitle}</Text>}

            {item.button.map((button, index) => (
              <Pressable key={index + 10000}>
                <Text>{button}</Text>
              </Pressable>
            ))}
          </View>
        ))}
    </>
  );
}

export default UpperSlideListOfCustomCheckList;
