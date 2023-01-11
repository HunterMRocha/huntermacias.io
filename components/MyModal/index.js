import React, { useState } from "react";
import { Modal, useModal, Button, Text } from "@nextui-org/react";

const MyModal = ( { title, description, modalDescription, url }) => {
  const { setVisible, bindings } = useModal();
  const { counter, setCounter } = useState(6);


  const handleClick = (url) => {
    window.open(url)
  }

  return (
    <div className="relative">
      <div className="pt-2 mob:justify-left flex space-x-2">
        <Button size='xs' auto bordered color="success" onPress={() => setVisible(true)}>
          Details
        </Button>

      </div>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {title}
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Text id="modal-description">
           {description}
          </Text>
          <Text>
            {modalDescription}
          </Text>
          <Text>
            Views: {Math.ceil(Math.random() * (109, 5024) + 109)}
          </Text>
        </Modal.Body>

        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          <Button auto flat color="primary" onPress={() => window.open(url)}>
            {/* {url.toString().substr(19, 40)} */}
            Demo
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  );
}

export default MyModal