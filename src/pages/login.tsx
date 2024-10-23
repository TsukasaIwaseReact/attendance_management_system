import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 40rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
`

const Logo = styled.div`
  height: 10rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-weight: bold;
  font-family: sans-serif;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const InputWrapper = styled.div`
    position: relative;
    padding: 2rem 1rem;
    background-color: #fafafa;
    border-radius: 0.5rem;
    border: 1px solid #ebebeb;
    z-index: 1;
    display:flex;
    flex-flow: column;
`

const TextArea = styled.label`
  font-family: sans-serif;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const InputArea = styled.input`
    height: 2.5rem;
    padding: 1rem 1rem;
    font-size: 1rem;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
`

const ButtonArea = styled.button`
    color: #fff;
    background-color: #f90;
    border-color: #f90;
    height: 2.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const handleClick = () => {
  window.location.href = '/#/attendance_management'
}

export const Login: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Logo>
          勤怠管理システム
        </Logo>
        <InputWrapper>
          <TextArea>
            ユーザー名
          </TextArea>
          <InputArea>
          </InputArea>
          <TextArea>
            パスワード
          </TextArea>
          <InputArea type="password">
          </InputArea>
          <ButtonArea onClick={handleClick}>
            ログイン
          </ButtonArea>
        </InputWrapper>
      </Wrapper>
    </>
  )
}