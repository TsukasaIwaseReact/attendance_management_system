import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const UserName = styled.div`
  background-color: #97989a;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 1rem;
  padding-left: 1rem;
`

const SystemName = styled.div`
  background-color: rgb(244, 245, 246);
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-right: 1rem;
  padding-left: 1rem;
  font-weight: bold
`

const TableArea = styled.div`
  background-color: rgb(228, 230, 234);
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-right: 1rem;
  padding-left: 1rem;
`

// ダミーデータ
const data = [
  { id: 1,  emp_num: 1001, name: 'サンプル1', operate: '80:25',   over: '0:25',  exceed: '0', vacation: '6/18', address: 'sample1@dummy.mail.address'},
  { id: 2,  emp_num: 1002, name: 'サンプル2', operate: '100:32',  over: '20:32', exceed: '1', vacation: '2/20', address: 'sample2@dummy.mail.address'},
  { id: 3,  emp_num: 1003, name: 'サンプル3', operate: '125:41',  over: '45:41', exceed: '1', vacation: '1/20', address: 'sample3@dummy.mail.address'},
  { id: 4,  emp_num: 1004, name: 'サンプル4', operate: '80:25',   over: '0:25',  exceed: '0', vacation: '6/18', address: 'sample4@dummy.mail.address'},
  { id: 5,  emp_num: 1005, name: 'サンプル5', operate: '100:32',  over: '20:32', exceed: '1', vacation: '2/20', address: 'sample5@dummy.mail.address'},
  { id: 6,  emp_num: 1006, name: 'サンプル6', operate: '125:41',  over: '45:41', exceed: '1', vacation: '1/20', address: 'sample6@dummy.mail.address'},
  { id: 7,  emp_num: 1007, name: 'サンプル7', operate: '80:25',   over: '0:25',  exceed: '0', vacation: '6/18', address: 'sample7@dummy.mail.address'},
  { id: 8,  emp_num: 1008, name: 'サンプル8', operate: '100:32',  over: '20:32', exceed: '1', vacation: '2/20', address: 'sample8@dummy.mail.address'},
  { id: 9,  emp_num: 1009, name: 'サンプル9', operate: '125:41',  over: '45:41', exceed: '1', vacation: '1/20', address: 'sample9@dummy.mail.address'},
  { id: 10, emp_num: 1010, name: 'サンプル10', operate: '80:25',  over: '0:25',  exceed: '0', vacation: '6/18', address: 'sample10@dummy.mail.address'},
  { id: 11, emp_num: 1011, name: 'サンプル11', operate: '100:32', over: '20:32', exceed: '1', vacation: '2/20', address: 'sample11@dummy.mail.address'},
  { id: 12, emp_num: 1012, name: 'サンプル12', operate: '125:41', over: '45:41', exceed: '1', vacation: '1/20', address: 'sample12@dummy.mail.address'},
  { id: 13, emp_num: 1013, name: 'サンプル13', operate: '80:25',  over: '0:25',  exceed: '0', vacation: '6/18', address: 'sample13@dummy.mail.address'},
  { id: 14, emp_num: 1014, name: 'サンプル14', operate: '100:32', over: '20:32', exceed: '1', vacation: '2/20', address: 'sample14@dummy.mail.address'},
  { id: 15, emp_num: 1015, name: 'サンプル15', operate: '125:41', over: '45:41', exceed: '1', vacation: '1/20', address: 'sample15@dummy.mail.address'},
  ];

const containerStyle: React.CSSProperties = {
  maxHeight: '36.5rem',
  overflowY: 'auto',
  border: '1px solid black',
  position: 'relative',
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
};

const headerStyle: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  color: 'white',
  backgroundColor: 'lightslategray',
  zIndex: 1,
};

const bodyStyle: React.CSSProperties = {
  backgroundColor: 'white',
};

const cellStyle: React.CSSProperties = {
  border: '1px solid black',
  padding: '8px',
  textAlign: 'left',
};

const InputWrapper = styled.div`
    position: relative;
    left: 40px;
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
`

const InputArea = styled.input`
  width: 3rem;
`

const ButtonArea = styled.button`
    color: #000000;
    background-color: #fff;
    border-color: #000000b6;
    height: 2.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
`

