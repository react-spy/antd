
import React from 'react';
import { Button } from 'antd';
import { DraggableModal } from 'react-antd-library';

export default () => {
    const [visible, setVisible] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);
    return (
        <div>
            <Button onClick={() => setVisible(true)}>打开Modal</Button>
            <DraggableModal
                title="可拖动Modal"
                visible={visible}
                onCancel={() => setVisible(false)}
            >
                <Button onClick={() => setVisible2(true)}>打开Modal2</Button>
                <DraggableModal
                    title="嵌套Modal"
                    visible={visible2}
                    onCancel={() => setVisible2(false)}
                >
                    我是内容
                </DraggableModal>
            </DraggableModal>
        </div>
    );
};