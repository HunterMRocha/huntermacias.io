import { Modal, useModal, Button, Text } from "@nextui-org/react";

const MyModal = ( { title, description, url }) => {
  const { setVisible, bindings } = useModal();


  const handleClick = (url) => {
    window.open(url)
  }

  return (
    <div className="relative">
      <div className="flex space-x-2 justify-right pt-2">
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
        </Modal.Body>

        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          <Button auto flat color="secondary" onPress={() => handleClick(url)}>
            View Code
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  );
}

export default MyModal