const DownloadArea = styled.button`
    color: #fff;
    background-color: #f90;
    border-color: #f90;
    height: 2.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export const Table: React.FC = () => {
  // 時間外労働デフォルト値
  const [inputOver, setInputOver] = useState(45);

  // ユーザの設定を変数にセット
  const overHandleChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setInputOver(value);
    }
  };

  // 残業月45h超過回数デフォルト値
  const [inputExceed, setInputExceed] = useState(5);

  // ユーザの設定を変数にセット
  const exceedHandleChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setInputExceed(value);
    }
  };

   // 有休使用数デフォルト値
  const [inputVacation, setInputVacation] = useState(4);

  // ユーザの設定を変数にセット
  const vacationHandleChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setInputVacation(value);
    }
  };

  // チェックされた社員
  const [selected, setSelected] = useState<number[]>([]);

  // 時間外労働がX時間以上の社員を選択
  const handleSelectOver = () => {
    const selectedIds = data
    .filter(user => Number(user.over.split(':')[0]) >= inputOver)
    .map(user => user.id);

    setSelected(prevSelected => {
      const newSelected = new Set(prevSelected);
      selectedIds.forEach(id => newSelected.add(id));
      return Array.from(newSelected);
    });
  };

  // 残業月45h超過回数がX回以上の社員を選択
  const handleSelectExceed = () => {
    const selectedIds = data
    .filter(user => Number(user.exceed) >= inputExceed)
    .map(user => user.id);

    setSelected(prevSelected => {
      const newSelected = new Set(prevSelected);
      selectedIds.forEach(id => newSelected.add(id));
      return Array.from(newSelected);
    });
  };

  // 有休使用数がX回以下の社員を選択
  const handleSelectVacation = () => {
    const selectedIds = data
    .filter(user => Number(user.vacation.split('/')[0]) <= inputVacation)
    .map(user => user.id);

    setSelected(prevSelected => {
      const newSelected = new Set(prevSelected); // 既存の選択をセットに変換
      selectedIds.forEach(id => newSelected.add(id)); // 新しいIDを追加
      return Array.from(newSelected); // セットを配列に戻す
    });
  };

  // 全社員の選択を解除
  const handleSelectClear = () => {
    setSelected([]);
  };

  // ボタン操作時のチェックボックスへの反映
  const handleSelect = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(userId => userId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  // 選択した社員を記載したcsvファイルを出力
  const handleDownload = () => {
    setSelected(prevSelected => {
      const checked_data = data.filter(data => prevSelected.includes(data.id))
      // CSV形式の文字列に変換
      var csvContent = "";
      checked_data.map(employee => csvContent += (employee.emp_num + ',' + employee.name + ',' + employee.address + '\n'));
      // Blobを生成
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);

      // ダウンロードリンクを作成
      const link = document.createElement('a');
      link.href = url;
      // ファイル名を指定
      link.setAttribute('download', 'employees_selected_attendance_management_system.csv');
      document.body.appendChild(link);
      // リンクをクリックしてダウンロードを開始
      link.click();
      // リンクを削除
      document.body.removeChild(link);
      return prevSelected;
    });
  };

  return (
    <>
      <UserName>
      ユーザー名
      </UserName>
      <SystemName>
      勤怠管理システム
      </SystemName>
      <TableArea>
      <div style={containerStyle}>
        <table style={tableStyle}>
          <thead style={headerStyle}>
            <tr>
              <th style={cellStyle}></th>
              <th style={cellStyle}>社員番号</th>
              <th style={cellStyle}>名前</th>
              <th style={cellStyle}>稼働時間</th>
              <th style={cellStyle}>時間外労働</th>
              <th style={cellStyle}>残業月45h<br />超過回数</th>
              <th style={cellStyle}>有休使用数</th>
              <th style={cellStyle}>メールアドレス</th>
            </tr>
          </thead>
          <tbody  style={bodyStyle}>
            {data.map(user => (
              <tr key={user.id}>
                <td style={cellStyle}>
                  <input
                    type="checkbox"
                    checked={selected.includes(user.id)}
                    onChange={() => handleSelect(user.id)}
                  />
                </td>
                <td style={cellStyle}>{user.emp_num}</td>
                <td style={cellStyle}>{user.name}</td>
                <td style={cellStyle}>{user.operate}</td>
                <td style={cellStyle}>{user.over}</td>
                <td style={cellStyle}>{user.exceed}</td>
                <td style={cellStyle}>{user.vacation}</td>
                <td style={cellStyle}>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <InputWrapper>
          <TextArea>
           ●時間外労働が<InputArea type="number" min="0"value={inputOver} onChange={overHandleChange} />時間以上の社員を選択
          </TextArea>
          <ButtonArea onClick={handleSelectOver}>
            チェック
          </ButtonArea>
          <TextArea>
           ●残業月45h超過回数が<InputArea type="number" min="0"value={inputExceed} onChange={exceedHandleChange} />回以上の社員を選択
          </TextArea>
          <ButtonArea onClick={handleSelectExceed}>
            チェック
          </ButtonArea>
          <TextArea>
           ●有休使用数が<InputArea type="number" min="0"value={inputVacation} onChange={vacationHandleChange} />回以下の社員を選択
          </TextArea>
          <ButtonArea onClick={handleSelectVacation}>
            チェック
          </ButtonArea>
          <TextArea>
           ●全社員の選択を解除
          </TextArea>
          <ButtonArea onClick={handleSelectClear}>
           クリア
          </ButtonArea>
          <TextArea>
           ●選択した社員を記載したcsvファイルを出力
          </TextArea>
          <DownloadArea onClick={handleDownload}>
           ダウンロード
          </DownloadArea>
        </InputWrapper>
      </TableArea>
    </>
  )
}