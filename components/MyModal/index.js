import { Modal, useModal, Button, Text } from "@nextui-org/react";

const MyModal = ( { title, description }) => {
  const { setVisible, bindings } = useModal();

  return (
    <div className="relative">
      <div className="absolute right-0 bottom-2">
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
           {description} Breakdown
          </Text>
        </Modal.Body>

        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          <Button auto flat color="secondary" onPress={() => setVisible(false)}>
            View Code
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  );
}

export default MyModal