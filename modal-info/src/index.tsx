import React from "react";
import styles from "./index.less";
import { Modal, Button } from "antd";

function info() {
  Modal.info({
    title: "This is a notification message",
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {}
  });
}

function success() {
  Modal.success({
    content: "some messages...some messages..."
  });
}

function error() {
  Modal.error({
    title: "This is an error message",
    content: "some messages...some messages..."
  });
}

function warning() {
  Modal.warning({
    title: "This is a warning message",
    content: "some messages...some messages..."
  });
}

export default () => (
  <div className={styles.container}>
    <div id="components-modal-demo-info">
      <div>
        <Button onClick={info}>Info</Button>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </div>
    </div>
  </div>
);
