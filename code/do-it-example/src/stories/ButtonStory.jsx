import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';
storiesOf('Button', module)
  .addWithJSX('기본 설정', () => <Button>전송하기</Button>)
  .addWithJSX('large 예제', () => <Button large>전송하기</Button>)
  .addWithJSX('xlarge 예제', () => <Button xlarge>전송하기</Button>)
  .addWithJSX('small 예제', () => <Button small>전송하기</Button>)
  .addWithJSX('xsmall 예제', () => <Button xsmall>전송하기</Button>)
  .addWithJSX('primary 예제', () => <Button primary>전송하기</Button>)
  .addWithJSX('secondary 예제', () => <Button secondary>전송하기</Button>)
  .addWithJSX('primary와 large 함께 쓰는 예제', () => (
    <Button primary large>
      전송하기
    </Button>
  ));
