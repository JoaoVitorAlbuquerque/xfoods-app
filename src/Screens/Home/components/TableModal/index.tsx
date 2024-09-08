import { Modal, TouchableOpacity } from "react-native";

import { Text } from "../../../../components/Text";

import { Overlay, ModalBody, Header, Form, Input } from './styles';
import { Close } from "../../../../components/Icons/Close";
import { Button } from "../../../../components/Button";
import { isAndroid } from "../../../../utils/isAndroid";
import { useState } from "react";
import { useTableModalController } from "./useTableModalController";

interface TableModalProps {
  visible: boolean;
  onCloseTableModal(): void;
  onSave(table: string): void;
}

export function TableModal({
  visible,
  onCloseTableModal,
  onSave,
}: TableModalProps) {
  const {
    table,
    setTable,
    handleSave,
  } = useTableModalController(onSave, onCloseTableModal);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity onPress={onCloseTableModal}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button onPress={handleSave} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
