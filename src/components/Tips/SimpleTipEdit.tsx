import * as React from "react";
import { Button, Modal, Select, Space } from "antd";
import Spinner from "../ui/Spinner";
import {ITip} from '../PostTip/data';

interface Props {
  tip: ITip;
}

const AppLoadingModal: React.FC<Props> = (props: Props) => {
  const [outcome, setOutcome] = React.useState<string>('PENDING');
  return (
    <Modal
      open={!!props.tip}
      footer={null}
      mask={true}
      destroyOnClose={true}
      maskClosable={false}
      centered
      closable={false}
      zIndex={9000}
    >
      <Space>
        <p>{props.tip?.homeTeamName}</p>
        <p>{props.tip?.awayTeamName}</p>
        <p>{props.tip?.country}</p>
        <p>{props.tip?.league}</p>
        <p>{props.tip?.leagueId}</p>
        <p>{props.tip?.bet}</p>
        <p>{props.tip?.betCategory}</p>
        <p>{props.tip?.odd}</p>
        <p>{props.tip?.startAt}</p>
        <Select
            defaultValue="PENDING"
            style={{ width: 130 }}
            onChange={(value) => {
              console.log(value);
              setOutcome(value);
            }}
            options={[
              { value: 'WIN', label: 'WIN' },
              { value: 'LOSE', label: 'LOSE' },
              { value: 'PENDING', label: 'PENDING' },
              { value: 'VOID', label: 'VOID' },
            ]}
          />

          <Button type='primary'>Update</Button>
      </Space>
      {/* <Spinner /> */}
    </Modal>
  );
}

export default AppLoadingModal;
