import { Modal, TextInput, TouchableOpacity } from "react-native";

import { Text } from "../../../../../../components/Text";
import { Button } from "../../../../../../components/Button";
import { Close } from "../../../../../../components/Icons/Close";

import { Actions, Form, Header, ModalBody, Overlay, TextArea } from "./styles";

interface DescriptionModalProps {
  visible: boolean;
  onClose(): void;
  onConfirmOrder(): void;
  isLoading: boolean;
}

export function DescriptionModal({ visible, onClose, onConfirmOrder, isLoading }: DescriptionModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <Overlay>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a Descrição</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <TextArea placeholder="Adicione uma descrição..." />
          </Form>

          <Actions>
            <TouchableOpacity
              onPress={onConfirmOrder}
            >
              <Text weight="600" color="#d73035">
                Pular
              </Text>
            </TouchableOpacity>

            <Button
              onPress={onConfirmOrder}
              // disabled
              isLoading={isLoading}
            >
              Confirmar Pedido
            </Button>
          </Actions>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
