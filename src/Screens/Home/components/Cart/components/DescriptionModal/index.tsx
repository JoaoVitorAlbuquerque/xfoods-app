import { Modal, TextInput, TouchableOpacity } from "react-native";

import { Text } from "../../../../../../components/Text";
import { Button } from "../../../../../../components/Button";
import { Close } from "../../../../../../components/Icons/Close";

import { Actions, Form, Header, ModalBody, Overlay, TextArea } from "./styles";
import { useState } from "react";

interface DescriptionModalProps {
  visible: boolean;
  onClose(): void;
  onConfirmOrder(): void;
  isLoading: boolean;
  setDescription(value: string): void;
  description: string;
}

export function DescriptionModal({
  visible,
  onClose,
  onConfirmOrder,
  isLoading,
  setDescription,
  description,
}: DescriptionModalProps) {
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
            <TextArea
              placeholder="Adicione uma descrição..."
              onChangeText={setDescription}
            />
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
              disabled={description.length === 0}
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
